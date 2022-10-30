<template>
  <div class="container flex align-center navbar">
    <div class="logo">
      <img class="logo-main" src="@/assets/images/3-15.png" alt="" />
      <img class="logo-text" src="@/assets/images/3-16.png" alt="" />
    </div>
    <div class="nav-left flex-col">
      <div class="flex nav-left__top">
        <div class="search">
          <input type="input" /> <img src="@/assets/images/3-35.png" alt="" />
        </div>
        <div class="flex align-center">
          <router-link class="login" to="register">عضویت</router-link>
          <span class="line"></span>
          <router-link class="register" to="login">ورود</router-link>
        </div>
      </div>
      <div class="flex nav-left__bottom">
        <ul>
          <router-link class="li" to="/about">درباره ما</router-link>
          <router-link class="li" to="/about">خدمات</router-link>
          <router-link class="li" to="/about">پکیج ها</router-link>
          <router-link class="li" to="/about">مقالات</router-link>
          <router-link class="li" to="/about">تماس با مقالات</router-link>
          <router-link class="li" to="/about">ارتباط</router-link>
        </ul>
        <button class="btn">مشاوره</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarDashboard",
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
