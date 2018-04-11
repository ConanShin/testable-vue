<template>
  <div class="hello">
    <h1 class="test-class">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EmitTest',
  data () {
    return {
      msg: 'Testable Vue Component'
    }
  },

  methods: {
    emitTest: function () {
      this.$emit('emitTest', 'emitTestParameter')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
