<template>
  <span>
    <v-navigation-drawer
      v-if="shouldShowMenu"
      v-model="drawer"
      app
      class="grey lighten-4"
      clipped
      fixed
      mobile-breakpoint="sm"
    >
      <v-list
        class="grey lighten-4"
        dense
      >
        <v-layout
          align-center
          class="hidden-md-and-up"
          row
        >
          <v-flex>
            <v-toolbar flat>
              <v-text-field
                flat
                hide-details
                label="Search"
                prepend-inner-icon="search"/>
            </v-toolbar>
          </v-flex>
        </v-layout>
        <template v-for="(item, i) in items">
          <v-layout
            v-if="item.heading"
            :key="i"
            align-center
            row
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <!--<v-flex xs6 class="text-xs-right">-->
            <!--<v-btn small flat>edit</v-btn>-->
            <!--</v-flex>-->
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            class="my-3"
            dark
          />
          <v-list-tile
            v-else
            :key="i"
            :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      clipped-left
      color="blue darken-4"
      dark>
      <v-toolbar-side-icon
        v-if="shouldShowMenu"
        @click="drawer = !drawer"/>
      <router-link to="/">
        <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-spacer/>
      <v-text-field
        class="hidden-sm-and-down"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      />
      <v-spacer/>
      <v-btn
        flat
        to="/sign-in">SIGN IN</v-btn>
      <v-btn
        color="blue"
        to="join"
      >JOIN</v-btn>
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      appTitle: 'SantaJS',
      drawer: true,
      items: [
        {heading: 'Participer'},
        {icon: 'list', text: 'Listes', link: '/lists'},
        {icon: 'event', text: 'Evènements', link: '/events'},
        {divider: true},
        {icon: 'contact_support', text: 'Contact', link: '/contact'}
      ]
    }
  },
  computed: {
    shouldShowMenu () {
      return this.$store.state.authPayload.userId
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
}
</style>
