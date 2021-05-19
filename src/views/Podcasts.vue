<template>

    <modal-widget v-if="model_remove_link">
        <div class="modal-header">
            <h5 class="modal-title">Remove Podcast</h5>
            <button v-on:click="closeRemoveLinkModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this podcast permanently?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary"  v-on:click="closeRemoveLinkModal"  data-dismiss="modal">No</button>
            <button type="button" v-on:click="removeLink" class="btn btn-danger">Yes</button>
        </div>
    </modal-widget>

    <modal-widget v-if="model_add_link">
        <div class="modal-header">
            <h5 class="modal-title">Add Podcast</h5>
            <button v-on:click="closeRemoveLinkModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control" v-model="podcast.title">
            </div>
            <div class="form-group">
                <label for="link">Link</label>
                <input type="text" id="link" class="form-control" v-model="podcast.link">
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary"  v-on:click="closeRemoveLinkModal"  data-dismiss="modal">No</button>
            <button type="button" v-on:click="saveLink" class="btn btn-danger">Save</button>
        </div>
    </modal-widget>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-md-3">
                                <h3>Podcasts</h3>
                            </div>
                            <div class="col-md-9" style="text-align: right">
                                <button
                                        type="button"
                                        @click="addPodcast"
                                        class="btn btn-sm btn-primary"
                                >
                                    New Podcast
                                </button>
                            </div>
                        </div>
                    </div>
                    <success-alert :message="message"></success-alert>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Url</th>
                                <th scope="col">Date</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(podcast, index) in podcasts" :key="index"><td>{{ index+1 }}</td>
                                <td>{{ podcast.title }}</td>
                                <td>{{ podcast.link }}</td>
                                <td>{{ podcast.created_at }}</td>
                                <td>
                                    <delete-icon
                                            v-on:click="deletePodcast(podcast.id)"
                                            size="2em"
                                    ></delete-icon>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ModalWidget from "../components/widgets/ModalWidget";

    import DeleteIcon from "../components/widgets/icons/DeleteIcon";

    import Api from "../services/Api";
    export default {
        name: 'Podcasts',
        components: {ModalWidget, DeleteIcon},
        data(){
            return {
                podcasts: [],
                model_remove_link: false,
                model_add_link: false,
                current_link: -1,
                podcast: {
                    title: '',
                    link: ''
                },
                message: ''
            }
        },
        methods: {
            addPodcast(){
                this.model_add_link = true
            },
            closeRemoveLinkModal(){
                this.model_remove_link = false
                this.model_add_link = false

            },
            deletePodcast(id){
                this.current_link = id
                this.model_remove_link = true
            },
            removeLink(){
                Api().delete('/podcasts/'+this.current_link).then(() => location.reload())
            },
            saveLink(){
                Api().post('/podcasts', this.podcast).then(() => location.reload())
            },
            async fetchPodcasts(){
                let podcasts = await Api().get('/podcasts')
                this.podcasts = podcasts.data.data
            }
        },
        created() {
            this.fetchPodcasts()
        }
    }
</script>
