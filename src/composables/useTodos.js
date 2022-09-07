import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {

    const store = useStore()

    const currentTab = ref('all')
    const isOpen = ref(false)

    return{
      currentTab,
      isOpen,

      all: computed( () => store.getters['allTodos']),
      completed : computed( () => store.getters['completedTodos']),
      pending: computed( () => store.getters['pendingTodos']),
      
      getTodoByTab : computed( () => store.getters['getTodosByTab'](currentTab.value) ),

      //Methods
      toggleTodo : (id) => store.commit('toggleTodo', id),
      createTodo : (texto) => store.commit('createTodo', texto)
    }

}

export default useTodos