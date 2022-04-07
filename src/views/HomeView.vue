<template>
  <div class="home">
    <!-- <a id="custom-login-btn" @click="loginWithKakao" style="cursor: pointer">
      <img
        src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        width="222"
        alt="카카오 로그인 버튼"
      />
    </a> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      kakao_account: "",
      nickname: "",
      email: "",
    };
  },
  methods: {
    loginWithKakao() {
      /* eslint-disable */
      // window.Kakao.Auth.login({
      //   scope: "profile_nickname, account_email",
      //   success: this.getKakaoAccount,
      // });
      /* eslint-enable */
    },
    getKakaoAccount() {
      // window.Kakao.API.request({
      //   url: "/v2/user/me",
      //   success: (res) => {
      //     console.log(res);
      //     this.kakao_account = res.kakao_account;
      //     this.nickname = this.kakao_account.profile.nickname;
      //     this.email = this.kakao_account.email;
      //   },
      // });
    },
  },
  created() {},
};
</script>
