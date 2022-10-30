<template>
  <NavbarDashboard />
  <div class="timer-banner">
    <div class="countDown container">
      <p>زمان باقی مانده تا کنکور 1402</p>
      <vue-countdown
        :time="2 * 24 * 60 * 60 * 1000"
        v-slot="{ days, hours, minutes, seconds }"
      >
        {{ days }} :{{ hours }} :{{ minutes }} :{{ seconds }}
      </vue-countdown>
    </div>
  </div>
  <div class="flex justify-center align-center">
    <Sidebar />
    <div class="content container">
      <div class="flex-col">
        <div class="flex factor align-center justify-between">
          <div class="summery">
            <span class="flex justify-between">
              <p>مجموع پرداختی ها:</p>
              <p>0 ریال</p>
            </span>
            <span class="flex justify-between">
              <p>مجموع واریزی ها:</p>
              <p>0 ریال</p>
            </span>
            <span class="flex justify-between">
              <p>مـجموع بدهــی :</p>
              <p>0 ریال</p>
            </span>
          </div>
          <div class="increase-credit">
            <button class="btn">افزایش اعتبار</button>
            <img src="@/assets/images/3-49.png" alt="" />
          </div>
        </div>
        <div>
          <div class="cards flex">
            <div class="card card-blue">
              <img src="@/assets/images/3-54.png" alt="" />
              <button class="btn btn-transparent">اعتبار هدیه</button>
            </div>
            <div class="card">
              <img src="@/assets/images/3-51.png" alt="" />
              <button class="btn">اقساط</button>
            </div>
            <div class="card">
              <img src="@/assets/images/3-52.png" alt="" />
              <button class="btn">واریز و پرداخت</button>
            </div>
            <div class="card">
              <img src="@/assets/images/3-45.png" alt="" />
              <button class="btn">رسیدهای خرید</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
export default {
  name: "finance",
};
</script>

<style lang="scss">
.content {
  width: 100%;
  margin-top: 30px !important;
  .increase-credit {
    position: relative;
    .btn {
      width: 300px;
      background-color: #0000a2;
      color: #fff;
      position: absolute;
      top: 120px;
      left: 200px;
      z-index: 0;
      height: 60px;
      font-size: 20px;
    }
    img {
      width: 300px;
      position: inherit;
      z-index: 1;
    }
  }
}
.factor {
  width: 100%;
  background-color: rgb(231, 231, 231);
  border: 1px solid #111;
  border-radius: 20px;
  padding: 10px 40px;

  .summery {
    width: 300px;
    span {
      padding: 10px;

      p:nth-child(2n) {
        padding-left: 30px;
      }
    }
    span:not(:last-child) {
      border-bottom: 1px solid #111;
    }
  }
}
</style>
