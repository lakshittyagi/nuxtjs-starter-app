import axios from "axios";

// import axios from 'axios'
const state = () => {
    return {
        posts : []
    }
};

const getters = {
    Posts: state => state.posts,
    postById: (state) => (id) => {
        return state.posts.find(post => post.id == id); 
      }
};

const actions = {
    async fetchPosts({commit}) {
        const response = await axios.get('https://dummyapi.io/data/api/post',{
            headers: {
                'app-id': '6012cba936e4f1532e3e6811'
            }
        });
        console.log(response.data.data);
        commit('setPost',response.data.data);
    },
    
};

const mutations = {
    setPost: (state , responseData) => (state.posts = responseData),

};


export default {
   state,
   getters,
   actions,
   mutations 
}