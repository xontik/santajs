<template>
  <nav class="menu">
    <ul>
      <li v-for="link in links" :key="link.name">
        <router-link :to="{ name: link.name, params: link.params}">{{link.label}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      links: [
        {name: 'Home', label: 'Home'},
        {name: 'HelloWorld', label: 'Debug Page'},
        {name: 'NotFound', params: {0: 'notfound'}, label: '404'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu {
  background-color: burlywood;
}
</style>
