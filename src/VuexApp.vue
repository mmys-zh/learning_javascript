<template>
  <div class="vuex_app">
      {{count}}
      <button @click="increment">+</button>
      <Vuex_1/>
      <Vuex_2/>
  </div>
</template>

<script>
import Vuex_1 from './components/vuex_com1.vue'
import Vuex_2 from './components/vuex_com2.vue'
export default {
    data(){
        return {
            count : this.$store.state.count
        }
    },
    methods:{
        increment(){
            this.$store.commit('increment')
            this.count = this.$store.state.count
        }
    },
    components:{
        Vuex_1,
        Vuex_2
    }
}
</script>

<style>

</style>