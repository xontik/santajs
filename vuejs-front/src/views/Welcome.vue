<template>
  <div>
    <home-hero/>
    <home-details/>
  </div>
</template>

<script>
import HomeHero from '../components/HomeHero'
import HomeDetails from '../components/HomeDetails'

export default {
  name: 'Welcome',
  components: {
    HomeHero,
    HomeDetails
  }
}
</script>

<style scoped>
.home-hero {
  height: 100vh;
}
</style>
