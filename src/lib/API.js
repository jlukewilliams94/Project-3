// import axios from 'axios';

export default {
    Users:{
        login: function (email, password){
           // return axios.post('/api/users/login', {email, password})
           if(password === 'test'){
               return {email, password}
           }
           return "504"
        }
    }
}