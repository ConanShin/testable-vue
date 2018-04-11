<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EmitTest',
  data () {
    return {
      msg: 'Emit Test'
    }
  },

  methods: {
    emitTest: function () {
      this.$emit('emitTest', 'emitTestParameter')
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
