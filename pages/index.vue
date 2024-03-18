<template>
  <div class="">
    <v-row>
      <v-col cols="12" class="pb-0">
        <v-carousel
          cycle
          height="500"
          hide-delimiter-background
          hide-delimiters
          show-arrows-on-hover
          class="text-dd"
        >
          <v-carousel-item
            v-for="(item, i) in slides"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <div class="carousel-text">
              <!-- You can customize this text as per your requirement -->
              <div>{{ item.title }}</div>
              <p>{{ item.description }}</p>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" class="text-center"><h1>แนะนำรายการ</h1></v-col>
      <v-row class="mx-10">
        <v-col cols="12" md="3" class="pa-0  d-flex justify-center">
          <v-card elevation="8" height="350px" width="300px">
            <v-card-text>
              <v-img
                :src="require('~/assets/image 3.png')"
                width="100%"
                height="150px"
              />

              <h2 class="mt-2">หมูสามชั้น</h2>
              <p class="mt-2">
                เนื้อเป็นสีชมพูไม่เข้มหรือสีซีดจนเกินไป
                หนังของสามชั้นก็ต้องไม่หนาจนเกินไป
                น้ำหนักควรอยู่ที่ประมาณต่อแผ่น คือ 3-5 กก.
                อีกทั้งยังมีสามชั้นลอกหนัง ที่สามารถนำไปทำเบคอน ปิ้งย่าง
                หรือร้านชาบูต่างๆ
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="pa-0 d-flex justify-center">
          <v-card elevation="8" width="300px" height="350px">
            <v-card-text>
              <v-img
                :src="require('~/assets/image 4.png')"
                width="100%"
                height="150px"
              />

              <h2 class="mt-2">สันนอก</h2>
              <p class="mt-2">
                นื้อส่วนสันหลังของหมู เนื้อสีชมพู น้ำหนักต่อเส้นอยู่ที่ประมาณ
                2.5-4.5 กก. ขึ้นอยู่กับหมูตัวเล็ก หรือหมูตัวใหญ่ เนื้อนุ่ม
                สามารถนำไปทำสเต็กหมู หมูทอด หมูสะเต็ะ
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="pa-0 d-flex justify-center">
          <v-card elevation="8" height="350px" width="300px">
            <v-card-text>
              <v-img
                :src="require('~/assets/image 5.png')"
                width="100%"
                height="150px"
              />

              <h2 class="mt-2">สันคอ </h2>
              <p class="mt-2">
                เนื้อส่วนนี้จะมีสีชมพูเข้มกว่าส่วนอื่นๆ และมีมันแทรก
                จึงทำให้เนื้อนุ่มมกกว่าส่วนอื่นๆ เหมาะแก่การย่าง ทำหมูแดง
                สเต็กหมู
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3" class="pa-0 d-flex justify-center">
          <v-card elevation="8" height="350px" width="300px">
            <v-card-text>
              <v-img
                :src="require('~/assets/image 6.png')"
                width="100%"
                height="150px"
              />

              <h2 class="mt-2">สันใน</h2>
              <p class="mt-2">
                มีลักษณะเป็นเส้น สีชมพูอ่อน เป็นส่วนที่นิ่มที่สุดของตัวหมู
                ใช้ในการในการทำหมูแดง ทำสเต็กเป็นพรอคชอปสันในได้ 
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-col cols="12" class="text-center mt-5">
        <h1>โปรโมชั่น</h1>
      </v-col>
      <v-row class="mx-10">
        <v-col cols="">
          <v-card elevation="10">
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-dialog>
      <v-card>
        <v-img />
      </v-card>
    </v-dialog>
    <Footer class="mt-15" id="about" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Footer from '../components/footer'
export default {
  components: {
    Footer,
  },
  data() {
    return {
      slides: [
        {
          src: require('~/assets/wooden-board.jpg'),
          title: 'เนื้อหมูสดใหม่รับประกันคุณภาพ',
          description: 'สั่งซื้อสินค้าพร้อมส่งทุกวัน',
        },
      ],
    }
  },
  created() {
    this.SET_LOGIN(false)
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: 'users/SET_LOGIN',
    }),
  },
}
</script>

<style scoped>
.carousel-text {
  position: absolute;
  top: 30%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: white; /* Adjust text color as needed */
  z-index: 100; /* Ensure text appears above the image */
  font-size: 60px;
}
</style>