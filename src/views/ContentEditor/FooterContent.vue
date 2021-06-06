<template>
    <div class="container-fluid">
        <form @submit="footerSubmit">

            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Footer</h3></div>
                <div class="card-body">

                    <error-alert :error="error"></error-alert>
                    <success-alert :message="success"></success-alert>
                    <div class="form-group">
                        <label for="who_we_are">Who we are</label>
                        <input type="text" class="form-control" id="who_we_are" name="who_we_are"
                               v-model="footer.who_we_are">
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="form-group">
                        <label for="link_header">Link Heading</label>
                        <input type="text" class="form-control" id="link_header" v-model="footer.link_heading">
                    </div>
                    <div class="form-group">
                        <label for="link_names">Link Names (separate names by comma)</label>
                        <input type="text" class="form-control" id="link_names" v-model="link_names">
                    </div>
                    <div class="form-group">
                        <label for="links">Link Names (separate links by comma)</label>
                        <input type="text" class="form-control" id="links" v-model="links">
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
                link_names: '',
                links: '',
                footer: {
                    who_we_are: '',
                    link_heading: '',
                    links: []
                }
            }
        },
        methods: {
            footerSubmit(e) { e.preventDefault()

                let heads = this.link_names.split(',').map((name) => name.trim())
                let links = this.links.split(',').map((link) => link.trim())


                this.footer.links = []
                heads.forEach((value,index) => {
                    this.footer.links.push({
                        name: value,
                        link: typeof links[index] === 'undefined' || links[index] === '' ? '#' : links[index]
                    })
                })


                console.log(this.footer)
                Api().post('page-content/footer', {
                    content: this.footer
                })
            },
            async fetchFooter(){
                let response = await Api().get('page-content/footer')
                this.footer = response.data.data.content


                this.footer.links.forEach(value => {
                    this.link_names += value['name'] + ', '
                    this.links += value['link'] + ', '
                })


                this.link_names = this.link_names.substring(0, this.link_names.length - 2)

                this.links = this.links.substring(0, this.links.length - 2)
            }
        },
        created() {
            this.fetchFooter()
        }
    }
</script>
