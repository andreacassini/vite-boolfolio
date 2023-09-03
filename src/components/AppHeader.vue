<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Chi Siamo',

                },
                {
                    label: 'Post',
                    routeName: 'posts',
                },
                {
                    label: 'Tipologie',

                },
                {
                    label: 'Tecnologie',

                },
                {
                    label: 'Contatti',

                },
            ]
        }
    },
}
</script>

<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg bg-black py-3">
            <div class="container-fluid">
                <ul class="navbar-nav justify-content-center w-100">
                    <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                        <router-link :to="{ name: item.routeName }" v-text="item.label" class="nav-link text-white"></router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
@use '../styles/generals.scss' as *;
</style>