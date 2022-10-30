import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//components defined globaly
import NavbarDashboard from "@/components/NavbarDashboard/NavbarDashboard.vue";
import Footer from "@/components/Footer/Footer.vue";
import VueCountdown from "@chenfengyuan/vue-countdown";
import Sidebar from "@/components/Sidebar";
const app = createApp(App);
app.component(NavbarDashboard.name, NavbarDashboard);
app.component(Footer.name, Footer);
app.component(VueCountdown.name, VueCountdown);
app.component(Sidebar.name, Sidebar);
app.use(router).mount("#app");
