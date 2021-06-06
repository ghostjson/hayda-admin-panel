<template>

    <div class="container-fluid">
        <form @submit="placesSubmit">

            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Places</h3></div>
                <div class="card-body">

                    <error-alert :error="error"></error-alert>
                    <success-alert :message="success"></success-alert>
                    <div class="form-group">
                        <label for="description_1">Description 1</label>
                        <textarea type="text" class="form-control" id="description_1" name="description_1"
                                  v-model="places"></textarea>
                    </div>
                    <div class="form-group">
                       <button type="submit" class="btn btn-sm btn-primary">Submit</button>
                    </div>
                </div>
            </div>

        </form>

    </div>
</template>


<script>
    import ErrorAlert from "../../components/widgets/ErrorAlert";
    import SuccessAlert from "../../components/widgets/SuccessAlert";
    import Api from "../../services/Api";

    export default {
        name: 'DiscoverPlacesContent',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                error: '',
                success: '',
                places: '',
            }
        },
        methods: {
            placesSubmit(e) {
                e.preventDefault()
                Api().post('page-content/discover-places', {
                    content: {
                        places: this.places
                    }
                }).then(() => {
                    this.success = 'Successfully updated'
                }).catch(e => {
                    console.log(e)
                    this.error = 'Something went wrong'
                })
            },
            async fetchHome() {
                let response = await Api().get('page-content/discover-places')
                this.places = response.data.data.content.places

                console.log(this.places)
            }
        },
        created() {
            this.fetchHome()
        }
    }
</script>
