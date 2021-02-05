<template>
  <div class="tobar">
       <router-link :to="{name:'Home'}">Go to home</router-link>|
       <router-link to="/topics">topics</router-link>|
       <router-link to="/topic_add">topic_add</router-link>|
       <router-link to="/items">items</router-link>|
       <router-link to="/item_add">item_add</router-link>
       <div>
         <!-- {{username}} -->
         <button @click="goBack">后退</button>
         <button @click="goFont">前进</button>
         <button @click="goHome">返回首页</button>
       </div>
  </div>
</template>

<script>
import routes from '@/router'
export default {
    data(){
        return{
          routes
        }
    },
    computed: {
      username() {
        // We will see what `params` is shortly
        // console.log(this.$route.params.username);
        return this.$route.params.username
      }
    },
    components:{
      
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      goFont(){
        window.history.length > 3 ? this.$router.go(1) : this.$router.push('/')
      },
      goHome(){
        this.$router.push({name:'Home'})
      }
    }
}
</script>

<style>

</style>