import axios from 'axios'
const ANGEL_GET_URL ="";


class getAngelService{

    getAngel(){
      const angel ={
          firstName: 'Sherlock',
          lastName: 'holmes',
          profession:'Detective',
          address: '221B Baker Street, London, UK',
          Type:"Individual",
          email:"sherlockholmes@wire.uk",
          phone:"+44  7946 0999",
          pin:"NW1",
          contactPerson:'Dr. Watson',
          qualification:'Chemical Engineering',
          interest:'Criminal Cases',
          joined:'4 Nov 2022',
          userID: '123'
        };
        return (angel);
    }
    getData(){
      const res = axios.get(`http://localhost:8080/api/angelUser/getAllAngelUser`);
      console.log(res);
      return res;
    }
}
export default new getAngelService()