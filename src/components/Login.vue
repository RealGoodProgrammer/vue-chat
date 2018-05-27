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
                            placeholder="Алексей")

          v-card-actions
            v-spacer
            v-btn(color="secondary") Войти
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        name_field: null
      }
    }
  }
</script>
<style>
h1, h2 {
  font-weight: normal;
}
</style>
