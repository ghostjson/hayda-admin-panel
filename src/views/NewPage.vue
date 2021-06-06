<template>
    <div class="container-fluid">

        <div class="card">
            <div class="card-header">{{ page.title }}</div>
            <div class="card-body">

                <error-alert :error="error"></error-alert>
                <success-alert :message="success"></success-alert>
                <form @submit="pageSubmit">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="page.title">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <input type="text" class="form-control" id="category" v-model="page.category">
                    </div>
                    <div class="form-group">
                        <label for="image">Image URL</label>
                        <input type="text" class="form-control" id="image" v-model="page.image">
                    </div>

                    <!--                    <div class="form-group">-->
                    <!--                        <label for="tags">Tags</label>-->
                    <!--                        <input type="text" class="form-control" id="tags" v-model="tags">-->
                    <!--                    </div>-->
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" v-model="page.content" id="content" rows="10"></textarea>
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
        name: 'NewPage',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                page: {
                    title: 'New Page',
                    category: '',
                    content: '',
                    image: ''
                },
                error: '',
                success: ''
            }
        },
        methods: {
            async pageSubmit(e){ e.preventDefault()
                try{
                    await Api().post('/pages', this.page)
                    await this.$router.push('/pages');
                }catch (e) {
                    this.error = 'Error posting Page'
                }

            }
        }
    }
</script>
