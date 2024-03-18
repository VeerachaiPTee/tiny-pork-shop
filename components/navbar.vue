<template>
  <div>
    <v-app-bar
      app
      height="100px"
      :clipped-left="true"
      fixed
      class="nav-top"
      color="red darken-4"
    >
      <v-app-bar-nav-icon
        v-if="isSmallScreen"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="pl-0">
        <v-img
          :src="require('~/assets/logo.png')"
          height="98px"
          width="150px"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-row no-gutters class="text-center">
        <v-col cols="3"><a class="white--text" v-if="!GET_LOGIN">หน้าหลัก</a></v-col>
        <v-col cols="3"><a class="white--text" v-if="!GET_LOGIN">โปรโมชั่น</a></v-col>
        <v-col cols="3"><a class="white--text" v-if="!GET_LOGIN">ราคาเนื้อหมู</a></v-col>
        <v-col cols="3"><a class="white--text" @click="about" v-if="!GET_LOGIN">ติดต่อเรา</a></v-col>
      </v-row>

      <v-btn @click="login" v-if="!GET_LOGIN">เข้าสู่ระบบ</v-btn>
      <v-btn @click="logout" v-else>ออกจากระบบ</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-if="GET_LOGIN"
      v-model="drawer"
      app
      :permanent="isLargeScreen"
      :clipped="true"
      fixed
      class="navbar-drawer"
      color="red darken-2"
      width="300px"
      :style="{
        padding: paddingNav,
      }"
    >
      <!-- Navigation content -->

      <v-list class="pt-0">
        <v-list-item
          v-for="item in userMenu"
          :key="item.title"
          router
          exact
          :to="item.link"
          
        >
          <v-list-item-content>
            <v-list-item-title class="text-color">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
          <hr />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      name: '',
      drawer: false,
      userMenu: [
        { title: 'ภาพรวม', link: '/admin/indexAdmin' },
        { title: 'จัดการสินค้า', link: '/admin/manageProduct' },
        { title: 'จัดการโปรโมชั่น', link: '/admin/promotion' },
      ],
    }
  },
  methods: {
    login() {
      this.$router.push('/loginPage')
    },
    logout() {
      this.$router.push('/')
    },
    about() {
      const newsElement = document.getElementById("about");
      // this.$router.push({ path: "/", hash: "#newss" });
      if (newsElement) {
        newsElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
  computed: {
    ...mapGetters({
      GET_LOGIN: 'users/GET_LOGIN',
    }),
    isSmallScreen() {
      return this.$vuetify.breakpoint.smAndDown
    },
    isLargeScreen() {
      return !this.isSmallScreen
    },
    paddingNav() {
      let padding = 0

      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          padding = 64
          break
        case 'sm':
          padding = 64
          break
        case 'md':
          padding = 0
          break
        case 'lg':
          padding = 0
          break
        case 'xl':
          padding = 0
          break
      }
      return `${padding}px 0 0 0`
    },
  },
  mounted() {},
}
</script>

<style>
.nav-top {
  z-index: 4 !important;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding-left: 0 !important;
}
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  line-height: 2 !important;
}
.v-list .v-list-item--active {
  background: #ffffff;
  color: #000000;
}
/* .logout-btn {
  color: #f8fad8 !important;
} */
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot,
.v-text-field.v-text-field--enclosed .v-text-field__details {
  color: black !important;
}
.theme--light.v-list-item:not(.v-list-item--active):not(
    .v-list-item--disabled
  ) {
  color: #000000 !important;
}
</style>
