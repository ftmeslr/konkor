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
      <div class="cards flex">
        <div class="card">
          <img src="@/assets/images/3-45.png" alt="" />
          <button class="btn">همه</button>
        </div>
        <div class="card">
          <img src="@/assets/images/3-46.png" alt="" />
          <button class="btn">تک جلسات</button>
        </div>
        <div class="card">
          <img src="@/assets/images/3-47.png" alt="" />
          <button class="btn">دوره ها</button>
        </div>
        <div class="card">
          <img src="@/assets/images/3-48.png" alt="" />
          <button class="btn">آزمون</button>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
export default {
  name: "lessons",
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
