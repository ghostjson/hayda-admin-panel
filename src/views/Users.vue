<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users</h3>
                    </div>
                    <div class="card-body">
                        <table id="example" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Zip Code</th>
                                <th>Weight</th>
                                <th>Height</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Created At</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(user, index) in users" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ user['name'] }}</td>
                                <td>
                                    <a :href="'mailto:'+user['email']">{{ user['email']}}</a>
                                </td>
                                <td>{{ user['zip_code']}}</td>
                                <td>{{ user['weight']}}</td>
                                <td>{{ user['height']}}</td>
                                <td>{{ user['age']}}</td>
                                <td>{{ user['gender']}}</td>
                                <td>{{ new Date(user['created_at']).getMonth() + 1 + '/' + new Date(user['created_at']).getDate() + '/' + new Date(user['created_at']).getFullYear()}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Api from "../services/Api";

    export default {
        name: 'Users',
        data() {
            return {
                users: {}
            }
        },
        methods: {
            async fetchData() {
                let response = await Api().get('/stats/users')
                this.users = response.data.users
            }
        }

        ,
        created() {
            this.fetchData()
        }
    }
</script>
