<template>
  <el-button @click="count">{{btnTxt}}</el-button>
</template>

<script>
export default {
  name: "CountDown",
  props: {
    canUse: Boolean,
    callback: Function,
    needReset: Number
  },
  data() {
    return {
      btnTxt: "获取验证码",
      defaultTxt: "获取验证码",
      countNum: 10,
      isCount: false
    };
  },

  watch: {
    needReset: function(val, old) {
      if (val !== old) {
        this.reset();
      }
    }
  },

  methods: {
    count() {
      let { canUse, timer, countNum, callback, isCount } = this;
      if (!canUse) return null;
      if (isCount) return null;
      this.btnTxt = countNum;
      this.isCount = true;
      const self = this;
      callback && callback();
      this.timer = setInterval(() => {
        --countNum;
        self.btnTxt = countNum;
        self.countNum = countNum;
      }, 1000);
    },
    reset() {
      clearInterval(this.timer);
      this.btnTxt = this.defaultTxt;
      this.isCount = false;
      this.countNum = 10;
    }
  }
};
</script>