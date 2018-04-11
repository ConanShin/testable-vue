<template>
  <main>
    <h1>{{ msg }}</h1>
    <p>{{ name }}</p>
    <input @keyup.enter='setNameTo'/><button @click='setNameTo'>SET</button>
    <p>{{ nameStartsWithC }}</p>
  </main>
</template>

<script>
export default {
  name: 'VuexTest',
  data () {
    return {
      msg: 'Vuex Test'
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
    }
  }
}
</script>

<style scoped>
</style>
