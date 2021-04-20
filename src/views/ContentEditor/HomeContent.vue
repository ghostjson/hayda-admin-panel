<template>
    <div class="container-fluid">
        <form @submit="homeSubmit">

            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Home</h3></div>
                <div class="card-body">

                    <error-alert :error="error"></error-alert>
                    <success-alert :message="success"></success-alert>
                    <div class="form-group">
                        <label for="title_caption">Title Caption</label>
                        <input type="text" class="form-control" id="title_caption" name="title_caption"
                               v-model="home.title_caption">
                    </div>
                    <div class="form-group">
                        <label for="small_quote">Small quote</label>
                        <input type="text" class="form-control" id="small_quote" name="small_quote"
                               v-model="home.small_quote">
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">What We Do</h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="what_we_do_caption">Caption</label>
                        <input class="form-control" type="text" id="what_we_do_caption" v-model="home.what_we_do.caption">
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="what_we_do_header_1">Header 1</label>
                                <input class="form-control" type="text" id="what_we_do_header_1" v-model="home.what_we_do.content[0].header">
                            </div>
                            <div class="form-group">
                                <label for="what_we_do_description_1">Description 1</label>
                                <textarea class="form-control" type="text" id="what_we_do_description_1" v-model="home.what_we_do.content[0].description"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="what_we_do_header_2">Header 2</label>
                                <input class="form-control" type="text" id="what_we_do_header_2" v-model="home.what_we_do.content[1].header">
                            </div>
                            <div class="form-group">
                                <label for="what_we_do_description_2">Description 2</label>
                                <textarea class="form-control" type="text" id="what_we_do_description_2" v-model="home.what_we_do.content[1].description"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="what_we_do_header_3">Header 3</label>
                                <input class="form-control" type="text" id="what_we_do_header_3" v-model="home.what_we_do.content[2].header">
                            </div>
                            <div class="form-group">
                                <label for="what_we_do_description_3">Description 3</label>
                                <textarea class="form-control" type="text" id="what_we_do_description_3" v-model="home.what_we_do.content[2].description"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="what_we_do_header_4">Header 4</label>
                                <input class="form-control" type="text" id="what_we_do_header_4" v-model="home.what_we_do.content[3].header">
                            </div>
                            <div class="form-group">
                                <label for="what_we_do_description_4">Description 4</label>
                                <textarea class="form-control" type="text" id="what_we_do_description_4" v-model="home.what_we_do.content[3].description"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="what_we_do_header_5">Header 5</label>
                                <input class="form-control" type="text" id="what_we_do_header_5" v-model="home.what_we_do.content[4].header">
                            </div>
                            <div class="form-group">
                                <label for="what_we_do_description_5">Description 5</label>
                                <textarea class="form-control" type="text" id="what_we_do_description_5" v-model="home.what_we_do.content[4].description"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="what_we_do_header_6">Header 6</label>
                                <input class="form-control" type="text" id="what_we_do_header_6" v-model="home.what_we_do.content[5].header">
                            </div>
                            <div class="form-group">
                                <label for="what_we_do_description_6">Description 6</label>
                                <textarea class="form-control" type="text" id="what_we_do_description_6" v-model="home.what_we_do.content[5].description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Services</h3> <small>
                    <a href="https://fontawesome.com/v4.7.0/icons/" target="_blank" class="text-secondary">
                        Find more icons here
                    </a>
                </small>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="services_caption">Caption</label>
                        <input class="form-control" type="text" id="services_caption" v-model="home.services.caption">
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_1">Header 1</label>
                                <input class="form-control" id="services_header_1" v-model="home.services.content[0].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_1">Icon 1</label>
                                <input class="form-control" id="services_icon_1" v-model="home.services.content[0].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_1">Description 1</label>
                                <textarea class="form-control" v-model="home.services.content[0].description" id="services_description_1"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_2">Header 2</label>
                                <input class="form-control" id="services_header_2" v-model="home.services.content[1].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_2">Icon 2</label>
                                <input class="form-control" id="services_icon_2" v-model="home.services.content[1].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_2">Description 2</label>
                                <textarea class="form-control" v-model="home.services.content[1].description" id="services_description_2"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_3">Header 3</label>
                                <input class="form-control" id="services_header_3" v-model="home.services.content[2].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_3">Icon 3</label>
                                <input class="form-control" id="services_icon_3" v-model="home.services.content[2].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_3">Description 3</label>
                                <textarea class="form-control" v-model="home.services.content[2].description" id="services_description_3"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_4">Header 4</label>
                                <input class="form-control" id="services_header_4" v-model="home.services.content[3].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_4">Icon 4</label>
                                <input class="form-control" id="services_icon_4" v-model="home.services.content[3].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_4">Description 4</label>
                                <textarea class="form-control" v-model="home.services.content[3].description" id="services_description_4"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_5">Header 5</label>
                                <input class="form-control" id="services_header_5" v-model="home.services.content[4].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_5">Icon 5</label>
                                <input class="form-control" id="services_icon_5" v-model="home.services.content[4].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_5">Description 5</label>
                                <textarea class="form-control" v-model="home.services.content[4].description" id="services_description_5"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_6">Header 6</label>
                                <input class="form-control" id="services_header_6" v-model="home.services.content[5].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_6">Icon 6</label>
                                <input class="form-control" id="services_icon_6" v-model="home.services.content[5].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_6">Description 6</label>
                                <textarea class="form-control" v-model="home.services.content[5].description" id="services_description_6"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_7">Header 7</label>
                                <input class="form-control" id="services_header_7" v-model="home.services.content[6].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_7">Icon 7</label>
                                <input class="form-control" id="services_icon_7" v-model="home.services.content[6].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_7">Description 7</label>
                                <textarea class="form-control" v-model="home.services.content[6].description" id="services_description_7"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_8">Header 8</label>
                                <input class="form-control" id="services_header_8" v-model="home.services.content[7].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_8">Icon 8</label>
                                <input class="form-control" id="services_icon_8" v-model="home.services.content[7].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_8">Description 8</label>
                                <textarea class="form-control" v-model="home.services.content[7].description" id="services_description_8"></textarea>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="services_header_9">Header 9</label>
                                <input class="form-control" id="services_header_9" v-model="home.services.content[8].header">
                            </div>
                            <div class="form-group">
                                <label for="services_icon_9">Icon 9</label>
                                <input class="form-control" id="services_icon_9" v-model="home.services.content[8].icon">
                            </div>
                            <div class="form-group">
                                <label for="services_description_9">Description 9</label>
                                <textarea class="form-control" v-model="home.services.content[8].description" id="services_description_9"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr>

                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Statistics</h3>
                </div>
                <div>
                    <div class="form-group">
                        <label for="statistics_title_1">Title 1</label>
                        <input type="text" id="statistics_title_1" class="form-control" v-model="home.statistics.content[0].title">
                    </div>
                    <div class="form-group">
                        <label for="statistics_value_1">Value 1</label>
                        <input type="text" id="statistics_value_1" class="form-control" v-model="home.statistics.content[0].value">
                    </div>
                    <div class="form-group">
                        <label for="statistics_icon_1">Icon 1</label>
                        <input type="text" id="statistics_icon_1" class="form-control" v-model="home.statistics.content[0].icon">
                    </div>
                </div>
                <hr>
                <div>
                    <div class="form-group">
                        <label for="statistics_title_2">Title 2</label>
                        <input type="text" id="statistics_title_2" class="form-control" v-model="home.statistics.content[1].title">
                    </div>
                    <div class="form-group">
                        <label for="statistics_value_2">Value 2</label>
                        <input type="text" id="statistics_value_2" class="form-control" v-model="home.statistics.content[1].value">
                    </div>
                    <div class="form-group">
                        <label for="statistics_icon_2">Icon 2</label>
                        <input type="text" id="statistics_icon_2" class="form-control" v-model="home.statistics.content[1].icon">
                    </div>
                </div>
                <hr>
                <div>
                    <div class="form-group">
                        <label for="statistics_title_3">Title 3</label>
                        <input type="text" id="statistics_title_3" class="form-control" v-model="home.statistics.content[2].title">
                    </div>
                    <div class="form-group">
                        <label for="statistics_value_3">Value 3</label>
                        <input type="text" id="statistics_value_3" class="form-control" v-model="home.statistics.content[2].value">
                    </div>
                    <div class="form-group">
                        <label for="statistics_icon_3">Icon 3</label>
                        <input type="text" id="statistics_icon_3" class="form-control" v-model="home.statistics.content[2].icon">
                    </div>
                </div>
                <hr>
                <div>
                    <div class="form-group">
                        <label for="statistics_title_4">Title 4</label>
                        <input type="text" id="statistics_title_4" class="form-control" v-model="home.statistics.content[3].title">
                    </div>
                    <div class="form-group">
                        <label for="statistics_value_4">Value 4</label>
                        <input type="text" id="statistics_value_4" class="form-control" v-model="home.statistics.content[3].value">
                    </div>
                    <div class="form-group">
                        <label for="statistics_icon_4">Icon 4</label>
                        <input type="text" id="statistics_icon_4" class="form-control" v-model="home.statistics.content[3].icon">
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
        name: 'HomeEditor',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                error: '',
                success: '',
                home: {
                    title_caption: '',
                    small_quote: '',
                    what_we_do: {
                        caption: '',
                        content: [
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            }
                        ]
                    },
                    services: {
                        caption: '',
                        content: [
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },
                            {
                                header: '',
                                description: ''
                            },

                        ]
                    },
                    statistics: {
                        content: [
                            {
                                title: '',
                                icon: '',
                                value: ''
                            },
                            {
                                title: '',
                                icon: '',
                                value: ''
                            },
                            {
                                title: '',
                                icon: '',
                                value: ''
                            },
                            {
                                title: '',
                                icon: '',
                                value: ''
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            homeSubmit(e) { e.preventDefault()
                Api().post('page-content/home', {
                    content: this.home
                })
            },
            async fetchHome(){
                let response = await Api().get('page-content/home')
                this.home = response.data.data.content
            }
        },
        created() {
            this.fetchHome()
        }
    }
</script>
