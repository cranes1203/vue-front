<template>
  <div class="about">
    <div class="">
      <p>아이디 또는 이메일</p>
      <input type="text" v-model="username" />
    </div>
    <div class="">
      <p>패스워드</p>
      <input type="password" v-model="userPassword" />
    </div>
    <div class="">
      <p>이메일</p>
      <input type="email" v-model="userEmail" />
    </div>
    <div class="">
      <button @click="join">회원가입</button>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      username: "",
      userPassword: "",
      userEmail: "",
    };
  },
  methods: {
    async join() {
      await axios({
        method: "POST",
        url: "/api/auth/local/register",
        data: {
          username: this.username,
          password: this.userPassword,
          email: this.userEmail,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          throw new Error(error);
        });
    },
  },
};
</script>
