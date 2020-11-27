<template>
  <div class="wrapper">

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
  export default {
    components: {MainHeader, SideBarPartial, FooterPartial},
    mounted() {
      if(localStorage.getItem('Token') === null){
        this.$router.push('/login')
      }
    }
  }
</script>
