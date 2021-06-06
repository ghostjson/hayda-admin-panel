<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-3">
                                <h3>Page Editor</h3>
                            </div>
                            <div class="col-md-9" style="text-align: right">
                                <button
                                        type="button"
                                        @click="newPage"
                                        class="btn btn-sm btn-primary"
                                >
                                    New Page
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
                            <tr v-for="(page, index) in pages" :key="index">
                                <td>{{ page.id }}</td>
                                <td>{{ page.title }}</td>
                                <td>{{ page.author.name }}</td>
                                <td>{{ page.category }}</td>
                                <!--                  <td>{{ blog.tag }}</td>-->
                                <td>{{ page.created_at }}</td>
                                <td>
                                    <a :href="page.link" target="_blank" style="font-size: 1.1em;position: relative; right: 9px;top: 3px;"><i class="fas fa-eye"></i></a>
                                    <delete-icon
                                            v-on:click="deletePage(page.id)"
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
        name: 'PageEditor',
        components: {ErrorAlert, DeleteIcon },
        data() {
            return {
                pages: [],
                error: ''
            };
        },
        methods: {
            deletePage(id) {
               Api().delete('/pages/'+id)
                    .then(() => location.reload())
                    .catch(() => this.error = 'Error delete page')
            },
            newPage() {
                this.$router.push("/pages/new");
            },
            async fetchPages() {
                let response = await Api().get("/pages");
                this.pages = response.data.data;
            }
        },
        mounted() {
            this.fetchPages();

        },
    }
</script>
