<template>
  <div class="not_found_view">
      <h1>not found 404</h1>
      <button @click="goHomeAuto">点击跳转为首页</button>
  </div>
</template>

<script>

export default {
    methods:{
        goHomeAuto(){
            this.$router.push({path:'/'})
        },
    }

}
</script>

<style>

</style>