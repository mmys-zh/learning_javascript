<template>
  <!-- <div class="item_view">
      this is item_view
  </div> -->

  <div class="post">
    <p>id传值：{{id}}</p>
    <button @click="fetchData">{{loading?"load":"error"}}</button>
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      error...
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
 data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  props:{
    id:String
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      if(this.loading){
        this.error=true
        this.loading=false
        this.post=false
      }else{
        this.loading=true
        this.error=false
      }
    }
  }
}
</script>

<style>

</style>