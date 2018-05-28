<template lang="pug">
  v-snackbar(:timeout="error_message.timeout"
              :color="error_message.color"
              v-model="error_message.snackbar_visibility"
              class="text-xs-center") {{error_message.text}}
</template>

<script>
  export default {
    name: 'Snackbar',
    props: ['error_message']
  }
</script>

<style scoped>

</style>
