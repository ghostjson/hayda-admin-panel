<template>
    <div class="card card-dark bg-primary-gradient">
        <div class="card-body pb-0">
            <div class="h1 fw-bold float-right">{{ secondaryInteger }}</div>
            <h2 class="mb-2">{{ primaryInteger }}</h2>
            <p>{{ label }}</p>
            <div class="pull-in sparkline-fix chart-as-background">
                <div id="lineChart"><canvas width="327" height="70" style="display: inline-block; width: 327px; height: 70px; vertical-align: top;"></canvas></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : ['primaryInteger', 'secondaryInteger', 'label'],
        name: 'StatsCardWidget'
    }
</script>
