<template>
  <div class="footer">
    <div class="container flex justify-between" v-if="topFooter">
      <div class="flex-col">
        <h3>صفحات داخلی</h3>
        <ul>
          <li>محصولات رایگان آموزشی</li>
          <li>رشته هایی که با آنها می توانید داروساز شوید</li>
          <li>شهریه و هزینه دانشگاه های آزاد</li>
          <li>لیست رشته های علوم پزشکی کشور</li>
          <li>محصولات رایگان آموزشی</li>
        </ul>
      </div>
      <div class="flex-col">
        <h3>صفحات داخلی</h3>
        <ul>
          <li>محصولات رایگان آموزشی</li>
          <li>رشته هایی که با آنها می توانید داروساز شوید</li>
          <li>شهریه و هزینه دانشگاه های آزاد</li>
          <li>لیست رشته های علوم پزشکی کشور</li>
          <li>محصولات رایگان آموزشی</li>
        </ul>
      </div>
      <div class="flex-col">
        <h3>صفحات داخلی</h3>
        <ul>
          <li>محصولات رایگان آموزشی</li>
          <li>رشته هایی که با آنها می توانید داروساز شوید</li>
          <li>شهریه و هزینه دانشگاه های آزاد</li>
          <li>لیست رشته های علوم پزشکی کشور</li>
          <li>محصولات رایگان آموزشی</li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container flex justify-between">
        <div class="flex-col">
          <span class="flex">
            <div class="namad_img">
              <img src="@/assets/images/3-20.png" alt="" />
            </div>
            <div class="namad_img">
              <img src="@/assets/images/3-19.png" alt="" />
            </div>
          </span>
        </div>
        <div class="footer__bottom--center flex-col">
          <p>برای دریافت آخرین اخبار ایمیل خود را وارد کنید</p>
          <input
            placeholder="ایمیل خود را وارد کنید"
            class="email"
            type="text"
          />
          <button class="btn">ثبت</button>
        </div>
        <div class="flex-col social">
          <p class="title">مارا در شبکه های اجتماعی دنبال کنید</p>
          <div class="flex">
            <img src="@/assets/images/3-21.png" alt="" />
            <img src="@/assets/images/3-22.png" alt="" />
            <img src="@/assets/images/3-23.png" alt="" />
            <img src="@/assets/images/3-24.png" alt="" />
            <img src="@/assets/images/3-25.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    topFooter: {
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
