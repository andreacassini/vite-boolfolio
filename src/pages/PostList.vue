<script>
import AppLoader from '../components/AppLoader.vue';
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'PostList',
    components:{
        AppLoader
    },
    data() {
        return {
            baseUrl: 'http://localhost:8000',
            posts: [],
            currentPage: 1,
            lastPage: null,
            loading: true, 
            store
        }
    },
    created() {
        this.getPosts(1);
    },
    methods: {
        getPosts(num_page) {
            this.loading = true;
            axios.get(`${this.baseUrl}/api/posts`, { params: { page: num_page } }).then((response) => {
                if (response.data.success) {
                    this.posts = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                }
                else {
                    
                }
            })

        },
    }
}
</script>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center mb-5 mt-3">Boolfolio</h1>
                    <AppLoader v-if="loading"/>
                    <div class="col-4 my-4" v-else v-for="post in posts" :key="post.id">
                        <div class="card h-100">
                            <img class="card-img-top img-fluid" :src="`${baseUrl}/storage/${post.cover_image}`" :alt="`${post.title}-image`" v-if="post.cover_image"/>
                            <div class="card-body h-50">
                                <!-- TITLE -->
                                <h3 class="card-title py-2" v-text="post.title"></h3>

                                <!-- DESCRIPTION -->
                                <p class="card-text py-2" v-text="post.content"></p>

                                 <!-- TYPE -->
                                <div class="py-4" v-if="post.type">
                                    <label class="fw-bold mx-1">Tipologia:</label>
                                    <span v-text="post.type.name"></span>
                                </div>

                                <!-- TECHNOLOGIES -->
                                <div class="py-2" v-if="post.technologies">
                                    <label class="fw-bold mx-1">Tecnologie:</label>
                                    <ul>
                                        <li v-for="technology in post.technologies" v-text="technology.name" class="my-2" :key="technology.id"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <!-- <a href="#" class="btn btn-primary">Visualizza Post</a> -->
                                <router-link class="btn btn-sm btn-primary" :to="{ name: 'single-post', params: { slug: post.slug } }">Visualizza Post</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 my-5" v-if="!loading">
               <nav class="d-flex justify-content-center">
                   <ul class="pagination">
                       <li :class="currentPage === 1 ? 'disabled' : ''">
                           <button class="page-link" @click="getPosts(currentPage - 1)">Precedente</button>
                       </li>
                       <li :class="currentPage === lastPage ? 'disabled' : ''">
                           <button class="page-link" @click="getPosts(currentPage + 1)">Successivo</button>
                       </li>
                   </ul>
               </nav>
           </div>
        </div>
    </div>
</template>
<style lang="scss"></style>