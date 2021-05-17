<template>
    <page-heading-widget main-heading="Health Hub" sub-heading=""></page-heading-widget>

    <!--    Delete warning modal   -->
    <modal-widget v-if="toggle_remove_warning_modal">
        <div class="modal-header">
            <h5 class="modal-title">Remove Link</h5>
            <button v-on:click="closeRemoveLinkModal" type="button" class="close" data-dismiss="modal"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this link permanently?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="closeRemoveLinkModal" data-dismiss="modal">No
            </button>
            <button type="button" v-on:click="removeLink" class="btn btn-danger">Yes</button>
        </div>
    </modal-widget>

    <!--  Add link modal  -->
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
                    <label for="category" class="col-form-label">Category</label>
                    <input type="text" v-model="add_form.category" class="form-control" id="category">
                </div>
                <div class="form-group">
                    <label for="link" class="col-form-label">Link:</label>
                    <input type="text" v-model="add_form.link" class="form-control" id="link">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="closeAddLinkModal" data-dismiss="modal">Close
            </button>
            <button type="button" v-on:click="submitAddLink" class="btn btn-primary">Submit</button>
        </div>
    </modal-widget>

    <!--  Edit link modal  -->
    <modal-widget v-if="toggle_edit_link_modal">
        <div class="modal-header">
            <h5 class="modal-title" id="edit_link_title">Edit Link</h5>
            <button v-on:click="closeEditLinkModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="caption" class="col-form-label">Caption:</label>
                    <input type="text" v-model="edit_form.caption" class="form-control" id="caption">
                </div>
                <div class="form-group">
                    <label for="link" class="col-form-label">Link:</label>
                    <input type="text" v-model="edit_form.link" class="form-control" id="link">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="closeEditLinkModal" data-dismiss="modal">Close
            </button>
            <button type="button" v-on:click="submitEditLink" class="btn btn-primary">Submit</button>
        </div>
    </modal-widget>

    <div class="container-fluid">

        <div class="text-right mb-4">
            <button type="button" v-on:click="showAddLinkModal('brain_health')" class="btn btn-sm btn-primary">Add
                Link
            </button>
        </div>
        <div class="card" v-for="(health_hub, index) in Object.keys(links.data)" :key="index">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-12">
                        <h3>{{ health_hub }}</h3>
                        <div class="buttons" style="position: absolute; right: 10px; top: 5px;font-size: 1.2em;">
                            <i @click="decreaseCategoryPriority(health_hub)" class="fas fa-long-arrow-alt-down" style="cursor: pointer; margin-right: 7px"></i>
                            <i @click="increaseCategoryPriority(health_hub)" class="fas fa-long-arrow-alt-up" style="cursor: pointer"></i>
                        </div>
                    </div>
                    <div class="col-md-9" style="text-align: right">

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
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr v-for="(link,index) in links.data[health_hub]" :key="index">

                        <th scope="row">{{index+1}}</th>
                        <td>{{ link.caption }}</td>
                        <td>{{ link.link }}</td>
                        <td>
                            <edit-icon size="1.6em" v-on:click="showEditLinkModal(link.id)"></edit-icon>
                            <delete-icon size="2.4em" v-on:click="showRemoveLinkModal(link.id)"></delete-icon>
                        </td>
                        <td>
                            <i @click="decreaseLinkPriority(link.id)" class="fas fa-long-arrow-alt-down" style="cursor: pointer; margin-right: 7px"></i>
                            <i @click="increaseLinkPriority(link.id)" class="fas fa-long-arrow-alt-up" style="cursor: pointer"></i>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>

</template>

<script>
    import PageHeadingWidget from "../components/widgets/PageHeadingWidget";
    import EditIcon from "../components/widgets/icons/EditIcon";
    import DeleteIcon from "../components/widgets/icons/DeleteIcon";
    import ModalWidget from "../components/widgets/ModalWidget";
    import Api from "../services/Api";


    export default {
        name: 'HealthHub',
        components: {ModalWidget, DeleteIcon, EditIcon, PageHeadingWidget},
        data() {
            return {
                toggle_add_link_modal: false,
                toggle_remove_warning_modal: false,
                toggle_edit_link_modal: false,
                current_remove_form_id: -1,
                add_form: {
                    caption: '',
                    link: '',
                    category: ''
                },
                edit_form: {
                    caption: '',
                    link: '',
                    category: ''
                }
            };
        },
        methods: {
            showAddLinkModal() {

                this.add_form = {
                    caption: '',
                    link: '',
                    category: ''
                }

                this.toggle_add_link_modal = true;
            },
            closeAddLinkModal() {
                this.toggle_add_link_modal = false;
            },
            closeEditLinkModal() {
                this.toggle_edit_link_modal = false;
            },
            showRemoveLinkModal(id) {
                this.toggle_remove_warning_modal = true;
                this.current_remove_form_id = id;
            },
            closeRemoveLinkModal() {
                this.toggle_remove_warning_modal = false;
            },
            showEditLinkModal(id) {

                this.toggle_edit_link_modal = true

                Object.values(this.links.data).forEach(values => {
                    values.forEach(val => {
                        if (val.id === id) {
                            this.edit_form = val
                        }
                    })
                })
            },
            submitEditLink() {
                this.$store.commit('updateHealthHubLink', this.edit_form)
                this.closeEditLinkModal()
                // location.reload()
            },
            submitAddLink() {
                console.log(this.add_form)
                this.$store.commit('addHealthHubLink', this.add_form)
                this.closeAddLinkModal()
                // location.reload()
            },
            removeLink() {
                if (this.current_remove_form_id !== -1) {
                    this.$store.commit('removeHealthHubLink', this.current_remove_form_id)
                    this.current_remove_form_id = -1;
                    // location.reload()
                }
                this.closeRemoveLinkModal()
            },
            increaseCategoryPriority(category){
               Api().get('/health-hub/category/increase/'+ category).then(() => {
                   location.reload()
               })
            },
            decreaseCategoryPriority(category){
                Api().get('/health-hub/category/decrease/'+ category).then(() => {
                    location.reload()
                })
            },
            increaseLinkPriority(id){
                Api().get('/health-hub/link/increase/'+ id).then(() => {
                    location.reload()
                })
            },
            decreaseLinkPriority(id){
                Api().get('/health-hub/link/decrease/'+id).then(() => {
                    location.reload()
                })
            }
        },
        mounted() {
            this.$store.dispatch('getHealthHubLinks');

            console.log(this.$store.state.health_hub)
        },
        computed: {
            links() {
                return this.$store.state.health_hub.health_hub_links
            }
        }
    }
</script>
