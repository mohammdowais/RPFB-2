import axios from 'axios'
const url ="http://localhost:8080/api/loginhelper/login"


class LoginService{
    postRequestData(angel){
        console.log(angel)
            // return axios({
            //     method:'post',
            //     url:url,
            //     data:{
            //         email:angel.email,
            //         pasword:angel.password
            //     }

            // })

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