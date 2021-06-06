<template>
    <div class="container-fluid">

        <div class="card">
            <div class="card-header">{{ nutrition.title }}</div>
            <div class="card-body">

                <error-alert :error="error"></error-alert>
                <success-alert :message="success"></success-alert>
                <form @submit="nutritionSubmit">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" v-model="nutrition.title">
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <input type="text" class="form-control" id="category" v-model="nutrition.category">
                    </div>
                    <div class="form-group">
                        <label for="image">Image URL</label>
                        <input type="text" class="form-control" id="image" v-model="nutrition.image">
                    </div>

                    <!--                    <div class="form-group">-->
                    <!--                        <label for="tags">Tags</label>-->
                    <!--                        <input type="text" class="form-control" id="tags" v-model="tags">-->
                    <!--                    </div>-->
                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea class="form-control" v-model="nutrition.content" id="content" rows="10"></textarea>
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
        name: 'NewNutrition',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                nutrition: {
                    title: 'New Nutrition',
                    category: '',
                    content: '',
                    image: ''
                },
                error: '',
                success: ''
            }
        },
        methods: {
            async nutritionSubmit(e){ e.preventDefault()
                try{
                    await Api().post('/goals/nutrition', this.nutrition)
                    await this.$router.push('/nutrition');
                }catch (e) {
                    this.error = 'Error posting Nutrition'
                }

            }
        }
    }
</script>
