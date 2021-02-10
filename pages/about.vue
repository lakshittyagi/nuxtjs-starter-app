<template>
    <div>
       <ul style="margin-left:2%;">
          
               <li style="display:inline-block; margin:1rem;" v-for="post in Posts" :key="post.id">
                    <nuxt-link :to="`images/${post.id}`">
                        <div style="width:300px; height:300px;">
                            <img :src="post.image" alt="" style="width:100%; height:100%;">
                        </div>
                    </nuxt-link>
               </li>
           
       </ul>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'abot',
    head: {
    title: 'About Client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'this is about page' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
    data: function () {
        return {
            heading: 'hey this is About page of nuxt application',
        }
    },
    computed: {
        ...mapGetters(['Posts']),
       
    },
    methods: {
        ...mapActions(['fetchPosts']),
    },
    created() {
        this.fetchPosts()
    }
}
</script>
<style lang="">

</style>