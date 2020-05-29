export default {
    state: {
        category: []
    },
    getters:{
    getCategory(state){
    return state.category
    }
    },
    actions: {
        getAll(context){
axios.get('api/categories')
    .then((response)=>{
/*console.log(response.data);*/
        context.commit('categories',response.data)
    })
    .catch(()=>{

    })
        }
    },
    mutations: {
    categories(state,data){
        state.category=data
    }
    }
}
