import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/angelprofile';
import ChangePass from './components/changepassword'

function App() {
  return (
    <div className="App">
      <Header/>
      <RegistrationForm/> 
      {/* <Login/> */}
      {/* <ChangePass/> */}
      {/* <Signup/> */}
      <Profile/>
    </div>
  );
}

export default App;


