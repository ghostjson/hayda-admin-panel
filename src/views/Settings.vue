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
                <h4>Contact</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="contact_email">Email</label>
                    <input id="contact_email" type="email" v-model="settings['website_contact_email']" class="form-control">
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h4>Theme</h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="theme_color">Primary theme colour</label>
                    <input id="theme_color" type="color" v-model="theme.primary_color" class="form-control">
                </div>

                <div class="form-group">
                    <label for="theme_secondary_color">Secondary theme colour</label>
                    <input id="theme_secondary_color" type="color" v-model="theme.secondary_color" class="form-control">
                </div>

            </div>
        </div>

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
                theme: {
                    primary_color: '',
                    secondary_color: ''
                },
                error: '',
                success: ''
            }
        },
        methods: {
            async settingUpdate(e){ e.preventDefault()
                try{
                    this.settings['theme'] = JSON.stringify(this.theme)

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

                this.theme = JSON.parse(this.settings['theme']);

            }
        },
        computed:{},
        mounted() {
            this.fetchSettings()
        }
    }
</script>
