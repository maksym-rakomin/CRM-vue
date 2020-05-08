import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';
import App from "./App.vue";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import tooltipDerective from "@/directives/tooltip.directive";
import pluginMessage from "@/utils/message.plugin";
import titlePlugin from "@/utils/title.plugin";
import Loader from "@/components/app/Loader";
import router from "./router";
import store from "./store";

import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(pluginMessage);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.filter("dateFilter", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.directive("tooltip", tooltipDerective);
Vue.component("Loader", Loader);
Vue.component('Paginate', Paginate);
Vue.use(VueMeta);

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnWGp1LjLh77mn8SZ1yOkub77neBKIdII",
  authDomain: "vue-crm-rakomin.firebaseapp.com",
  databaseURL: "https://vue-crm-rakomin.firebaseio.com",
  projectId: "vue-crm-rakomin",
  storageBucket: "vue-crm-rakomin.appspot.com",
  messagingSenderId: "101744445269",
  appId: "1:101744445269:web:af65a806ae1b4f5be391dc",
  measurementId: "G-3XVYS7CP3H",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {    
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
