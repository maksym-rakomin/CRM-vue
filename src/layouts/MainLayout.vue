<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="app-main-layout">
      <Navbar @click="isOpen = !isOpen" />

      <Sitebar v-model="isOpen" :key="locale"/>

      <main class="app-content" :class="{ full: !isOpen }">
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'CreateNewRecord'">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sitebar from "@/components/app/Sitebar";
import messages from '@/utils/messages';
import localizeFilter from '@/filters/localize.filter';

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true,
    loading: true
  }),
  async mounted() {
    console.log(Object.keys(this.$store.getters.info).length);
    
    if (Object.keys(this.$store.getters.info).length <= 1) { // одина запись это локализация из localStorage
      await this.$store.dispatch('fetchInfo');
    }

    this.loading = false;
  },
  components: {
    Navbar,
    Sitebar
  },
  computed: {
    error() {
      return this.$store.getters.error
    },
    locale () {
      return this.$store.getters.info.locale
    }
  },
  watch: {
    error(fbError) {
      this.$error(messages[fbError.code] || localizeFilter('SomethingWentWrong'))
    }
  }
};
</script>
