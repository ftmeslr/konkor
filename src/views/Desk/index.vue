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
  <div class="flex">
    <Sidebar />
    <div class="content flex container align-center">
      <div class="flex-col">
        <h2 style="padding: 20px 0">کلاس های آنلاین در حل برگزاری</h2>
        <carousel :controls="true" :items-to-show="1">
          <slide v-for="slide in 1" :key="slide">
            <span>
              <img style="width: 400px" src="@/assets/images/3-30.png" alt="" />
            </span>
          </slide>
        </carousel>
      </div>
      <div class="flex-col tab">
        <ul class="nav-tab">
          <li
            class="buttonTab"
            :class="{ active: currntTab == 'nowClass' }"
            @click="currntTab = 'nowClass'"
          >
            <p>کلاس های امروز من</p>
          </li>
          <li
            class="buttonTab"
            :class="{ active: currntTab == 'futureClass' }"
            @click="currntTab = 'futureClass'"
          >
            <p>کلاس های آینده من</p>
          </li>
        </ul>

        <div class="tab-content">
          <div
            style="width: 100%; border-bottom: 1px solid #111; padding: 20px 0"
            class="flex"
            v-if="currntTab == 'nowClass'"
          >
            <p style="width: 35%">
              کلاس آنلاین ریاضی 6 استاد سرحدی جلسه اول (معادله خط)
            </p>

            <span style="width: 35%; text-align: left" class="flex-col">
              <p>دوشنبه</p>
              <p>04/05/1402</p>
            </span>
            <span style="width: 35%; text-align: center" class="flex">
              <img src="" alt="" />
              <a style="margin: auto" href="#">ورود به کلاس</a>
            </span>
          </div>
          <div
            style="width: 100%; border-bottom: 1px solid #111; padding: 20px 0"
            class="flex"
            v-if="currntTab == 'nowClass'"
          >
            <p style="width: 35%">
              کلاس آنلاین ریاضی 6 استاد سرحدی جلسه اول (معادله خط)
            </p>

            <span style="width: 35%; text-align: left" class="flex-col">
              <p>دوشنبه</p>
              <p>04/05/1402</p>
            </span>
            <span style="width: 35%; text-align: center" class="flex">
              <img src="" alt="" />
              <a style="margin: auto" href="#">ورود به کلاس</a>
            </span>
          </div>
          <div
            style="width: 100%; padding: 20px 0"
            class="flex"
            v-if="currntTab == 'nowClass'"
          >
            <p style="width: 35%">
              کلاس آنلاین ریاضی 6 استاد سرحدی جلسه اول (معادله خط)
            </p>

            <span style="width: 35%; text-align: left" class="flex-col">
              <p>دوشنبه</p>
              <p>04/05/1402</p>
            </span>
            <span style="width: 35%; text-align: center" class="flex">
              <img src="" alt="" />
              <a style="margin: auto" href="#">ورود به کلاس</a>
            </span>
          </div>
          <div v-if="currntTab == 'futureClass'"></div>
        </div>
      </div>
    </div>
  </div>
  <div style="width: 100%; background-color: #0000a2; height: 50px">
    برنامه هفتگی (از تاریخ 8 مرداد تا 14 مرداد 1401)
  </div>
  <div style="display: flex ;flex-direction: column;" v-for="item in 7" :key="item">
    <div
      style="margin: 10px; width: 130px; height: 130px; background-color: blue"
    >
      {{ item }}
    </div>
    <div style="display: flex ;" v-for="item in 5" :key="item">
      <div
        style="margin: 10px; width: 130px; height: 130px; background-color: red"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
// import "@fullcalendar/core/vdom"; // solves problem with Vite
// import FullCalendar from "@fullcalendar/vue";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import FullCalendar from 'fullcalendar'

export default {
  name: "home",
  components: {
    Carousel,
    Slide,
    // FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      currntTab: "nowClass",

      calendarOptions: {
        // plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
    };
  },

  setup() {
    // var calendarEl = document.getElementById('calendar');
    //     var calendar = new FullCalendar.Calendar(calendarEl, {
    //       initialView: 'dayGridMonth'
    //     });
    //     calendar.render();
  },
};
</script>

<style lang="scss">
.tab {
  width: 100%;
  margin-right: 30px;
}
.nav-tab {
  display: flex;
  padding: 0;
}
.buttonTab {
  width: 100%;
  height: 40px;
  list-style: none;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  font-weight: bold;
  color: rgb(114, 114, 114);
}
.tab-content {
  width: 100%;
  background-color: rgb(221, 221, 221);
  padding: 30px;
  height: 300px;
}
.active {
  background-color: rgb(221, 221, 221);
  color: #111;
}
</style>
