<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt
      </h1>
      <h2 class="subtitle" @click="getData" v-demo="{ color: 'red', text: 'hello!' }">
        Nuxt.js project
      </h2>
      <div class="links">
      </div>
    </div>
    <ul>
      <Li v-for="(item,index) in list" :key="'list' + index">
        <p>{{item.title}}</p>
        <p>{{item.chapterLink}}</p>
      </Li>
    </ul>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info" @click="message">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div v-cloak>
      {{'' + test.title + test.chapterLink}}
    </div>

  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import axios from "axios";

export default {
  data() {
    return {
      list: [],
      test: {}
    };
  },
  components: {
    AppLogo
  },
   created() {
   
    setTimeout(async() => {
      //  this.list = await this.getData();
      // this.test = this.list[0];
    },1000);
    // console.dir(this.$root);
  },
  methods: {
    async getData() {
      // console.log(111);
      let res = await axios.get("/api");
      // console.log(res);
      // return出去的也是promise
      return res.data;
    },
    alert() {
      this.$message('测试测试');
    },
    message() {
      this.$root.$emit('message', {text: '我只是来测试一下的'})
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

[v-cloak] {
  display: none;
}
</style>
