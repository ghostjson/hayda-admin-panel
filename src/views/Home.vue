<template>

  <page-heading-widget main-heading="Welcome back, Hizrian!" sub-heading="Welcome back, Hizrian!"></page-heading-widget>

  <div class="row">
    <div class="col-md-4">
      <stats-card-widget
        label="Online Users"
        primary-integer="1223"
        secondary-integer="+20%"
      ></stats-card-widget>
    </div>
    <div class="col-md-4">
      <stats-card-widget
              label="Online Users"
              primary-integer="1223"
              secondary-integer="+20%"
      ></stats-card-widget>
    </div>
    <div class="col-md-4">
      <stats-card-widget
              label="Online Users"
              primary-integer="1223"
              secondary-integer="+20%"
      ></stats-card-widget>
    </div>
  </div>
</template>

<script>

import PageHeadingWidget from "../components/widgets/PageHeadingWidget";
import StatsCardWidget from "../components/widgets/StatsCardWidget";
export default {
  name: 'Home',
  components: {
    StatsCardWidget,
    PageHeadingWidget,
  }
}
</script>
