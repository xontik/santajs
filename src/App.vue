<template>
  <v-app>
    <app-navigation></app-navigation>
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import AppNavigation from '@/components/AppNavigation'
  import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

  export default {
  name: 'App',
  data: () => ({
  }),
  components: {AppNavigation}
}
</script>

<style lang="scss" scoped>

</style>
