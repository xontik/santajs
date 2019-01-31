<template>
  <v-container
    fluid
  >
    <v-layout>
      <v-flex
        xs12
        sm8
        md6
        offset-sm2
        offset-md3
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
            <v-spacer/>
          </v-toolbar>
          <v-card-text>
            <form>
              <v-text-field
                v-model="firstname"
                :error-messages="firstnameErrors"
                label="Prénom"
                required
                @input="$v.firstname.$touch()"
                @blur="$v.firstname.$touch()"
              />
              <v-text-field
                v-model="lastname"
                :error-messages="lastnameErrors"
                label="Nom"
                required
                @input="$v.lastname.$touch()"
                @blur="$v.lastname.$touch()"
              />
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              />
              <v-text-field
                v-model="pseudo"
                label="Pseudo"
                required
              />
              <v-text-field
                v-model="password"
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :type="show ? 'text' : 'password'"
                :error-messages="passswordErrors"
                label="Mot de passe"
                counter
                required
                @click:append="show = !show"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              />
              <v-text-field
                v-model="passwordConfirm"
                :type="show ? 'text' : 'password'"
                :error-messages="passswordConfirmErrors"
                label="Comfirmer mot de passe"
                required
                @click:append="show = !show"
                @input="$v.passwordConfirm.$touch()"
                @blur="$v.passwordConfirm.$touch()"
              />
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Accepter les Conditions d'utilisation ?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              />
            </form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              :loading="submited"
              :disabled="submited"
              color="primary"
              large
              block
              @click="submit" >Créer un compte</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { required, alpha, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'Join',
  validations: {
    firstname: { required, alpha },
    lastname: { required, alpha },
    email: { required, email },
    password: { required, minlength: minLength(8) },
    passwordConfirm: { required, sameAs: sameAs('password') },
    checkbox: {
      checked (val) {
        return val
      }
    }
  },

  data: () => ({
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    password: '',
    passwordConfirm: '',
    show: false,
    checkbox: false,
    submited: false
  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('Vous devez accepter les conditions d\'utilisations')
      return errors
    },
    firstnameErrors () {
      const errors = []
      if (!this.$v.firstname.$dirty) return errors
      !this.$v.firstname.required && errors.push('Veuillez renseigner votre prénom')
      !this.$v.firstname.alpha && errors.push('Ne doit contenir que des lettres')
      return errors
    },
    lastnameErrors () {
      const errors = []
      if (!this.$v.lastname.$dirty) return errors
      !this.$v.lastname.required && errors.push('Veuillez renseigner votre prénom')
      !this.$v.lastname.alpha && errors.push('Ne doit contenir que des lettres')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('L\' e-mail doit etre valide')
      !this.$v.email.required && errors.push('Veuillez renseigner un e-mail')
      return errors
    },
    passswordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Veuillez renseigner un mot de passe')
      !this.$v.password.minlength && errors.push('Doit faire plus de 8 caracteres')
      return errors
    },
    passswordConfirmErrors () {
      const errors = []
      if (!this.$v.passwordConfirm.$dirty) return errors
      !this.$v.passwordConfirm.required && errors.push('Ce champ est requis')
      !this.$v.passwordConfirm.sameAs && errors.push('Les mots de passe ne sont pas identique')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.submited = true
        this.$store.commit('testLogin')
        // call api
      }
    }
  }
}
</script>

<style scoped>

</style>
