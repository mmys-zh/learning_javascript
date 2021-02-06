<template>
  <div class="items_view">
      <h1>this is items_view</h1>
      <ul>
        <li v-for="item in items" :key="item">
          <a :href="path(item)">item_{{item}}</a>
        </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:4
    }
  },
methods:{
  path(item){
    return `http://192.168.1.103:8080/todo/item/${item}`
  }
}
}
</script>

<style>

</style>