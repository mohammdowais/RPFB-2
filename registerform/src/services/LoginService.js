import axios from 'axios'

const ANGEL_POST_URL ="http://localhost:8081/api/loginhelper/save"


class LoginService{
    postRequestData(angel){
        console.log(angel)
        return axios({
            method:'post',
            url:ANGEL_POST_URL,
            data:{
                email:angel.email,
                pasword:angel.password
            }

            axios.post(url, {
      email: angel.email,
      password: angel.password
    })
    .then((response) => {
      console.log(response);
    });
        
    }
}
export default new LoginService()