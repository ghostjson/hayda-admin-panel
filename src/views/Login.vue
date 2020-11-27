<template>
    <div class="overlay bg-grey1">
        <div class="container" style="margin-top: 100px">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h2>Login Page</h2>
                        </div>
                        <div class="card-body">
                            <error-alert :error="error"></error-alert>
                            <form @submit="login">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input v-model="login.email" id="email" class="form-control" type="email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input v-model="login.password" id="password" class="form-control" type="password">
                                </div>
                                <div class="form-group">
                                    <button type="submit" @click="submitLogin" class="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .overlay{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1100;
    }
</style>

<script>
    import ErrorAlert from "../components/widgets/ErrorAlert";
    export default {
        name: 'Login',
        components: {ErrorAlert},
        data(){
            return {
                login: {
                    email: '',
                    password: ''
                },
                error: ''
            }
        },
        methods: {
            submitLogin(e){ e.preventDefault();

                this.$store.dispatch('login', this.login)
                        .then(status => {
                            if(status === 200) this.$router.push({ name: 'Home' })
                            if(status === 401) this.error = 'Email or Password is incorrect'
                        })
                this.login.email = '';
                this.login.password = '';
            }
        },
        mounted() {
            if(localStorage.getItem('Token')){
                this.$router.push({ name: 'Home' });
            }
        }
    }
</script>
