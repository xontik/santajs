<template>
  <v-app>
    <app-navigation/>
    <v-content transition="slide-x-transition">
        <router-view/>
    </v-content>
    <custom-footer/>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'

import AppNavigation from '@/components/AppNavigation'
import CustomFooter from '@/components/CustomFooter' // Ensure you are using css-loader

export default {
  name: 'App',
  components: {AppNavigation, CustomFooter},
  data: () => ({})
}
</script>

<style lang="scss" scoped>

</style>
