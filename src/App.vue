<template>
  <div id="app">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="1">Navigation</md-toolbar>

        <md-list>
          <md-list-item v-for="link in links" :key="link.name">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">{{link.text}}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    menuVisible: false,
    links: [
      {name: 'Home', text: 'Home'},
      {name: 'HelloWorld', text: 'Debug Page'},
      {name: 'NotFound', params: {0: 'notfound'}, text: '404'}
    ]
  })
}
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
