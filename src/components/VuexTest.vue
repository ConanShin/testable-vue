<template>
  <main>
    <h1>{{ msg }}</h1>
    <p>{{ name }}</p>
    <input @keyup.enter='setNameTo'/><button @click='setNameTo'>SET</button>
    <p>{{ nameStartsWithC }}</p>
    {{msgFromServer}}
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'VuexTest',
  data () {
    return {
      msg: 'Vuex Test',
      msgFromServer: ''
    }
  },

  computed: {
    name: function () {
      return this.$store.state.name
    },
    nameStartsWithC: function () {
      return this.$store.getters.nameStartsWithC
    }
  },

  methods: {
    setNameTo: function () {
      const newNameField = this.$el.querySelector('input')
      const newName = newNameField.value
      this.$store.dispatch('setNameTo', newName)
      newNameField.value = ''
    },

    getMessage: async function () {
      const response = await axios.get('http://localhost:9000/hello')
      this.msgFromServer = response.data
    },

    methodInvokingActionNoParam: function () {
      this.$store.dispatch('actionWithoutParameter')
    },

    methodInvokingActionOneParam: function (param) {
      this.$store.dispatch('actionWithParameter', param)
    },

    methodInvokingActionTwoParams: function (firstParam, secondParam) {
      this.$store.dispatch('actionWithMultipleParameters', {firstParam, secondParam})
    }
  },

  created: function () {
    this.getMessage()
  }
}
</script>

<style scoped>
</style>
