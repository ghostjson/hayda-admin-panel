<template>
    <form @submit="settingUpdate">
        <div class="d-flex justify-content-between">
            <h3>Settings</h3>
            <button type="submit" class="btn btn-sm btn-primary mb-4">Update</button>
        </div>

        <error-alert :error="error"></error-alert>
        <success-alert :message="success"></success-alert>

        <div class="card">
            <div class="card-header">
                <h4>Stripe Credentials</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="stripe_publishable_key">Publishable Key</label>
                    <input type="text" v-model="settings['stripe_publishable_key']" class="form-control" id="stripe_publishable_key">
                </div>
                <div class="form-group">
                    <label for="stripe_secret_key">Secret Key</label>
                    <input type="password" v-model="settings['stripe_secret_key']"  class="form-control" id="stripe_secret_key">
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import Api from "../services/Api";
    import ErrorAlert from "../components/widgets/ErrorAlert";
    import SuccessAlert from "../components/widgets/SuccessAlert";

    export default {
        name: 'Settings',
        components: {SuccessAlert, ErrorAlert},
        data(){
            return{
                settings: [
                ],
                error: '',
                success: ''
            }
        },
        methods: {
            async settingUpdate(e){ e.preventDefault()
                try{
                    await Api().post('/settings', {
                        'settings': this.settings
                    })
                    this.success = 'Settings Updated Successfully'
                }catch (e) {
                    this.error = 'Error updating settings'
                }

            },
            async fetchSettings(){
                let response = await Api().get('/settings')
                this.settings = response.data
            }
        },
        computed:{},
        mounted() {
            this.fetchSettings()
        }
    }
</script>
