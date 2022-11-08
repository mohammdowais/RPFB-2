import axios from 'axios'
const ANGEL_POST_URL ="";

class LoginService{
    postRequestData(angel){
        console.log(angel)
        return axios({
            method:'post',
            url:ANGEL_POST_URL,
            data:{
                email:angel.email,
                password:angel.password
            }

        })
    }
}
export default new LoginService()