<template>
  <md-list-item >
    <md-icon :class="{'icon-only': iconOnly}">move_to_inbox</md-icon>
    <span v-if="!iconOnly" class="md-list-item-text" >{{text}}</span>
  </md-list-item>
</template>

<script>
export default {
  name: 'menu-item',
  props: ['text', 'params', 'name'],
  computed: {
    iconOnly () {
      return this.$store.state.iconOnly
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.md-icon.icon-only {
  margin: 2px;
}
</style>
