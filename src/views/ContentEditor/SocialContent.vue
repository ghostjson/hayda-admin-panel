<template>
    <div class="container-fluid">
        <form @submit="termsSubmit">

            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Social</h3></div>
                <div class="card-body">

                    <error-alert :error="error"></error-alert>
                    <success-alert :message="success"></success-alert>

                    <div class="form-group">
                        <label for="facebook">Facebook</label>
                        <input type="text" class="form-control" id="facebook" v-model="social.facebook">
                    </div>
                    <div class="form-group">
                        <label for="instagram">Instagram</label>
                        <input type="text" class="form-control"  id="instagram" v-model="social.instagram">
                    </div>
                    <div class="form-group">
                        <label for="google">Google</label>
                        <input type="text" class="form-control"  id="google" v-model="social.google">
                    </div>
                    <div class="form-group">
                        <label for="linkedin">LinkedIn</label>
                        <input type="text" class="form-control"  id="linkedin" v-model="social.linkedin">
                    </div>
                    <div class="form-group">
                        <label for="pininterest">Pin Interest</label>
                        <input type="text" class="form-control"  id="pininterest" v-model="social.pininterest">
                    </div>
                    <div class="form-group">
                        <label for="reddit">Reddit</label>
                        <input type="text" class="form-control"  id="reddit" v-model="social.reddit">
                    </div>
                    <div class="form-group">
                        <label for="twitter">Twitter</label>
                        <input type="text" class="form-control"  id="twitter" v-model="social.twitter">
                    </div>

                    <div class="form-group">
                        <label for="vimeo">Vimeo</label>
                        <input type="text" class="form-control"  id="vimeo" v-model="social.vimeo">
                    </div>
                    <div class="form-group">
                        <label for="youtube">Youtube</label>
                        <input type="text" class="form-control"  id="youtube" v-model="social.youtube">
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
        name: 'SocialEditor',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                error: '',
                success: '',
                social: {
                    facebook: '',
                    instagram: '',
                    google: '',
                    linkedin: '',
                    pininterest: '',
                    reddit: '',
                    twitter: '',
                    vimeo: '',
                    youtube: '',
                }
            }
        },
        methods: {
            termsSubmit(e) { e.preventDefault()
                Api().post('page-content/social', {
                    content: this.social
                })
            },
            async fetchTerms(){
                let response = await Api().get('page-content/social')
                this.social = response.data.data.content
            }
        },
        created() {
            this.fetchTerms()
        }
    }
</script>
