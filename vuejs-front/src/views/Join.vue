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
        <v-card
          class="elevation-12">
          <v-toolbar
            dark
            color="primary">
            <v-toolbar-title>Join form</v-toolbar-title>
            <v-spacer/>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.enter="submit">
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
                :error-messages="pseudoErrors"
                label="Pseudo"
                @input="$v.pseudo.$touch()"
                @blur="$v.pseudo.$touch()"
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
                @keyup.enter="submit"
              />
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Accepter les Conditions d'utilisation ?"
                required
                @keyup.enter="submit"
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              />
            </v-form>
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
import gql from 'graphql-tag'

export default {
  name: 'Join',
  validations: {
    firstname: { required, alpha },
    lastname: { required, alpha },
    email: { required,
      email,
      isUnique () {
        return !this.emailExist
      }},
    pseudo: {isUnique (value) {
      return value === '' || !this.pseudoExist
    }},
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
    submited: false,
    submissionError: null,
    submissionErrorNotification: false
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
      !this.$v.email.isUnique && errors.push('Cette e-mail existe déjà')
      return errors
    },
    pseudoErrors () {
      const errors = []
      if (!this.$v.pseudo.$dirty) return errors
      !this.$v.pseudo.isUnique && errors.push('Ce pseudo existe déjà')
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
    },
    getErrorCode () {
      if (!this.submissionError) {
        return 'UnkownError'
      }
      if (!this.submissionError.name) {
        return 'ServerError'
      }
      return this.submissionError.name
    }
  },
  // Apollo-specific options
  apollo: {
    // Query with parameters
    emailExist: {
      // gql query
      query: gql`query emailExist($email: String!) {
      emailExist(email: $email)
    }`,
      // Static parameters
      variables () {
        return {email: this.email}
      },
      fetchPolicy: 'network-only'
    },
    pseudoExist: {
      // gql query
      query: gql`query pseudoExist($pseudo: String!) {
      pseudoExist(pseudo: $pseudo)
    }`,
      // Static parameters
      variables () {
        return {pseudo: this.pseudo}
      },
      fetchPolicy: 'network-only'
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.submited = true
        this.$apollo.mutate({
          mutation: gql`mutation signup($email: String!, $password: String!, $firstname: String, $lastname: String, $pseudo: String) {
            signup (email:$email, password:$password, firstname:$firstname, lastname:$lastname, pseudo:$pseudo) {
              token
              user {
                id
              }
            }
          }`,
          variables: {
            email: this.email,
            password: this.password,
            lastname: this.lastname,
            firstname: this.firstname,
            pseudo: this.pseudo
          }
        }).then(result => {
          let data = result.data
          let userId = data.signup.user.id
          let token = data.signup.token
          this.$store.dispatch('setAuth', {userId, token}).then(() =>
            this.$store.commit('addNotification',
              {
                type: 'success',
                message: 'Votre compte a été créé avec succès, vous désormais connecté'
              })
          )
          this.$router.push('/')
        }).catch(e => {
          this.submissionError = e.graphQLErrors[0]
          this.submissionErrorNotification = true
          this.submited = false
          this.$store.commit('addNotification',
            {
              type: 'error',
              message: 'Une erreur est survenue, pour vous faire aider utilisez le code [' + this.getErrorCode + ']'
            })
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
