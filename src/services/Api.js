import  axios  from 'axios'
import  config  from './../config.json'

export default () => {
    return axios.create({
        baseURL: config.server.api_url,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('Token')
        }
    })
}
