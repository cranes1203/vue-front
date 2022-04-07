<template>
  <div>
    <div v-if="userInfor.jwt != ''">
      {{ userInfor }}
    </div>
    <div v-else>
      <span> 로그인이 필요합니다. </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    userInfor() {
      return this.$store.getters.userInfor;
    },
  },
  mounted() {
    console.log(this.userInfor);
  },
};
</script>
<style lang=""></style>
