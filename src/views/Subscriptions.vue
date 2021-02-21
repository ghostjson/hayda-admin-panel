<template>

    <modal-widget v-if="open_add_feature_modal">
        <div class="modal-header">Add Feature</div>
        <div class="modal-body">
            <div class="form-group">
                <input type="text" class="form-control" v-model="add_feature_field" id="feature" placeholder="Health Information">
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" @click="closeModal()" class="btn btn-danger">Cancel</button>
            <button type="button" @click="addFeature()" class="btn btn-primary">Save</button>
        </div>
    </modal-widget>

    <modal-widget v-if="open_change_price_modal">
        <div class="modal-header">Change Price</div>
        <div class="modal-body">
            <div class="form-group">
                <input type="text" class="form-control" v-model="change_price_field" id="price" placeholder="100">
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" @click="closeModal()" class="btn btn-danger">Cancel</button>
            <button type="button" @click="changePrice()" class="btn btn-primary">Save</button>
        </div>
    </modal-widget>

    <div class="card">
        <div class="card-header" style="display: flex; justify-content: space-between">
            <h3>Subscriptions</h3>
            <button @click="saveChanges" class="btn btn-sm btn-primary">Save Changes</button>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col" v-for="(sub,indexS) in subscription" :key="indexS">
                    <div class="head">
                        <h3>{{ sub.name }}</h3>
                        <button type="button" @click="openAddFeatureModal(indexS)" class="btn btn-sm btn-primary">Add Feature</button>
                    </div>
                    <div class="mb-4">
                        Price: ${{ sub.price }} <span @click="openAddPriceModal(indexS)" class="btn btn-sm btn-link">Change</span>
                    </div>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(feature, index) in sub.features" :key="index">
                            <span class="content">{{ feature }}</span>
                            <delete-icon @click="deleteFeature(indexS, index)" size="24"></delete-icon>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>


</template>

<style scoped>
    .head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 14px;
    }

    .list-group-item{
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
    import DeleteIcon from "../components/widgets/icons/DeleteIcon";
    import ModalWidget from "../components/widgets/ModalWidget";
    import Api from "../services/Api";
    export default {
        name: 'Subscriptions',
        components: {ModalWidget, DeleteIcon},
        data(){
            return {
                open_add_feature_modal: false,
                current_add_feature: -1,
                add_feature_field: '',
                open_change_price_modal: false,
                change_price_field: 0,
                current_change_price: 0,
                subscription: [
                    // {
                    //     name: 'Free',
                    //     features: [
                    //         'Health Information',
                    //         'Resources',
                    //         'Games',
                    //         'Incentives',
                    //         'Feedback',
                    //         'Geolocation',
                    //         'Machine Learning',
                    //         'Alert Notification',
                    //         'Email list',
                    //         'Basic Chatbot',
                    //         'Social Community'
                    //     ],
                    //     price: 0
                    // },
                    // {
                    //     name: 'Premium',
                    //     features: [
                    //         'Basic offering plus in-depth analysis',
                    //         'Health Coach',
                    //         'Video Chat By Appointment',
                    //         'Chatbot On Demand',
                    //         'Reminder Prompts',
                    //         'Blogging',
                    //         'Podcast'
                    //     ],
                    //     price: 0
                    // },
                    // {
                    //     name: 'Premium Plus',
                    //     features: [
                    //         'Premium Offering',
                    //         'Upload Data',
                    //         'Algorithm Analysis',
                    //         'Goal Setting',
                    //         'Video Chat 24/7',
                    //         'Personalized Health Plans',
                    //         'Behavior Modification',
                    //         'Group Support',
                    //         'Monitoring Of Progress'
                    //     ],
                    //     price: 0
                    // }
                ]
            }
        },
        methods: {
            deleteFeature(indexS, index){
                // delete this.subscription[indexS].features[index]
                this.subscription[indexS].features.splice(index, 1)
            },
            changePrice(){
                this.subscription[this.current_change_price].price = this.change_price_field
                this.closeModal();
            },
            openAddFeatureModal(indexS){
                this.open_add_feature_modal = true;
                this.current_add_feature = indexS;
            },
            openAddPriceModal(indexS){
                this.open_change_price_modal = true;
                this.current_change_price = indexS;
            },
            closeModal(){
                this.open_add_feature_modal = false;
                this.open_change_price_modal = false;
                this.current_add_feature = -1;
                this.current_change_price = 0;
                this.add_feature_field = '';
                this.change_price_field = 0;
            },
            addFeature(){
                this.subscription[this.current_add_feature].features.push(this.add_feature_field)
                this.closeModal()
            },
            saveChanges(){

                Api().post('/subscriptions', {
                    'subscriptions': this.subscription
                })

            },
            async fetchSubscriptions(){
                let response = await Api().get('/subscriptions')
                this.subscription = response.data.data
            }
        },
        mounted() {
            this.fetchSubscriptions()
        }
    }
</script>
