<template>
  <div class="topic_view">
     <h1>this is topic_view</h1>
     <p>params:{{paramsIn}}</p>
     <p>id:{{id}}</p>
  </div>
</template>

<script>
export default {
computed:{
  paramsIn(){
    // console.log(this.$route);
    return this.$route.params.id
  }
},
props:{
  id:Number
},
 beforeRouteUpdate (to, from, next) {
     alert(2)
     next(false)
  },
  beforeRouteLeave (to, from, next) {
  
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
// watch:{
//   $route(to,from){
    
//   }
// }
}
</script>

<style>

</style>