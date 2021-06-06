import Api from "../services/Api";

export const healthHub = {
    state: {
        health_hub_links: {
            data: {
                body_health: [],
                brain_health: [],
                heart_health: [],
                insure_your_health: [],
                wealth_tips: [],
                mindfulness: []
            }
        }
    },
    mutations: {
        setLinks(state, links) {
            state.health_hub_links = links;
        },
        async addHealthHubLink(state, link) {
            let response = await Api().post('/health-hub', link)
            if (response.status === 200) {
                try{
                    if(state.health_hub_links.data[link.category] !== undefined){
                        state.health_hub_links.data[link.category].push(link);
                    }else{
                        state.health_hub_links.data[link.category] = [link];
                    }
                }catch (e) {
                    console.log(e)
                }
            } else {
                console.log('Error in addHealthHubLink | health_hub.js | store.index.js')
            }
        },
        async updateHealthHubLink(state, link) {
            let response = await Api().post('/health-hub/'+link.id, link)
            if (response.status === 200) {
                    location.reload();
            } else {
                console.log('Error in updateHealthHubLink | health_hub.js | store.index.js')
            }
        },
        async removeHealthHubLink(state, id) {
            let response = await Api().delete(`/health-hub/${id}`)
            if (response.status === 200) {
                let r = await Api().get('/health-hub')
                state.health_hub_links = r.data;
            }
        }
    },
    actions: {
        async getHealthHubLinks({commit}) {
            let response = await Api().get('/health-hub')
            commit('setLinks', response.data)
        },
    }
}
