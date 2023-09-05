<script>
import axios from 'axios';
import { store } from '../store';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'SinglePost',
    components: {
        AppLoader
    },
    data(){
        return{
            store,
            post: null,

        }
    },
    created(){
        this.getSinglePost();
    },
    methods:{
        getSinglePost(){
            this.store.loading = true;
            axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
            if(response.data.success){
                this.post = response.data.post;
                this.store.loading = false;
            }
            else{
                this.$router.push({ name: 'not-found' });
            }
            });
        }
    }
}
</script>

<template lang="">
    <div>
        <AppLoader v-if="store.loading"/>
        <div v-else>
            <div class="container py-5">
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center mb-4">{{post.title}}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 my-3">
                        <img :src="`${store.baseUrl}/storage/${post.cover_image}`" alt="img" />
                    </div>
                    <div class="col-12 my-3" v-if="post.type">
                            <strong>Type: </strong>{{ post.type.name}}
                    </div>
                    <div class="col-12 my-3" v-if="post.technologies">
                        <span class="badge rounded-pill text-bg-primary me-2" v-for="technology in post.technologies" :key="technology.id">{{technology.name}}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p>{{post.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>