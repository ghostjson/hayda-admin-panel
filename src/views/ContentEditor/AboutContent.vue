<template>

    <modal-widget v-if="modal_add_team">
        <div class="modal-header">
            <h5 class="modal-title">Add Member</h5>
            <button v-on:click="closeAddTeamModal" type="button" class="close" data-dismiss="modal"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input v-model="team_form.name" type="text" id="name" class="form-control">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input v-model="team_form.title" type="text" id="title" class="form-control">
                    </div>
                </div>

            </div>

            <div class="form-group">
                <label for="image">Image URL</label>
                <input type="file" @change="onFileChanged" class="form-control" id="image">
                <!--                <input v-model="team_form.image" type="text" id="image" class="form-control">-->
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="team_form.description" class="form-control" id="description"></textarea>
            </div>
            <hr>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="facebook">Facebook</label>
                        <input v-model="team_form.facebook" type="text" id="facebook" class="form-control">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="twitter">Twitter</label>
                        <input v-model="team_form.twitter" type="text" id="twitter" class="form-control">
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="instagram">Instagram</label>
                        <input v-model="team_form.instagram" type="text" id="instagram" class="form-control">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="team_form.email" type="text" id="email" class="form-control">
                    </div>
                </div>


            </div>


        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="closeAddTeamModal" data-dismiss="modal">No
            </button>
            <button type="button" v-on:click="saveMember" class="btn btn-danger">Save</button>
        </div>
    </modal-widget>
    <modal-widget v-if="modal_edit_team">
        <div class="modal-header">
            <h5 class="modal-title">Edit Member</h5>
            <button v-on:click="modal_edit_team = false" type="button" class="close" data-dismiss="modal"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="name_edit">Name</label>
                        <input v-model="team_form.name" type="text" id="name_edit" class="form-control">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="title_edit">Title</label>
                        <input v-model="team_form.title" type="text" id="title_edit" class="form-control">
                    </div>
                </div>

            </div>

            <div class="form-group">
                <label for="image_edit">Image URL</label>
                <input type="file" @change="onFileChanged" class="form-control" id="image_edit">
                <!--                <input v-model="team_form.image" type="text" id="image" class="form-control">-->
            </div>
            <div class="form-group">
                <label for="description_edit">Description</label>
                <textarea v-model="team_form.description" class="form-control" id="description_edit"></textarea>
            </div>
            <hr>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="facebook">Facebook</label>
                        <input v-model="team_form.facebook" type="text" id="facebook" class="form-control">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="twitter_edit">Twitter</label>
                        <input v-model="team_form.twitter" type="text" id="twitter_edit" class="form-control">
                    </div>
                </div>


            </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group">
                        <label for="instagram_edit">Instagram</label>
                        <input v-model="team_form.instagram" type="text" id="instagram_edit" class="form-control">
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group">
                        <label for="email_edit">Email</label>
                        <input v-model="team_form.email" type="text" id="email_edit" class="form-control">
                    </div>
                </div>


            </div>


        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="modal_edit_team = false" data-dismiss="modal">No
            </button>
            <button type="button" v-on:click="updateMember" class="btn btn-danger">Save</button>
        </div>
    </modal-widget>
    <div class="container-fluid">
        <form @submit="aboutSubmit">

            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">About</h3></div>
                <div class="card-body">

                    <error-alert :error="error"></error-alert>
                    <success-alert :message="success"></success-alert>
                    <div class="form-group">
                        <label for="description_1">Description 1</label>
                        <textarea type="text" class="form-control" id="description_1" name="description_1"
                                  v-model="about.description_left"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="description_2">Description 2</label>
                        <textarea type="text" class="form-control" id="description_2" name="description_2"
                                  v-model="about.description_right"></textarea>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h3 class="font-weight-bold">Steps</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="steps_description_1">Description 2</label>
                                <textarea class="form-control" id="steps_description_1"
                                          v-model="about.steps[0].description"></textarea>
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="steps_description_2">Description 2</label>
                                <textarea class="form-control" id="steps_description_2"
                                          v-model="about.steps[1].description"></textarea>
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="steps_description_3">Description 3</label>
                                <textarea class="form-control" id="steps_description_3"
                                          v-model="about.steps[2].description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-3">
                            <h3>Team</h3>
                        </div>
                        <div class="col-md-9" style="text-align: right">
                            <button
                                    type="button"
                                    @click="addTeam"
                                    class="btn btn-sm btn-primary"
                            >
                                Add Member
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-body">

                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="team_description">Team description</label>
                                <input class="form-control" type="text" id="team_description"
                                       v-model="about.team_description">
                            </div>
                        </div>
                    </div>

                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Title</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(member, index) in about.team" :key="index">
                            <td>{{ member.name }}</td>
                            <td>{{ member.title }}</td>
                            <td>
                                <edit-icon v-on:click="editMemberModalOpen(index)" size="1.2em"></edit-icon>
                                <delete-icon v-on:click="deleteMember(index)"
                                             size="2em"></delete-icon>
                            </td>
                        </tr>
                        </tbody>
                    </table>


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
    import ModalWidget from "../../components/widgets/ModalWidget";
    import DeleteIcon from "../../components/widgets/icons/DeleteIcon";
    import EditIcon from "../../components/widgets/icons/EditIcon";

    export default {
        name: 'AboutEditor',
        components: {EditIcon, DeleteIcon, ModalWidget, SuccessAlert, ErrorAlert},
        data() {
            return {
                error: '',
                success: '',
                modal_add_team: false,
                modal_edit_team: false,
                about: {
                    description_left: '',
                    description_right: '',
                    steps: [
                        {
                            title: '',
                            description: ''
                        },
                        {
                            title: '',
                            description: ''
                        },
                        {
                            title: '',
                            description: ''
                        }
                    ],
                    team_description: '',
                    team: [],
                },
                team_form: {
                    name: '',
                    title: '',
                    description: '',
                    image: '',
                    facebook: '',
                    twitter: '',
                    instagram: '',
                    email: ''
                },
                current_edit_team_member: -1
            }
        },
        methods: {
            aboutSubmit(e) {
                e.preventDefault()
                Api().post('page-content/about', {
                    content: this.about
                })
            },
            addTeam() {
                this.team_form = {
                    name: '',
                    title: '',
                    description: '',
                    image: null,
                    facebook: '',
                    twitter: '',
                    instagram: '',
                    email: ''
                }
                this.modal_add_team = true
            },
            closeAddTeamModal() {
                this.modal_add_team = false
            },
            onFileChanged(event) {
                const file = event.target.files[0]
                const formData = new FormData()

                formData.append('file', file);
                Api().post('/file-upload', formData)
                    .then(res => this.team_form.image = res.data)
            }
            ,
            saveMember() {
                this.about.team.push(this.team_form)
                this.closeAddTeamModal()
            },
            updateMember(){
                this.about.team[this.current_edit_team_member] = this.team_form
                this.modal_edit_team = false
            },
            deleteMember(id) {
                this.about.team.splice(id, 1)
            },
            editMemberModalOpen(id){
                this.current_edit_team_member = id
                this.modal_edit_team = true
                this.team_form = Object.create(this.about.team[id])
            },
            async fetchHome() {
                let response = await Api().get('page-content/about')
                this.about = response.data.data.content
                console.log(this.about)
            }
        },
        created() {
            this.fetchHome()
        }
    }
</script>
