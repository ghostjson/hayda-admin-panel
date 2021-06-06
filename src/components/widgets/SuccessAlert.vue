<template>
    <div v-if="message !== ''" class="alert alert-success" role="alert">
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: 'SuccessAlert',
        props: ['message']
    }
</script>
