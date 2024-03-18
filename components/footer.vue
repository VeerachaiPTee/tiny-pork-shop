<template>
  <v-footer dark padless>
    <v-card flat tile class="red darken-4 white--text text-center" width="100%">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <h2>ติดต่อเรา</h2>
        <br />
        <h4>สั่งเนื้อหมูโทร 000-000-0000</h4>
        <br />
        <h4>ไลน์ไอดี: @heekaymoo</h4>
        <br />
        <h4>8123/4114 หมู่9 ดาวพุธ ต.ดาวเคาะห์น้อย</h4>
        <br />
        <h4>อ.ระบบสุริยะจักวาล จ.กาแล็คซี่ทางช้างเผือก</h4>
      </v-card-text>

    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>

<style>
</style>