<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs12 sm8 md4)
        h1 404
        h2 Такой страницы не существует
        v-btn(@click="backToMain") Вернуться на главную
</template>

<script>
  export default {
    name: 'NotFoundComponent',
    methods: {
      backToMain () {
        this.$router.push({name: 'Login'})
      }
    }
  }
</script>

<style scoped>

</style>
