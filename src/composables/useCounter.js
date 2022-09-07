import { ref } from 'vue'

const useCounter = (initValue = 5) => {

    const counter = ref(initValue)

    const multiplicar = () => {
        counter.value = counter.value * counter.value
    }

    return {
        //Objetos reactivos
        counter,

        //Metodos
        increase: ()=> counter.value++,
        decrease: ()=> counter.value--,
        multiplicar
    }
}

export default useCounter