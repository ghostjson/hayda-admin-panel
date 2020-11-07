<template>
    <div class="mt-2 mb-4">
        <h2 class=" pb-2">{{ mainHeading }}</h2>
        <h5 class="op-7 mb-4">{{ subHeading}}</h5>
    </div>
</template>

<script>
    export default {
        props: ['mainHeading', 'subHeading'],
        name: 'PageHeadingWidget'
    }
</script>
