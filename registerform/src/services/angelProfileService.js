// import axios from 'axios'
// const ANGEL_GET_URL ="";

import { useState, useEffect } from 'react';
const App =()=>{
  const [posts, setPosts] = useState([]);
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
        // return (angel);
    
      // return axios.get('http://localhost:8080/api/angelUser/getAngelUserById/3');
      // console.log(res);
      // return res;
      
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
           .then((res) => res.json())
           .then((data) => {
              console.log(data);
              setPosts(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
  
     return (
        // ... consume here
        angel
     );
  };