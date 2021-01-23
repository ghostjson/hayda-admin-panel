<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-3">
                                <h3>Nutrition Goals</h3>
                            </div>
                            <div class="col-md-9" style="text-align: right">
                                <button
                                        type="button"
                                        @click="newNutrition"
                                        class="btn btn-sm btn-primary"
                                >
                                    New Nutrition Goal
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <error-alert :error="error"></error-alert>
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Category</th>
                                <!--                  <th scope="col">Tag</th>-->
                                <th scope="col">Date</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(blog, index) in nutrition" :key="index">
                                <td>{{ blog.id }}</td>
                                <td>{{ blog.title }}</td>
                                <td>{{ blog.author.name }}</td>
                                <td>{{ blog.category }}</td>
                                <!--                  <td>{{ blog.tag }}</td>-->
                                <td>{{ blog.created_at }}</td>
                                <td>
                                    <delete-icon
                                            v-on:click="deleteNutrition(blog.id)"
                                            size="2em"
                                    ></delete-icon>
                                </td>
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
    import DeleteIcon from "../components/widgets/icons/DeleteIcon";
    import Api from "../services/Api";
    import ErrorAlert from "../components/widgets/ErrorAlert";

    export default {
        name: "Nutrition",
        components: {ErrorAlert, DeleteIcon },
        data() {
            return {
                nutrition: [],
                error: ''
            };
        },
        methods: {
            deleteNutrition(id) {
                Api().delete('/goals/nutrition/'+id)
                    .then(() => location.reload())
                    .catch(() => this.error = 'Error in deletion')
            },
            newNutrition() {
                this.$router.push("/nutrition/new");
            },
            async fetchNutrition() {
                let response = await Api().get("/goals/nutrition");
                this.nutrition = response.data.data;
                console.log(this.nutrition)
            },
        },
        mounted() {
            this.fetchNutrition();
        },
    };
</script>
