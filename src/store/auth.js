import Api from "../services/Api";


export const auth = {
    state: {
        token: null,
        user: null
    },
    getters: {
        name: state => state.user.name
    },
    mutations: {
        setToken(state, access_token) {
            state.token = access_token;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        async login({commit}, credential) {

            try {
                let response = await Api().post('/auth/login', credential)

                if(response.data.user.role !== 'admin')
                {
                    return 401;
                }

                commit('setToken', response.data.access_token);
                commit('setUser', response.data.user);

                localStorage.setItem('expiry', new Date().getTime().toString())
                localStorage.setItem('Token', response.data.access_token)
                localStorage.setItem('User', JSON.stringify(response.data.user));
                return response.status

            } catch (e) {
                localStorage.removeItem('Token')
                localStorage.removeItem('User')
                return e.response.status
            }
        },
        async logout({commit}) {
            let response;
            try {
                if(localStorage.getItem('Token') !== null){
                    response = await Api().get('auth/logout')
                }
            } finally {
                localStorage.removeItem('expiry')
                localStorage.removeItem('Token')
                commit('setToken', null);
                commit('setUser', null);
            }

            return response
        },
    }
}
