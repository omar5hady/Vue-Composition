import axios from 'axios'
import {ref} from 'vue'

const useUsers = () =>{
    const isLoading = ref(true)
    const users = ref([])
    const currentPage = ref(1)
    const errorMessage = ref()

    const getUsers = async ( page = 1) => {
        if( page <= 0) page = 1

        isLoading.value = true
        errorMessage.value = ''

        const {data} = await axios.get(`https://reqres.in/api/users?page=${page}`)

        if( data.data.length > 0){
            users.value = data.data
            currentPage.value = data.page
        } else if( currentPage.value > 0){
            errorMessage.value = 'No hay mas usuarios'
        }

        isLoading.value = false
    }

    getUsers()

    return { 
        currentPage, 
        errorMessage, 
        isLoading, 
        users, 
        
        nextPage: () => getUsers( currentPage.value + 1),
        prevPage: () => getUsers( currentPage.value - 1)
    }
}

export default useUsers