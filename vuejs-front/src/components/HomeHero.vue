<template>
  <v-container
    class="home-hero"
    fill-height
    fluid>
    <v-layout
      align-center
      column
      justify-center
      pa-5>
      <div class="display-4 font-weight-black white--text text-xs-center">Plaisir d'offrir</div>
      <div class="display-1 font-weight-bold white--text text-xs-center mt-3">Offrir des cadeau n'a jamais été aussi
      facile
      </div>
      <v-btn
        class="mt-5 blue darken-4"
        fab>
        <v-icon
          color="white"
          large>expand_more</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'WelcomeHero'
}
</script>

<style scoped>
  .home-hero {
    background: url('http://source.unsplash.com/ndP5Oj0sSps');
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
</style>
