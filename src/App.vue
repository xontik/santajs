<template>
  <div id="app">
    <md-app md-mode="fixed" class="wrapper">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button md-small-hide" @click="toggleMenu" v-if="!menuVisible" >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini" class="md-xsmall-hide md-small-hide">
        <md-toolbar class="md-primary" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <!--TODO make that into custom component-->
          <menu-item v-for="link in this.links" :key="link.name" v-bind="link"></menu-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
    <div class="">
      <div class="phone-viewport">
        <md-bottom-bar class="md-accent" md-sync-route md-mode="shift">
          <md-bottom-bar-item id="bottom-bar-item-home" md-label="Home" md-icon="home"></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-pages" md-label="Pages" md-icon="pages"></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-favorites" md-label="Favorites" md-icon="favorite"></md-bottom-bar-item>
        </md-bottom-bar>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'
import 'vue-material/src/components/MdLayout/variables.scss'

export default {
  name: 'App',
  data: () => ({
    menuVisible: false,
    links: [
      {name: 'Home', text: 'Home'},
      {name: 'HelloWorld', text: 'Debug Page'},
      {name: 'NotFound', params: {0: 'notfound'}, text: '404'}
    ]
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  },
  components: {MenuItem}
}
</script>

<style lang="scss" scoped>

  #app{
  height: 100vh;
}
.wrapper {
  height:100vh;
}
/*.md-app-drawer{*/
  /*max-width: 300px;*/
  /*width:auto;*/
/*}*/
.phone-viewport {
  position: absolute;
  bottom: 0px;
  left:0;
  width: 100%;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, .26);
  background: rgba(#000, .06);

  @media (min-width: 960px) {
    display:none;
  }

}
</style>
