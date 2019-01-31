<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout
      align-center
      justify-center>
      <v-flex
        xs12
        sm8
        md4>
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer/>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                prepend-icon="person"
                name="email"
                label="Email"
                type="text"/>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"/>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              to="/forgot-password"
              color="primary">Mot de passe oublié ?</v-btn>
            <v-spacer/>
            <v-btn
              :disabled="!valid"
              color="primary"
              @click="validate">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Signin',
  data: () => ({
    valid: true,
    email: '',
    password: ''
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        console.log('validate')
      }
    }
  }
}
</script>

<style scoped>

</style>
