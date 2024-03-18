<template>
  <v-app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
