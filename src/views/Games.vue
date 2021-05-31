<template>

    <modal-widget v-if="model_remove_link">
        <div class="modal-header">
            <h5 class="modal-title">Remove Game</h5>
            <button v-on:click="closeRemoveLinkModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to remove this game permanently?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-primary"  v-on:click="closeRemoveLinkModal"  data-dismiss="modal">No</button>
            <button type="button" v-on:click="removeLink" class="btn btn-danger">Yes</button>
        </div>
    </modal-widget>

    <modal-widget v-if="model_add_link">
        <div class="modal-header">
            <h5 class="modal-title">Add Game</h5>
            <button v-on:click="closeRemoveLinkModal" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" class="form-control" v-model="game.title">
            </div>
            <div class="form-group">
                <label for="link">Link</label>
                <input type="text" id="link" class="form-control" v-model="game.link">
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
                                <h3>Games</h3>
                            </div>
                            <div class="col-md-9" style="text-align: right">
                                <button
                                        type="button"
                                        @click="addGame"
                                        class="btn btn-sm btn-primary"
                                >
                                    New Game
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
                            <tr v-for="(game, index) in games" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ game.title }}</td>
                                <td>{{ game.link }}</td>
                                <td>{{ new Date(game.created_at).getMonth() + '/' +new Date(game.created_at).getDate() + '/' + new Date(game.created_at).getFullYear()}}</td>
                                <td>
                                    <delete-icon
                                            v-on:click="deleteGame(game.id)"
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
        name: 'Games',
        components: {ModalWidget, DeleteIcon},
        data(){
          return {
              games: [],
              model_remove_link: false,
              model_add_link: false,
              current_link: -1,
              game: {
                  title: '',
                  link: ''
              },
              message: ''
          }
        },
        methods: {
            addGame(){
                this.model_add_link = true
            },
            closeRemoveLinkModal(){
              this.model_remove_link = false
              this.model_add_link = false

            },
            deleteGame(id){
                this.current_link = id
                this.model_remove_link = true
            },
            removeLink(){
                Api().delete('/games/'+this.current_link).then(() => location.reload())
            },
            saveLink(){
                Api().post('/games', this.game).then(() => location.reload())
            },
            async fetchGames(){
                let games = await Api().get('/games')
                this.games = games.data.data
                console.log(this.games)
            }
        },
        created() {
            this.fetchGames()
        }
    }
</script>
