<template>
    <page-heading-widget main-heading="Health Hub" sub-heading=""></page-heading-widget>

    <modal-widget v-if="toggle_remove_warning_modal">
        <div class="modal-header">
            <h5 class="modal-title">Remove Link</h5>
            <button v-on:click="closeRemoveLinkModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this link permanently?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary"  v-on:click="closeRemoveLinkModal"  data-dismiss="modal">No</button>
            <button type="button" v-on:click="removeLink" class="btn btn-danger">Yes</button>
        </div>
    </modal-widget>

    <modal-widget v-if="toggle_add_link_modal">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Link</h5>
            <button v-on:click="closeAddLinkModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="caption" class="col-form-label">Caption:</label>
                    <input type="text" v-model="add_form.caption" class="form-control" id="caption">
                </div>
                <div class="form-group">
                    <label for="link" class="col-form-label">Link:</label>
                    <input type="text"  v-model="add_form.link"  class="form-control" id="link">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary"  v-on:click="closeAddLinkModal"  data-dismiss="modal">Close</button>
            <button type="button" v-on:click="submitAddLink" class="btn btn-primary">Submit</button>
        </div>
    </modal-widget>

    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-3">
                    <h3>Body Health</h3>
                </div>
                <div class="col-md-9" style="text-align: right">
                    <button type="button" v-on:click="showAddLinkModal('body_health')" class="btn btn-sm btn-primary">Add Link</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CAPTION</th>
                    <th scope="col">LINK</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(link,index) in links.data.body_health" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{ link.caption }}</td>
                    <td>{{ link.link }}</td>
                    <td>
                        <edit-icon size="1.6em"></edit-icon>
                        <delete-icon size="2.4em" v-on:click="showRemoveLinkModal(link.id)"></delete-icon>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-3">
                    <h3>Brain Health</h3>
                </div>
                <div class="col-md-9" style="text-align: right">
                    <button type="button"  v-on:click="showAddLinkModal('brain_health')"  class="btn btn-sm btn-primary">Add Link</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CAPTION</th>
                    <th scope="col">LINK</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(link,index) in links.data.brain_health" :key="index">
                    <th scope="row">1</th>
                    <td>{{ link.caption }}</td>
                    <td>{{ link.link }}</td>
                    <td>
                        <edit-icon size="1.6em"></edit-icon>
                        <delete-icon size="2.4em" v-on:click="showRemoveLinkModal(link.id)"></delete-icon>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-3">
                    <h3>Heart Health</h3>
                </div>
                <div class="col-md-9" style="text-align: right">
                    <button type="button"  v-on:click="showAddLinkModal('heart_health')"  class="btn btn-sm btn-primary">Add Link</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CAPTION</th>
                    <th scope="col">LINK</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(link,index) in links.data.heart_health" :key="index">
                    <th scope="row">1</th>
                    <td>{{ link.caption }}</td>
                    <td>{{ link.link }}</td>
                    <td>
                        <edit-icon size="1.6em"></edit-icon>
                        <delete-icon size="2.4em" v-on:click="showRemoveLinkModal(link.id)"></delete-icon>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-3">
                    <h3>Insure Your Health</h3>
                </div>
                <div class="col-md-9" style="text-align: right">
                    <button type="button" v-on:click="showAddLinkModal('insure_your_health')"  class="btn btn-sm btn-primary">Add Link</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CAPTION</th>
                    <th scope="col">LINK</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(link,index) in links.data.insure_your_health" :key="index">
                    <th scope="row">1</th>
                    <td>{{ link.caption }}</td>
                    <td>{{ link.link }}</td>
                    <td>
                        <edit-icon size="1.6em"></edit-icon>
                        <delete-icon size="2.4em" v-on:click="showRemoveLinkModal(link.id)"></delete-icon>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-3">
                    <h3>Wealth Tips</h3>
                </div>
                <div class="col-md-9" style="text-align: right">
                    <button type="button" v-on:click="showAddLinkModal('wealth_tips')"  class="btn btn-sm btn-primary">Add Link</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CAPTION</th>
                    <th scope="col">LINK</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(link,index) in links.data.wealth_tips" :key="index">
                    <th scope="row">1</th>
                    <td>{{ link.caption }}</td>
                    <td>{{ link.link }}</td>
                    <td>
                        <edit-icon size="1.6em"></edit-icon>
                        <delete-icon size="2.4em" v-on:click="showRemoveLinkModal(link.id)"></delete-icon>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import PageHeadingWidget from "../components/widgets/PageHeadingWidget";
    import EditIcon from "../components/widgets/icons/EditIcon";
    import DeleteIcon from "../components/widgets/icons/DeleteIcon";
    import ModalWidget from "../components/widgets/ModalWidget";


    export default {
        name: 'HealthHub',
        components: {ModalWidget, DeleteIcon, EditIcon, PageHeadingWidget},
        data(){
            return {
                toggle_add_link_modal: false,
                toggle_remove_warning_modal: false,
                current_remove_form_id: -1,
                add_form: {
                    caption: '',
                    link: '',
                    category: ''
                }
            };
        },
        methods: {
            showAddLinkModal(category){
                this.toggle_add_link_modal = true;
                this.add_form.category = category
            },
            closeAddLinkModal(){
                this.toggle_add_link_modal = false;
            },
            showRemoveLinkModal(id){
                this.toggle_remove_warning_modal = true;
                this.current_remove_form_id = id;
            },
            closeRemoveLinkModal(){
                this.toggle_remove_warning_modal = false;
            },
            submitAddLink(){
                this.$store.commit('addHealthHubLink', this.add_form)
                this.closeAddLinkModal()
            },
            removeLink(){
                if(this.current_remove_form_id !== -1){
                    this.$store.commit('removeHealthHubLink', this.current_remove_form_id)
                    this.current_remove_form_id = -1;
                }
                this.closeRemoveLinkModal()
            }
        },
        mounted() {
            this.$store.dispatch('getHealthHubLinks');
        },
        computed:{
            links() {
                console.log(this.$store.state.health_hub.health_hub_links)
                return this.$store.state.health_hub.health_hub_links
            }
        }
    }
</script>
