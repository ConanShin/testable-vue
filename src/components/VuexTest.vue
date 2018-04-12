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
  }
}
</script>

<style scoped>
</style>
