<template>
  <div class="vuex_com">
      {{ count }}
      <button @click="increment">v1</button>
      <button @click="increment10">v10</button>
      <button @click="incrementAsync">autoadd</button>
      <p>{{ localCount }}</p>
      <p>{{doneTodosFalse}}</p>
      <code>{{ getTodoById(count) }}</code>
      <ul>
          <li v-for="(item,index) in storeGetTrue" :key="item.id">
             {{index +1}} - {{item.text}}
          </li>
      </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
data(){
    return{
        storeGetTrue:this.$store.getters.doneTodosTrue
    }
},
computed:{
    localCount(){
        if (this.count>10){
            let counts = `计数器：${this.count}`
            return counts
        }
        return ""
    },
    ...mapState(['count']),
    ...mapGetters(['doneTodosFalse'])
},

methods:{
    increment(){
            this.$store.commit('increment')
    },
    getTodoById(x){
        // console.log(x);
        return this.$store.getters.getTodoById(x)
    },
    increment10(){
            this.$store.commit('increment10')
    },
    incrementAsync (){
        this.$store.dispatch('incrementAsync',1000)
    }
}
}
</script>

<style>

</style>