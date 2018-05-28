<template lang="pug">
  v-layout(row wrap)
    v-flex(xs6 offset-xs3)

      v-toolbar(dark color="secondary")
        v-toolbar-title Чат

      v-card(class="pa-0")
        v-container(fluid class="pa-3")
          v-layout(row wrap)
          ul
            li(v-for="message in messages")
              span(class="username" :class="[ isSameUser(message) ? 'light-blue--text' : 'light-green--text']") {{message.name}}
              span(class="grey--text text--darken-2") {{message.text}}
              span(class="grey--text text--lighten-1 time") {{message.time}}
        v-divider
        v-card-actions(class="pa-3")
          v-text-field(v-model="message_field"
                        hide-details
                        placeholder="Введите сообщение")

</template>

<script>
  export default {
    name: 'Chat',
    props: ['name'],
    data () {
      return {
        message_field: null,
        messages: [
          {
            id: 1,
            name: 'Mikhail',
            text: 'Hello!',
            time: 1239849824
          },
          {
            id: 2,
            name: 'Pavel',
            text: 'Hi!',
            time: 1239849874
          },
          {
            id: 3,
            name: 'Pavel',
            text: 'How are you?',
            time: 1239849899
          }
        ]
      }
    },
    methods: {
      isSameUser (message) {
        return message.name === this.name
      }
    }

  }
</script>

<style scoped>
  li {
    list-style-type: none;
  }
  span {
    font-size: 1.2em;
  }
  .username {
    font-weight: 700;
    padding: 0 10px;
  }
  .time {
    display: block;
    font-size: 0.8em;
  }
</style>
