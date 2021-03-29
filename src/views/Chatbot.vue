<template>

    <!--    Add new Intent Modal   -->
    <modal-widget v-if="is_add_modal_open">
        <div class="modal-header">
            <h4 class="strong">Add Intent</h4>
        </div>
        <div class="modal-body">
            <div v-if="add_modal_page === 0" style="overflow: auto !important; height: 70vh !important;">
                <div class="form-group">
                    <label for="intent-name">Name</label>
                    <input class="form-control" type="text" v-model="current_intent.name" name="name" id="intent-name">
                </div>

                <div class="form-group">
                    <h5 class="strong w-100">Questions
                        <edit-icon @click="add_modal_page = 1" size="20"></edit-icon>
                    </h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between"
                            v-for="(question, index) in current_intent.questions" :key="index">

                            <p>{{ question }}</p>
                            <p>
                                <delete-icon @click="removeCurrentQuestion(index)" class="text-danger font-weight-bold"
                                             size="25"></delete-icon>
                            </p>
                        </li>
                    </ul>
                    <h5 class="strong mt-2">Answers
                        <edit-icon @click="add_modal_page=2" size="20"></edit-icon>
                    </h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between"
                            v-for="(answer, index) in current_intent.answers" :key="index">
                            <p>{{ answer }}</p>
                            <p>
                                <delete-icon @click="removeCurrentAnswer(index)" class="text-danger font-weight-bold"
                                             size="25"></delete-icon>
                            </p>
                        </li>
                    </ul>
                </div>


            </div>
            <div v-if="add_modal_page === 1">
                <div class="form-group">
                    <label for="add-question">Add Question</label>
                    <input type="text" class="form-control" id="add-question" name="add-question"
                           v-model="question_input">
                </div>

            </div>
            <div v-if="add_modal_page === 2">
                <div class="form-group">
                    <label for="add-answer">Add Answer</label>
                    <input type="text" class="form-control" id="add-answer" name="add-answer"
                           v-model="answer_input">
                </div>

            </div>
        </div>
        <div class="modal-footer" v-if="add_modal_page === 0">
            <button @click="saveIntent" class="btn btn-sm btn-primary">Save</button>
            <button @click="clearIntent" class="btn btn-sm btn-info">Clear</button>
            <button @click="is_add_modal_open = false" class="btn btn-sm btn-danger">Close</button>

        </div>
        <div class="modal-footer" v-if="add_modal_page === 1">
            <button @click="addQuestion();add_modal_page=0" class="btn btn-sm btn-primary">Add</button>
            <button @click="add_modal_page = 0" class="btn btn-info btn-sm">Back</button>
        </div>
        <div class="modal-footer" v-if="add_modal_page === 2">
            <button @click="addAnswer();add_modal_page=0" class="btn btn-sm btn-primary">Add</button>
            <button @click="add_modal_page = 0" class="btn btn-info btn-sm">Back</button>
        </div>
    </modal-widget>

    <!-- Edit Intent Modal -->
    <modal-widget v-if="is_edit_modal_open">
        <div class="modal-header">
            <h4 class="strong">Edit Intent</h4>
        </div>
        <div class="modal-body">
            <div v-if="add_modal_page === 0" style="overflow: auto !important; height: 70vh !important;">
                <div class="form-group">
                    <label for="intent-name">Name</label>
                    <input class="form-control" type="text" v-model="current_intent.name" name="name"
                           id="edit-intent-name">
                </div>

                <div class="form-group">
                    <h5 class="strong w-100">Questions
                        <edit-icon @click="add_modal_page = 1" size="20"></edit-icon>
                    </h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between"
                            v-for="(question, index) in current_intent.questions" :key="index">

                            <p>{{ question }}</p>
                            <p>
                                <delete-icon @click="removeCurrentQuestion(index)" class="text-danger font-weight-bold"
                                             size="25"></delete-icon>
                            </p>
                        </li>
                    </ul>
                    <h5 class="strong mt-2">Answers
                        <edit-icon @click="add_modal_page=2" size="20"></edit-icon>
                    </h5>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between"
                            v-for="(answer, index) in current_intent.answers" :key="index">
                            <p>{{ answer }}</p>
                            <p>
                                <delete-icon @click="removeCurrentAnswer(index)" class="text-danger font-weight-bold"
                                             size="25"></delete-icon>
                            </p>
                        </li>
                    </ul>
                </div>


            </div>
            <div v-if="add_modal_page === 1">
                <div class="form-group">
                    <label for="add-question">Add Question</label>
                    <input type="text" class="form-control" id="edit-add-question" name="add-question"
                           v-model="question_input">
                </div>

            </div>
            <div v-if="add_modal_page === 2">
                <div class="form-group">
                    <label for="add-answer">Add Answer</label>
                    <input type="text" class="form-control" id="edit-add-answer" name="add-answer"
                           v-model="answer_input">
                </div>

            </div>
        </div>
        <div class="modal-footer" v-if="add_modal_page === 0">
            <button @click="saveEditIntent" class="btn btn-sm btn-primary">Save</button>
            <button @click="clearIntent" class="btn btn-sm btn-info">Clear</button>
            <button @click="is_edit_modal_open = false;clearIntent" class="btn btn-sm btn-danger">Close</button>

        </div>
        <div class="modal-footer" v-if="add_modal_page === 1">
            <button @click="addQuestion();add_modal_page=0" class="btn btn-sm btn-primary">Add</button>
            <button @click="add_modal_page = 0" class="btn btn-info btn-sm">Back</button>
        </div>
        <div class="modal-footer" v-if="add_modal_page === 2">
            <button @click="addAnswer();add_modal_page=0" class="btn btn-sm btn-primary">Add</button>
            <button @click="add_modal_page = 0" class="btn btn-info btn-sm">Back</button>
        </div>
    </modal-widget>

    <div class="container">


        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header d-flex">
                        <h2>Intents</h2>
                        <span class="ml-auto">
                            <button @click="is_add_modal_open = true" class="btn btn-sm btn-primary">Add Intent</button>
                        </span>
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(intent, index) in intents" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ intent['name'] }}</td>
                                <td class="pl-4">
                                    <button type="button" v-on:click="edit(index)"
                                            class="btn btn-sm btn-rounded btn-primary">Edit
                                    </button>
                                    <button type="button" v-on:click="deleteIntent(index)"
                                            class="btn btn-sm btn-rounded btn-danger ml-2">Delete
                                    </button>
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
    import Api from "../services/Api";
    import ModalWidget from "../components/widgets/ModalWidget";
    import DeleteIcon from "../components/widgets/icons/DeleteIcon";
    import EditIcon from "../components/widgets/icons/EditIcon";

    export default {
        name: 'Chatbot',
        components: {EditIcon, DeleteIcon, ModalWidget},
        data() {
            return {
                intents: [],
                is_add_modal_open: false,
                is_edit_modal_open: false,
                current_intent: {
                    name: '',
                    questions: [],
                    answers: []
                },
                add_modal_page: 0,
                question_input: '',
                answer_input: '',
                current_intent_index: -1
            }
        },
        methods: {
            fetchIntents() {
                Api().get('/chat/intents').then(res => {
                    this.intents = res.data['intents']
                })
            },
            putIntents() {
                Api().post('/chat/intents', {
                    intents: this.intents
                }).then((res) => {
                    console.log(res)
                    console.log('updated')
                })
            },
            edit(index) {
                this.current_intent = this.intents[index]
                this.is_edit_modal_open = true
                this.current_intent_index = index
            },
            deleteIntent(id) {

                let response = confirm("Are you sure you want to delete this intent?");

                if (response === true) {

                    this.intents.splice(id, 1)

                    this.putIntents()
                }

            },
            addQuestion() {
                this.current_intent.questions.push(this.question_input)
            },
            addAnswer() {
                this.current_intent.answers.push(this.answer_input)
            },
            removeCurrentQuestion(index) {
                this.current_intent.questions.splice(index, 1)
            },
            removeCurrentAnswer(index) {
                this.current_intent.answers.splice(index, 1)
            },
            saveIntent() {
                this.intents.push(this.current_intent)
                this.putIntents()

                this.current_intent = {
                    name: '',
                    questions: [],
                    answers: []
                }
            },
            clearIntent() {
                this.current_intent = {
                    name: '',
                    questions: [],
                    answers: []
                }
            },
            saveEditIntent() {
                this.intents[this.current_intent_index] = this.current_intent
                this.current_intent_index = -1
                this.current_intent = {
                    name: '',
                    questions: [],
                    answers: []
                }
                this.is_edit_modal_open = false

                this.putIntents()
            }
        },
        mounted() {
            this.fetchIntents()
        }
    }
</script>
