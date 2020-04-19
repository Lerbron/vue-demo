<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" :num="num" />
    <el-button @click="_click" type="primary">primary</el-button>
    <el-button @click="add(1)" type="success">+1</el-button>
    <el-button @click="add(2)" type="success">+2</el-button>
    <el-button @click="goAbout" type="success">To About</el-button>
    <el-button @click="setRoot('/home')" type="success">set root</el-button>
    <span>{{num}}</span>
    <span>{{root}}</span>
    <a-switch defaultChecked @change="onChange" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      num: state => state.test.num
    }),
    ...mapState({
      root: state => state.root
    })
  },
  methods: {
    _click() {
      alert("1");
    },
    _add() {
      this.add(1);
    },
    goAbout() {
      this.$router.push("/about");
    },
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    ...mapActions("test", ["add"]),
    ...mapActions(["setRoot"])
  }
};
</script>
