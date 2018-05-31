<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md3)
        v-card(class="elevation-12")

          v-toolbar(dark color="secondary")
            v-toolbar-title {{title_header}}

          v-card-text(class="mt-4")
              v-text-field(prepend-icon="person"
                            id="name_field"
                            v-model="name_field.input"
                            :label="name_field.label"
                            :placeholder="name_field.placeholder"
                            @keyup.enter="login")

          v-card-actions
            v-spacer
            v-btn(color="secondary" @click="login") {{enter_button_text}}

    Snackbar(:error_message="error_message")
</template>

<script>
  import Snackbar from '@/components/common/Snackbar'

  export default {
    name: 'Login',
    components: {
      Snackbar
    },
    data () {
      return {
        title_header: 'Авторизация',
        enter_button_text: 'Войти',
        name_field: {
          input: null,
          label: 'Отображаемое имя',
          placeholder: 'Алексей'
        },
        error_message: {
          text: 'Введите имя :)',
          color: 'error',
          timeout: 3000,
          snackbar_visibility: false
        }
      }
    },
    methods: {
      login () {
        if (this.name_field.input) {
          this.$router.push({ name: 'Chat', params: { name: this.name_field.input } })
        } else {
          this.error_message.snackbar_visibility = true
        }
      }
    }
  }
</script>
<style>
h1, h2 {
  font-weight: normal;
}
</style>
