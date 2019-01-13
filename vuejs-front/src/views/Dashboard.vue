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
  name: 'Dashboard',
  data () {
    return {
      event: {
        id: 1,
        name: 'Anniversaire Fanny',
        img: 'http://source.unsplash.com/Xaanw0s0pMk'
      },
      breadcrumbs: [
        {
          text: 'Dashboard',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
