<template>
    <h1>Counter View</h1>

    <h2>{{counter}}</h2>

    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
    <button @click="multiplicar">Multiplicar</button>
</template>

<script>

import useCounter from '@/composables/useCounter'

export default {
    name: 'Counter',
    props: {},
    emits: [],
    setup(){
        const { counter, increase, decrease, multiplicar} = useCounter(25)

        return { counter, increase, decrease, multiplicar }
    }
    
}
</script>

<style scoped>

</style>