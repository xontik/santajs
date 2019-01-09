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
    <v-layout
      justify-start
      align-start
      wrap
      row>
      <v-flex
        v-for="event in events"
        :key="event.id"
        fill-height
        xl3
        lg4
        sm6
        xs12>
        <v-card height="100%">
          <v-img
            :src="event.img"
            class="white--text"
            height="200px"
          >
            <v-container
              fill-height
              fluid>
              <v-layout fill-height>
                <v-flex
                  xs12
                  align-end
                  flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ event.name }}</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              :to="eventPath(event.id)"
              flat
              color="blue">VOIR</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Events',
  components: {Event},
  data: () => ({
    events: [
      {
        id: 1,
        name: 'Anniversaire Fanny',
        img: 'http://source.unsplash.com/Xaanw0s0pMk'
      },
      {
        id: 2,
        name: 'Noel 2019',
        img: 'http://source.unsplash.com/-Qf9JKLysUg'
      },
      {
        id: 3,
        name: 'Noel 2019',
        img: 'http://source.unsplash.com/-Qf9JKLysUg'
      },
      {
        id: 4,
        name: 'Noel 2019',
        img: 'http://source.unsplash.com/-Qf9JKLysUg'
      },
      {
        id: 5,
        name: 'Noel 2019',
        img: 'http://source.unsplash.com/-Qf9JKLysUg'
      },
      {
        id: 6,
        name: 'Noel 2019',
        img: 'http://source.unsplash.com/-Qf9JKLysUg'
      }
    ],
    breadcrumbs: [
      {
        text: 'Dashboard',
        disabled: false,
        to: '/'
      },
      {
        text: 'Evènements',
        disabled: true
      }
    ]
  }),
  methods: {
    eventPath: (id) => {
      return '/events/' + id
    }
  }
}
</script>

<style scoped>

</style>
