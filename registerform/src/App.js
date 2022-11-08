import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/angelprofile';
import ChangePass from './components/changepassword';
import Temp from './components/temp'
import UpdateProfile from './components/updateprofile';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <RegistrationForm/>  */}
      {/* <Temp/> */}
      {/* <Signup/> */}
      <Login/>
      {/* <ChangePass/> */}
      {/* <Profile/> */}
      {/* <UpdateProfile/> */}
    </div>
  );
}

export default App;


