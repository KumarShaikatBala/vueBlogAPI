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
axios.get('categories')
    .then((response)=>{
/*console.log(response.data.categories);*/
        context.commit('categories',response.data.categories)
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
