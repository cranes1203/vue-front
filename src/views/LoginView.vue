<template>
  <div>
    <div class="">
      <p>아이디 또는 이메일</p>
      <input type="text" v-model="username" />
    </div>
    <div class="">
      <p>패스워드</p>
      <input type="password" v-model="userPassword" />
    </div>
    <div class="">
      <button @click="login">로그인</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      userPassword: "",
    };
  },
  methods: {
    async login() {
      await axios({
        method: "POST",
        url: "/api/auth/local",
        data: {
          identifier: this.username,
          password: this.userPassword,
        },
      })
        .then((res) => {
          console.log(res);
          this.$store.commit("setUserInformation", res.data);
          alert("로그인 되었습니다.");
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
    },
  },
};
</script>
<style lang=""></style>
