<template>

    <div class="loader-overlay">
        <img src="/assets/img/loader.gif" width="60">
    </div>

</template>

<style type="scss">
    .loader-overlay{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        background-color: white;
        z-index: 9999;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;

    }
</style>

<script>
    export default {
        name: 'Loader',
    }
</script>
