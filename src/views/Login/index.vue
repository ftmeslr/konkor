<template>
  <NavbarDashboard />

  <div class="login">
    <div
      style="transform: scaleX(-1); justify-content: space-around;"
      class="container flex align-center"
      
    >
      <div class="login__box">
        <img src="@/assets/images/3-15.png" alt="" />
        <h3>ورود به حساب کاربری</h3>
        <div class="login__input">
          <input type="text" placeholder="کدملی" />
          <img src="@/assets/images/3-33.png" alt="" />
        </div>
        <div class="login__input">
          <input type="text" placeholder="کلمه عبور" />
          <img src="@/assets/images/3-33.png" alt="" />
        </div>
        <span class="flex">
          <span class="flex align-center">
            <input id="savePass" type="checkbox" />
            <label class="label" for="savePass"> مرا به خاطر بسپار </label>
          </span>
          <span class="flex align-center mr-5">
            <input id="forgotPass" type="checkbox" />
            <label class="label" for="forgotPass">
              رمزعبور خود را فراموش کرده اید؟
            </label>
          </span>
        </span>
        <button class="btn">ورود</button>
      </div>

      <div class="login__img">
        <img src="@/assets/images/3-26.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
