<template>
  <span>
    <v-navigation-drawer
      app
      class="grey lighten-4"
      clipped
      fixed
      mobile-break-point="md"
      v-model="drawer"
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
                  prepend-inner-icon="search"
                ></v-text-field>
              </v-toolbar>
            </v-flex>
          </v-layout>
        <template v-for="(item, i) in items">
         <v-layout
           :key="i"
           align-center
           row
           v-if="item.heading"
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
            :key="i"
            class="my-3"
            dark
            v-else-if="item.divider"
          ></v-divider>
          <v-list-tile
            :key="i"
            v-else
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
    <v-toolbar app clipped-left color="blue darken-4" dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{appTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        class="hidden-sm-and-down"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn flat>SIGN IN</v-btn>
      <v-btn color="blue">JOIN</v-btn>
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
        {icon: 'list', text: 'Listes'},
        {icon: 'event', text: 'Evènements'},
        {divider: true},
        {icon: 'contact_support', text: 'Contact'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
