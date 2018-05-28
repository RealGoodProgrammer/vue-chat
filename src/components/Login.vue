<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md4)
        v-card(class="elevation-12")

          v-toolbar(dark color="secondary")
            v-toolbar-title Авторизация

          v-card-text(class="mt-4")
              v-text-field(prepend-icon="person"
                            v-model="name_field"
                            label="Отображаемое имя"
                            placeholder="Алексей"
                            @keyup.enter="login")

          v-card-actions
            v-spacer
            v-btn(color="secondary" @click="login") Войти

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
        name_field: null,
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
        if (this.name_field) {
          this.$router.push({ name: 'Chat', params: { name: this.name_field } })
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
