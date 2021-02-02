<template>
    <div class="container-fluid">
        <form @submit="aboutSubmit">

            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">About</h3></div>
                <div class="card-body">

                    <error-alert :error="error"></error-alert>
                    <success-alert :message="success"></success-alert>
                    <div class="form-group">
                        <label for="description_1">Description 1</label>
                        <textarea type="text" class="form-control" id="description_1" name="description_1"
                                  v-model="about.description_left"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="description_2">Description 2</label>
                        <textarea type="text" class="form-control" id="description_2" name="description_2"
                                  v-model="about.description_right"></textarea>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Steps</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="steps_title_1">Title 1</label>
                                <input class="form-control" type="text" id="steps_title_1" v-model="about.steps[0].title">
                            </div>
                            <div class="form-group">
                                <label for="steps_description_1">Description 2</label>
                                <textarea class="form-control" id="steps_description_1" v-model="about.steps[0].description"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="steps_title_2">Title 2</label>
                                <input class="form-control" type="text" id="steps_title_2" v-model="about.steps[1].title">
                            </div>
                            <div class="form-group">
                                <label for="steps_description_2">Description 2</label>
                                <textarea class="form-control" id="steps_description_2" v-model="about.steps[1].description"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="steps_title_3">Title 3</label>
                                <input class="form-control" type="text" id="steps_title_3" v-model="about.steps[2].title">
                            </div>
                            <div class="form-group">
                                <label for="steps_description_3">Description 3</label>
                                <textarea class="form-control" id="steps_description_3" v-model="about.steps[2].description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>

    </div>
</template>


<script>
    import ErrorAlert from "../../components/widgets/ErrorAlert";
    import SuccessAlert from "../../components/widgets/SuccessAlert";
    import Api from "../../services/Api";

    export default {
        name: 'AboutEditor',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                error: '',
                success: '',
                about: {
                    description_left: '',
                    description_right: '',
                    steps: [
                        {
                            title: '',
                            description: ''
                        },
                        {
                            title: '',
                            description: ''
                        },
                        {
                            title: '',
                            description: ''
                        }
                    ]
                }
            }
        },
        methods: {
            aboutSubmit(e) { e.preventDefault()
                Api().post('page-content/about', {
                    content: this.about
                })
            },
            async fetchHome(){
                let response = await Api().get('page-content/about')
                this.about = response.data.data.content
            }
        },
        created() {
            this.fetchHome()
        }
    }
</script>
