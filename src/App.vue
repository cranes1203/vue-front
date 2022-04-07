<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |

    <span v-if="userInfor.jwt == ''">
      <router-link to="/about">회원가입</router-link> |
      <router-link to="/login">로그인</router-link> |
    </span>
    <span v-else> <a @click="logout">로그아웃</a> | </span>
    <router-link to="/userInfor">유저 정보</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  computed: {
    userInfor() {
      return this.$store.getters.userInfor;
    },
  },
  watch() {
    console.log(this.userInfor);
  },
  methods: {
    logout() {
      this.$store.commit("logoutUser");
      alert("로그아웃 되었습니다.");
      this.$router.push({ name: "home" });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
