<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout>
      <v-breadcrumbs
        :items="breadcrumbs"
        divider=">"/>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Lists',
  data () {
    return {
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: false,
          to: '/'
        },
        {
          text: 'Listes',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
