<template>

  <page-heading-widget main-heading="Welcome to HAYDA dashboard"></page-heading-widget>

  <div class="row">
    <div class="col-md-4">
      <stats-card-widget
        label="Total Users"
        :primary-integer="stats['total_users']"
      ></stats-card-widget>
    </div>
    <div class="col-md-4">
      <stats-card-widget
              label="Total Blogs"
              :primary-integer="stats['total_blogs']"
      ></stats-card-widget>
    </div>
    <div class="col-md-4">
      <stats-card-widget
              label="Subscriptions"
              :primary-integer="stats['subscriptions']"
      ></stats-card-widget>
    </div>
  </div>
</template>

<script>

import PageHeadingWidget from "../components/widgets/PageHeadingWidget";
import StatsCardWidget from "../components/widgets/StatsCardWidget";
import Api from "../services/Api";
export default {
  name: 'Home',
  components: {
    StatsCardWidget,
    PageHeadingWidget,
  },
  data(){
    return {
      stats: {}
    }
  },
  methods: {
    async fetchData(){
      let response = await Api().get('/stats')
      this.stats = response.data
      console.log(this.stats)
    }
  },

  created() {
    this.fetchData()
  }
}
</script>
