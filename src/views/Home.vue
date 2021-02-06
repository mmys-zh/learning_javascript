<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link :to="{path:'items_home'}">items</router-link>|
    <router-link :to="{path:'topic_home'}">topics</router-link>
<router-view class="view one" name="lists"></router-view>
  <router-view class="view two" name="list"></router-view>
  <router-view class="view three" name="itemAdd"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
}
</script>
