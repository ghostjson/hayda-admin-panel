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

  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Recent Users</h3>
          <div>
           <a href="/users" class="btn btn-sm btn-primary" style="position:absolute; right: 10px;top: 10px;">View all users</a>
          </div>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Created At</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in stats['users']" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.age }}</td>
              <td>{{ new Date(user.created_at).getMonth() + '/' + new Date(user.created_at).getDate() + '/' + new Date(user.created_at).getFullYear()  }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
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
    }
  },

  created() {
    this.fetchData()
  }
}
</script>
