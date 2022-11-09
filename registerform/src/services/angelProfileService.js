import axios from 'axios'
const ANGEL_GET_URL ="";


class getAngelService{

    getAngel(){
      const angel ={
          name: {
            first: 'Sherlock',
            last: 'Holmes',
          },
          address: '221B Baker Street, London, UK',
          Type:"Individual",
          email:"sherlockholmes@wire.uk",
          phone:"+44  7946 0999",
          pin:"NW1",
          contactPerson:'Dr. Watson',
          qualification:'Chemical Engineering',
          interest:'Criminal Cases',
          joined:'4 Nov 2022'
        };
        return (angel);
    }
}
export default new getAngelService()