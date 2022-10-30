<template>
  <NavbarDashboard />

  <div class="login">
    <div
      style="transform: scaleX(-1); justify-content: space-around"
      class="container flex align-center"
    >
      <div class="login__box">
        <h3>عضویت و ایجاد حساب کاربری</h3>
        <div class="login__input">
          <input type="text" placeholder="نام" />
        </div>
        <div class="login__input">
          <input type="text" placeholder="نام خانوادگی" />
        </div>
        <div class="login__input">
          <input type="text" placeholder="ایمیل" />
        </div>
        <div class="login__input">
          <input type="text" placeholder="کلمه عبور" />
        </div>
        <div class="login__input">
          <input type="text" placeholder=" تکرار کلمه عبور " />
        </div>

        <span class="flex align-center mr-5">
          <input id="forgotPass" type="checkbox" />
          <label class="label" for="forgotPass">
            قوانین و مقررات را مطالعه کردم و قبول دارم
          </label>
        </span>
        <a class="rule" href="#">مشاهده قوانین و مقررات</a>
        <button class="btn">ثبت نام</button>
        <button class="btn btn--gray">ورود</button>
      </div>

      <div class="login__img">
        <img class="login__img--logo" src="@/assets/images/3-15.png" alt="" />
        <img src="@/assets/images/3-28.png" alt="" />
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
