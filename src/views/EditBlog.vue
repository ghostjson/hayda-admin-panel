<template>
    <div class="container-fluid">

        <div class="card">
            <div class="card-header">{{ blog.title }}</div>
            <div class="card-body">

                <error-alert :error="error"></error-alert>
                <success-alert :message="success"></success-alert>
                <form @submit="blogSubmit">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="blog.title">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <input type="text" class="form-control" id="category" v-model="blog.category">
                    </div>
                    <div class="form-group">
                        <label for="image">Image URL</label>
                        <input type="text" class="form-control" id="image" v-model="blog.image">
                    </div>

                    <!--                    <div class="form-group">-->
                    <!--                        <label for="tags">Tags</label>-->
                    <!--                        <input type="text" class="form-control" id="tags" v-model="tags">-->
                    <!--                    </div>-->
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" v-model="blog.content" id="content" rows="10"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    </div>

</template>

<script>


    import Api from "../services/Api";
    import ErrorAlert from "../components/widgets/ErrorAlert";
    import SuccessAlert from "../components/widgets/SuccessAlert";

    export default {
        name: 'Edit Blog',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                blog: {
                    title: 'Edit Blog',
                    category: '',
                    content: '',
                    image: ''
                },
                error: '',
                success: ''
            }
        },
        methods: {
            async blogSubmit(e){ e.preventDefault()
                try{
                    let id = this.$route.params.id
                    await Api().post('/blog/' + id, this.blog)
                    await this.$router.push('/blog');
                }catch (e) {
                    this.error = 'Error posting Blog'
                }

            },
            async fetchBlog(){
                let id = this.$route.params.id

                let response = await Api().get('/blog/' + id)
                this.blog = response.data.data

            }
        },
        created() {
            this.fetchBlog()
        }
    }
</script>
