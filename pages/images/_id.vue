<template>
    <div>
        <nuxt-link to="../">back </nuxt-link>
        <div>
            <img 
            :src="post.image" 
            alt=""
            style="width:400px; height:auto;">
        </div>
    </div>
</template>
<script>

export default {

    data(){
        return {
            post: null
        }
    },
    created(){
        this.post = this.$store.getters.postById(this.$route.params.id);
    }

}
</script>