<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      tag="li"
      active-class="active"
      :to="link.url"
      :key="link.url"
      :exact="link.exect"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'
export default {
    props: ['value'],
  data: () => ({
    links: [
      { title: localizeFilter('Menu_Bill'), url: "/", exect: true },
      { title: localizeFilter('Menu_History'), url: "/history" },
      { title: localizeFilter('Menu_Planning'), url: "/planning" },
      { title: localizeFilter('Menu_NewRecord'), url: "/record" },
      { title: localizeFilter('Menu_Categories'), url: "/categories" }
    ]
  })
};
</script>
