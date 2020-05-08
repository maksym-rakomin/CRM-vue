<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import store from '@/store';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "main") + "-layout";
    }
  },
  mounted() {
    store.getters.info.locale = localStorage.getItem('locale');
      console.log(store.getters.info.locale);
  },
    data: () => ({
    loading: true
  }),
  components: {
    EmptyLayout,
    MainLayout
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.css";
@import "assets/index.css";
</style>
