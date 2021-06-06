<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-3">
                                <h3>Content Editor</h3>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">

                        <error-alert :error="error"></error-alert>
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(content, index) in contents" :key="index">
                                <td>{{ content.id }}</td>
                                <td>{{ content.name }}</td>
                                <td>
                                    <span class="badge badge-default" style="cursor: pointer" @click="edit(content.name)">Edit</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <small>You can find icon names at <a target="_blank" href="https://fontawesome.com/v4.7.0/icons/">fontawesome</a></small>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Api from "../services/Api";
    import ErrorAlert from "../components/widgets/ErrorAlert";

    export default {
        name: "ContentEditor",
        components: {ErrorAlert },
        data() {
            return {
                contents: [],
                error: ''
            };
        },
        methods: {
            async fetchPages() {
                let response = await Api().get("/page-content");
                this.contents = response.data.data;
            },
            edit(name){
                this.$router.push('/content-editor/'+name)
            }
        },
        mounted() {
            this.fetchPages();
        },
    };
</script>
