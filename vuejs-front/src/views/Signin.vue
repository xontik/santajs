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
            <v-form @keyup.enter="submit">
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              />
              <v-text-field
                v-model="password"
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :type="show ? 'text' : 'password'"
                :error-messages="passswordErrors"
                label="Mot de passe"
                required
                @keyup.enter="submit"
                @click:append="show = !show"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              flat
              to="/forgot-password"
              color="primary">Mot de passe oublié ?</v-btn>
            <v-spacer/>
            <v-btn
              :loading="submitted"
              :disabled="submitted"
              color="primary"
              @click="submit">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Signin',
  data: () => ({
    submitted: false,
    show: false,
    email: '',
    password: '',
    passwordError: false,
    emailNotFound: false
  }),
  validations: {
    email: {
      required,
      email,
      emailNotFound () {
        return !this.emailNotFound
      }
    },
    password: {
      required,
      passwordError () {
        return !this.passwordError
      }
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('L\' e-mail doit etre valide')
      !this.$v.email.required && errors.push('Veuillez renseigner un e-mail')
      !this.$v.email.emailNotFound && errors.push('Cette e-mail n\'existe pas')
      return errors
    },
    passswordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('un mot de passe est requis')
      !this.$v.password.passwordError && errors.push('Mauvaise mot de passe')
      return errors
    }
  },
  methods: {
    submit () {
      if (!this.$v.$invalid) {
        this.submitted = true
        console.log('submit')
      }
    }
  }
}
</script>

<style scoped>

</style>
