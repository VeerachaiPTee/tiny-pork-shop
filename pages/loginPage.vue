<template>
  <div class="">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-form ref="form2">
            <v-card
              max-width="500"
              class="mx-auto mt-10"
              rounded="lg"
              elevation="10"
            >
              <v-card-title
                class="d-flex justify-center display font-weight-black"
              >
                เข้าสู่ระบบ
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="USERNAME"
                  outlined
                  label="ชื่อผู้ใช้"
                  :rules="[(v) => !!v || 'กรุณากรอกชื่อผู้ใช้']"
                ></v-text-field>
                <v-text-field
                  v-model="PASSWORD"
                  outlined
                  label="รหัสผ่าน"
                  :rules="[(v) => (v && v.length >= 6) || 'กรุณากรอกรหัสผ่าน']"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="goToLogin" class="mx-auto mb-3" color="primary"
                  >เข้าสู่ระบบ</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from '../plugins/firebaseInit'
import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  where,
} from 'firebase/firestore'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      USERNAME: null,
      PASSWORD: null,
      userRole: null,
    }
  },
  methods: {
    ...mapMutations({
      SET_USER: 'admin/SET_USER',
    }),
    async goToLogin() {
      try {
        if (!this.$refs.form2.validate()) {
          this.$swal({
            icon: 'warning',
            title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
          })
        } else {
          const querySnapshot = query(
            collection(db, 'admin'),
            where('USERNAME', '==', this.USERNAME),
            where('PASSWORD', '==', this.PASSWORD)
          )
          const dataUser = await getDocs(querySnapshot)

          dataUser.forEach((doc) => {
            console.log(doc.data())
            this.SET_USER(doc.data())
            this.userRole = doc.data().ROLE
          })

          if (!dataUser.empty && this.userRole === 'ADMIN') {
            console.log('พบข้อมูลผู้ใช้')
            this.$swal({
              position: 'center',
              icon: 'success',
              title: 'เข้าสู่ระบบสำเร็จ',
              showConfirmButton: false,
              timer: 1500,
            })
            this.$router.push({ path: '/admin/indexAdmin' })
          } else {
            this.$swal({
              icon: 'warning',
              title: 'ไม่พบข้อมูลผู้ใช้',
              text: 'กรุณากรอกข้อมูลให้ถูกต้อง',
            })
            this.USERNAME = null
            this.PASSWORD = null
          }
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการตรวจสอบผู้ใช้:', error)
      }
    },
  },
}
</script>

<style scoped>
.display {
  font-size: 30px !important;
}
</style>