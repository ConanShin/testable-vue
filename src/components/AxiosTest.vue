<template>
  <main>
    <h1>{{ msg }}</h1>
    <p>{{ msgFromServer }}</p>
    <button @click='getMessage'>Get Message</button>
    <button @click='msgFromServer = ""'>Reset</button>
  </main>
</template>
<script>
import axios from 'axios'

export default {
  name: 'AxiosTest',
  data () {
    return {
      msg: 'Axios Test',
      msgFromServer: ''
    }
  },

  methods: {
    getMessage: async function () {
      const response = await axios.get('http://localhost:9000/hello')
      this.msgFromServer = response.data
    }
  }
}
</script>
<style scoped>
</style>
