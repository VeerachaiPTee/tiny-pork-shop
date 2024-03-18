<template>
  <div class="">
    <v-container>
      <v-row>
        <v-col cols="6">
          <h2>ดูรายการที่จัดโปรโมชั่น</h2>
        </v-col>
        <!-- <v-col cols="6" class="text-right">
          <v-btn @click="addPromotion"> เพิ่มโปรโมชั่น </v-btn>
        </v-col> -->
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialogp" width="500px">
          <v-card>
            <v-card-title>เพิ่มรายการโปรโมชั่น</v-card-title>
            <v-card-text> </v-card-text>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row>
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
            <!-- <template #[`item.actions`]="{ item }">
              <div align="center">
                <v-menu offset-y>
                  <template #activator="{ on, attrs }">
                    <v-btn text v-bind="attrs" v-on="on">
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </template>
                  <v-list dense>
                    <v-list-item @click="editData(item)">
                      <v-list-item-title>แก้ไขข้อมูล</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="deleteData(item)">
                      <v-list-item-title>ลบข้อมูล</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </template> -->
          </v-data-table>
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
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import {
  collection,
  addDoc,
  getDocs,
  query,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
  where,
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db } from '~/plugins/firebaseInit'
export default {
  data() {
    return {
      dialogp: false,
      productData: [],
      page: 1,
      itemsPerPage: 10,
      pageCount: 0,
      search: '',
      headers: [
        { text: 'ลำดับ', value: 'index', align: 'left', width: '80px' },
        { text: 'รายการ', value: 'PRODUCTNAME', align: 'left', width: '150px' },
        { text: 'ราคา', value: 'PRICE', align: 'left', width: '80px' },
        { text: 'รายละเอียด', value: 'DETAIL', align: 'left', width: '150px' },
        {
          text: 'รูปภาพ',
          value: 'FILE',
          align: 'left',
          width: '250px',
        },
        // { text: 'จัดการ', value: 'actions', align: 'center', width: '150px' },
      ],
    }
  },
  created() {
    this.SET_LOGIN(true)
    this.listProduct()
  },
  computed: {
    itemsWithIndex() {
      return this.productData.map((items, index) => ({
        ...items,
        index: index + 1,
      }))
    },
  },

  methods: {
    ...mapMutations({
      SET_LOGIN: 'users/SET_LOGIN',
    }),
    addPromotion() {
      this.dialogp = true
    },
    async listProduct() {
      // const querySnapshot = await getDocs(collection(db, 'product'))
      const querySnapshot = query(
        collection(db, 'product'),
        where('PROMOTION', '==', 1)
      )
      const dataUser = await getDocs(querySnapshot)

      dataUser.forEach((doc) => {
        const product = doc.data()
        product.refId = doc.id
        const isExisting = this.productData.some(
          (existingProduct) => existingProduct.refId === product.refId
        )
        if (!isExisting) {
          this.productData.push(product)
        }
      })
      console.log(this.productData)
    },
  },
}
</script>

<style>
</style>