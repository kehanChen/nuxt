<template>
  <div>
    message-on
    <p ref="p" @click="self">{{news}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: 'message'
    }
  },
  created() {
    this.$root.$on('message', (msg) => {
      this.news = msg.text;
      console.log(this.$refs.p.textContent);
      this.$nextTick(function() {
        console.log('dom更新了')
      })
      console.log(msg.text);
    });
    console.dir(this.$root);
  },
  methods: {
    self() {
      console.dir(this.$refs.p.textContent);
    }
  }
}
</script>