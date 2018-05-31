<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md4)
        h1 {{header_text}}
        h2 {{sub_header_text}}
        v-btn(@click="backToMain") {{return_button_text}}
</template>

<script>
  export default {
    name: 'NotFoundComponent',
    data () {
      return {
        header_text: '404',
        sub_header_text: 'Такой страницы не существует',
        return_button_text: 'Вернуться на главную'
      }
    },
    methods: {
      backToMain () {
        this.$router.push({name: 'Login'})
      }
    }
  }
</script>

<style scoped>

</style>
