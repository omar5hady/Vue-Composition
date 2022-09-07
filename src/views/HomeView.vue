<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
    <h3>{{ironman}}</h3>
    <h3>{{hulk}}</h3>

    <button @click="changeIronman">Cambiar Ironman</button>
    <button @click="chaangeHulk">Cambiar Hulk</button>
  </div>
</template>

<script>

import { ref, reactive } from 'vue'

export default {
    name: 'HomeView',
    setup() {
      const ironman = ref({name:'Tony', age: 50})  
      //Reactive solo funciona con objetos    
      const hulk = reactive({ name: 'Bruce', age: 50 })

      return {
        ironman, 
        hulk,

        changeIronman : () => {
          ironman.value.name = 'Tony Stark'
          ironman.value.age = 55
        },
        chaangeHulk : () => {
          hulk.name = 'Bruce Banner'
          hulk.age = 45
        }
        
      }
    }
}
</script>
