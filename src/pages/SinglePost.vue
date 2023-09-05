<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SinglePost',
    data(){
        return{
            store,
            post: null,

        }
    },
    created(){

    },
    methods:{
        getSinglePost(){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response)=>{

            });
        }
    }
}
</script>

<template lang="">
    <div>
        
    </div>
</template>
<style lang="">
    
</style>