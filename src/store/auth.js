import Api from "../services/Api";


export const auth = {
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, access_token){
            this.state.token = access_token;
        },
        setUser(state, user){
            this.state.user = user;
        }
    },
    actions: {
        async login({commit}, credential) {

            try{
                let response = await Api().post('/auth/login', credential)

                commit('setToken', response.data.access_token);
                commit('setUser', response.data.user);

                localStorage.setItem('Token', response.data.access_token)
                return response.status

            }catch(e){
                localStorage.removeItem('Token')
                return e.response.status
            }
        },
        async logout({commit}){
            let response;
            try{
                response = await Api().get('auth/logout')
            }finally {
                localStorage.removeItem('Token')
                commit('setToken', null);
                commit('setUser', null);
            }

            return response
        }
    }
}
