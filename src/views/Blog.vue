<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-3">
                                <h3>Blog</h3>
                            </div>
                            <div class="col-md-9" style="text-align: right">
                                <button type="button" @click="newBlog" class="btn btn-sm btn-primary">New Blog</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Category</th>
                                <th scope="col">Tag</th>
                                <th scope="col">Date</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(blog,index) in blogs" :key="index">
                                    <td>{{ blog.id }}</td>
                                    <td>{{ blog.title }}</td>
                                    <td>{{ blog.author }}</td>
                                    <td>{{ blog.category }}</td>
                                    <td>{{ blog.tag }}</td>
                                    <td>{{ blog.date }}</td>
                                    <td>
                                        <delete-icon v-on:click="deleteBlog(blog.id)" size="2em"></delete-icon>
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
    export default {
        name: 'Blog',
        components: {DeleteIcon},
        data(){
            return {
                blogs: [
                    {
                        id: 1,
                        title: 'Test Heading',
                        author: 'admin',
                        category: 'some category',
                        tag: 'some tags',
                        date: '20-11-20'
                    }
                ]
            }
        },
        methods: {
            deleteBlog(id){
                console.log(id)
            },
            newBlog(){
                this.$router.push('/blog/new');
            }
        }
    }
</script>
