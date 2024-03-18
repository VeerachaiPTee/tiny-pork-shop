<template>
  <div class="">
    <v-container>
      <v-row>
        <v-col cols="12" class="">
          <h2 class="">จัดการสินค้า</h2>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="search"
            label="ค้นหารายการสินค้า"
            dense
            outlined
            hide-details
            class=""
          ></v-text-field>
        </v-col>
        <v-col cols="6" class="text-right">
          <v-btn color="primary" @click="addProduct">เพิ่มรายการ</v-btn>
        </v-col>
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="itemsWithIndex"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            mobile-breakpoint="0"
            @page-count="pageCount = $event"
          >
            <template #[`item.FILE`]="{ item }">
              <v-img width="150" height="100px" :src="item.FILE"> </v-img>
            </template>
            <template #[`item.PROMOTION`]="{ item }">
              {{ item.PROMOTION | ApproveStatus }}
            </template>
            <template #[`item.actions`]="{ item }">
              <div align="center">
                <v-menu offset-y>
                  <template #activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>
                  <v-list dense>
                    <v-list-item @click="addpromtion(item)" v-if="item.PROMOTION === 0">
                      <v-list-item-title>เพิ่มโปรโมชั่น</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deletepromtion(item)" v-else>
                      <v-list-item-title>ลบโปรโมชั่น</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="editData(item)">
                      <v-list-item-title>แก้ไขข้อมูล</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteData(item)">
                      <v-list-item-title>ลบข้อมูล</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </template></v-data-table
          >
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="4">
          <div class="text-center pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" width="550px" persistent>
      <v-card class="">
        <v-card-title class="่d-flex justify-center"
          >เพิ่มรายการสินค้า</v-card-title
        >
        <v-form ref="form">
          <v-card-text>
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field
                  label="รายการ"
                  v-model="productName"
                  outlined
                  :rules="[(v) => !!v || 'กรุณากรอกชื่อสินค้า']"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  type="number"
                  label="ราคา"
                  v-model="price"
                  outlined
                  :rules="[(v) => !!v || 'กรุณากรอกราคาสินค้า']"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="รายละเอียด"
                  v-model="detail"
                  outlined
                  :rules="[(v) => !!v || 'กรุณากรอกรายละเอียดสินค้า']"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  outlined
                  label="รูปภาพ"
                  v-model="file"
                  @change="onFileChange"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="mx-2">
            <v-btn @click="cancel" color="grey" class="mb-3">ย้อนกลับ</v-btn>
            <v-spacer />
            <v-btn @click="saveProduct" color="primary" class="mb-3"
              >บันทึกข้อมูล</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="editDialog" width="550px" persistent>
      <v-card>
        <v-card-title>แก้ไขรายการ</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                label="รายการ"
                v-model="productName"
                outlined
                :rules="[(v) => !!v || 'กรุณากรอกชื่อสินค้า']"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="number"
                label="ราคา"
                v-model="price"
                outlined
                :rules="[(v) => !!v || 'กรุณากรอกราคาสินค้า']"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="รายละเอียด"
                v-model="detail"
                outlined
                :rules="[(v) => !!v || 'กรุณากรอกรายละเอียดสินค้า']"
              ></v-text-field>
            </v-col>
            <!-- <v-col cols="12">
              <v-file-input
                outlined
                label="รูปภาพ"
                v-model="file"
                @change="onFileChange"
              ></v-file-input>
            </v-col> -->
          </v-row>
        </v-card-text>
        <v-card-actions class="mx-2">
          <v-btn @click="cancel" color="grey" class="mb-3">ย้อนกลับ</v-btn>
          <v-spacer />
          <v-btn @click="saveEdit" color="primary" class="mb-3"
            >บันทึกข้อมูล</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db } from '~/plugins/firebaseInit'
export default {
  data() {
    return {
      headers: [
        { text: 'ลำดับ', value: 'index', align: 'left', width: '80px' },
        { text: 'รายการ', value: 'PRODUCTNAME', align: 'left', width: '150px' },
        { text: 'ราคา', value: 'PRICE', align: 'left', width: '80px' },
        { text: 'รายละเอียด', value: 'DETAIL', align: 'left', width: '150px' },
        { text: 'รูปภาพ', value: 'FILE', align: 'left', width: '250px' },
        {
          text: 'สถานะโปรโมชั่น',
          value: 'PROMOTION',
          align: 'left',
          width: '120px',
        },
        { text: 'จัดการ', value: 'actions', align: 'center', width: '150px' },
      ],
      search: null,
      productData: [],
      promotion: '',
      page: 1,
      itemsPerPage: 10,
      pageCount: 0,
      dialog: false,
      productName: null,
      price: null,
      detail: null,
      file: null,
      storageRefG: null,
      editDialog: false,
      refID: null,
    }
  },
  filters: {
    ApproveStatus(value) {
      if (value === 0) {
        return 'ไม่มีโปรโมชั่น'
      } else {
        return 'โปรโมชั่น'
      }
    },
  },
  mounted() {
    this.SET_LOGIN(true)
  },
  computed: {
    ...mapGetters({
      GET_ORGS: 'sif/GET_ORGS',
    }),
    itemsWithIndex() {
      return this.productData.map((items, index) => ({
        ...items,
        index: index + 1,
      }))
    },
  },

  created() {
    this.listProduct()
  },
  methods: {
    ...mapMutations({
      SET_LOGIN: 'users/SET_LOGIN',
    }),
    addProduct() {
      this.dialog = true
    },
    editData(item) {
      console.log(item)
      this.editDialog = true
      this.productName = item.PRODUCTNAME
      this.price = item.PRICE
      this.detail = item.DETAIL
      // this.file = item.FILE
      this.refID = item.refId
    },
    deleteData(item) {
      this.$swal({
        title: 'ต้องการลบข้อมูลนี้หรือไม่?',
        text: 'เมื่อลบไปแล้วไม่สามารถเรียกข้อมูลเดิมได้อีก',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log('1')
          await deleteDoc(doc(db, 'product', item.refId)).then(() => {
            this.$swal({
              title: 'ลบข้อมูลสำเร็จ',
              icon: 'success',
              showCancelButton: false,
            })
            // setTimeout(() => {
            //   this.listProduct()
            // }, 1500)
          })
          location.reload()
        } else {
          console.log('error')
        }
      })
    },
    cancel() {
      this.dialog = false
      this.editDialog = false
      this.productName = null
      this.price = null
      this.detail = null
    },
    async listProduct() {
      const querySnapshot = await getDocs(collection(db, 'product'))

      querySnapshot.forEach((doc) => {
        const product = doc.data()
        product.refId = doc.id
        const isExisting = this.productData.some(
          (existingProduct) => existingProduct.refId === product.refId
        )
        if (!isExisting) {
          this.productData.push(product)
        }
      })
    },
    async saveProduct() {
      try {
        if (!this.$refs.form.validate()) {
          this.$swal({
            icon: 'warning',
            title: 'กรุณากรอกข้อมูลให้ครบถ้วน',
          })
        } else {
          const downloadURL = await getDownloadURL(this.storageRefG)
          const usersCollectionRef = collection(db, 'product')
          const querySnapshot = await getDocs(usersCollectionRef)
          const count = querySnapshot.size
          const newID = count + 1
          const docRef = await addDoc(collection(db, 'product'), {
            ID: newID,
            PRODUCTNAME: this.productName,
            PRICE: this.price,
            DETAIL: this.detail,
            FILE: downloadURL,
            PROMOTION: 0,
          })
          this.$swal({
            position: 'center',
            icon: 'success',
            title: 'บันทึกสำเร็จ',
            showConfirmButton: false,
            timer: 1500,
          })
          this.dialog = false
          this.productName = null
          this.price = null
          this.detail = null
          this.file = null
          this.listProduct()
        }
      } catch (error) {}
    },
    async saveEdit() {
      this.$swal({
        title: 'ต้องการแก้ไขรายการนี้หรือไม่?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          // const downloadURL = await getDownloadURL(this.storageRefG)
          const refid = doc(db, 'product', this.refID)
          await updateDoc(refid, {
            PRODUCTNAME: this.productName,
            PRICE: this.price,
            DETAIL: this.detail,
            // FILE: this.file,
          })
          this.$swal({
            title: 'แก้ไขรายการสำเร็จ',
            icon: 'success',
            showCancelButton: false,
          })
          this.editDialog = false
          this.productName = null
          this.price = null
          this.detail = null
          this.file = null
          location.reload()
        } else {
          console.log('error')
        }
      })
    },
    async onFileChange(event) {
      this.file = event
      console.log(this.file)

      const storage = getStorage()
      const file = this.file // อ้างอิงไฟล์จาก input
      console.log(file.name)
      const fileName = `${file.name}` // ตั้งชื่อไฟล์ใหม่

      const storageRef = ref(storage, `images/${fileName}`) // ระบุตำแหน่งเก็บใน Firebase Storage
      this.storageRefG = storageRef
      uploadBytes(this.storageRefG, file).then((snapshot) => {
        console.log('Uploaded a blob or file!')
      })
      this.$swal({
        position: 'center',
        icon: 'success',
        title: 'สามารถใช้รูปภาพนี้ได้',
        showConfirmButton: false,
        timer: 1500,
      })
    },
    addpromtion(item) {
      console.log(item)
      this.$swal({
        title: 'ต้องการเพิ่มโปรโมชั่นรายการนี้หรือไม่?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.refID = item.refId
          const docRef = doc(db, 'product', this.refID)
          await updateDoc(docRef, {
            PROMOTION: 1,
          })
          this.$swal({
            title: 'เพิ่มโปรโมชั่นสำเร็จ',
            icon: 'success',
            showCancelButton: false,
          })
          location.reload()
        } else {
          console.log('error')
        }
      })
    },
    deletepromtion(item) {
      console.log(item)
      this.$swal({
        title: 'ต้องการลบโปรโมชั่นรายการนี้หรือไม่?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ยืนยัน',
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.refID = item.refId
          const docRef = doc(db, 'product', this.refID)
          await updateDoc(docRef, {
            PROMOTION: 0,
          })
          this.$swal({
            title: 'ลบโปรโมชั่นสำเร็จ',
            icon: 'success',
            showCancelButton: false,
          })
          location.reload()
        } else {
          console.log('error')
        }
      })
    },
  },
}
</script>

<style>
</style>