<template>
  <div class="vuex_com2">
      <h2>vuex_com2</h2>
      {{listCount}}
      <button @click="addList">addlist</button>
      <button @click="addAuto">addauto</button>
      <button @click="incrementAsync(1000)">add</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'


export default {
  data(){
    return{
    }
  },
computed:{
  ...mapGetters([
    'listCount'
  ]),
  
},
methods:{
  ...mapMutations([
    'addList'
  ]),
  ...mapActions([
    'addAuto',
    'incrementAsync'
  ])
}

}
</script>

<style>

</style>