<template lang="pug">
  v-container(fluid fill-height)
    v-layout(align-center justify-center)
      v-flex(xs8)

        v-toolbar(dark color="secondary")
          v-toolbar-title Чат

        v-card(class="pa-0")
          v-container(fluid class="pa-3")
            ul(class="frame" v-chat-scroll="{always: false, smooth: true}")
              li(v-for="message in messages" :key="message.id")
                span(class="username" :class="[ isSameUser(message) ? 'light-blue--text' : 'light-green--text']") {{message.name}}
                span(class="grey--text text--darken-2") {{message.text}}
                span(class="grey--text text--lighten-1 time") {{message.time}}
          v-divider
          v-card-actions(class="pa-3")
            v-text-field(v-model="message_field"
                          hide-details
                          placeholder="Введите сообщение"
                          @keyup.enter="sendMessage")
      Snackbar(:error_message="error_message")
</template>

<script>
  import Snackbar from '@/components/common/Snackbar'
  import db from '@/firebase/index'

  const collection = db.collection('messages')

  export default {
    name: 'Chat',
    components: {
      Snackbar
    },
    props: ['name'],
    data () {
      return {
        message_field: null,
        error_message: {
          text: 'Сообщение не может быть пустым!',
          color: 'error',
          timeout: 3000,
          snackbar_visibility: false
        },
        messages: []
      }
    },
    methods: {
      isSameUser (message) {
        return message.name === this.name
      },
      sendMessage () {
        if (this.message_field) {
          collection.add({
            text: this.message_field,
            name: this.name,
            time: Date.now()
          }).catch(error => {
            console.error(error)
          })
          this.message_field = null
        } else {
          this.error_message.snackbar_visibility = true
        }
      }
    },
    created () {
      collection.orderBy('time').onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            let doc = change.doc
            this.messages.push({
              id: doc.id,
              name: doc.data().name,
              text: doc.data().text,
              time: doc.data().time
            })
          }
        })
      })
    }

  }
</script>

<style scoped>
  .frame {
    min-height: 350px;
    max-height: 700px;
    overflow: auto;
  }

  .frame::-webkit-scrollbar {
    width: 3px;
  }

  .frame::-webkit-scrollbar-track {
    background: #FEFEFE;
  }

  .frame::-webkit-scrollbar-thumb {
    background: #424242;
  }


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
    padding: 0 10px;
    font-size: 0.8em;
  }
</style>
