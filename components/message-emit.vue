<template>
  <div @click = "message">
    message-emit
  </div>
</template>

<script>
export default {
  methods: {
    message() {
      this.$root.$emit('message', {text: 'message-transmit'})
    }
  }
}
</script>