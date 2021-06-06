<template>
    <div class="container-fluid">
        <form @submit="termsSubmit">

            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Terms</h3></div>
                <div class="card-body">

                    <error-alert :error="error"></error-alert>
                    <success-alert :message="success"></success-alert>

                    <div class="form-group">
                        <label for="content">Content</label>
                        <textarea id="content" class="form-control" style="min-height: 60vh;" v-model="terms.content"></textarea>
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
        name: 'TermsEditor',
        components: {SuccessAlert, ErrorAlert},
        data() {
            return {
                error: '',
                success: '',
                terms: {
                    content: ''
                }
            }
        },
        methods: {
            termsSubmit(e) { e.preventDefault()
                Api().post('page-content/terms', {
                    content: this.terms
                })
            },
            async fetchTerms(){

                let response = await Api().get('page-content/terms')

                this.terms = response.data.data.content
            }
        },
        created() {
            this.fetchTerms()
        }
    }
</script>
