<template>
    <div class="wrapper">

        <loader v-if="loader"></loader>

        <main-header></main-header>

        <side-bar-partial></side-bar-partial>

        <div class="main-panel">
            <div class="content">
                <div class="page-inner">
                    <router-view></router-view>
                </div>
            </div>

            <footer-partial></footer-partial>

        </div>

    </div>

</template>


<script>

    import FooterPartial from "./components/partials/FooterPartial";
    import SideBarPartial from "./components/partials/SideBarPartial";
    import MainHeader from "./components/partials/MainHeader";
    import Loader from "./components/widgets/Loader";

    export default {
        components: {Loader, MainHeader, SideBarPartial, FooterPartial},
        data() {
            return {
                loader: false
            }
        },
        mounted() {

        },
        created() {
            this.unwatch = this.$store.watch(
                (state, getters) => getters.spinner,
                (newValue) => {
                    this.loader = newValue
                },
            );

            if(localStorage.getItem('expiry') !== null){
                let minutes = (new Date().getTime().toString() - localStorage.getItem('expiry'))/60000
                if (minutes < 10 && localStorage.getItem('Token') === null){
                    localStorage.removeItem('Token')
                    localStorage.removeItem('User')
                    this.$router.push('/login')
                }
            }else{
                this.$router.push('/login')
            }

        }
    }
</script>
