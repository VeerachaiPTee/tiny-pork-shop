<template>
  <div class="">ภาพรวม</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {
    this.SET_LOGIN(true)
  },

  methods: {
    ...mapMutations({
      SET_LOGIN: 'users/SET_LOGIN',
    }),
  },
}
</script>

<style>
</style>