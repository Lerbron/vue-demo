<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" @click="add(3)">add 3</el-button>
    <span>{{num}}</span>
    <CountDown :canUse="canUse" :callback="getCode" :needReset="needReset"></CountDown>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CountDown from "@/components/CountDown.vue";
export default {
  components: {
    CountDown
  },
  data() {
    return {
      canUse: false,
      needReset: 0
    };
  },
  computed: {
    ...mapState({
      num: state => state.test.num
    })
  },
  methods: {
    getCode() {
      setTimeout(() => {
        this.needReset++;
      }, 3000);
    },
    ...mapActions("test", ["add"])
  },
  mounted() {
    setTimeout(() => {
      this.canUse = true;
    }, 5000);
  }
};
</script>
