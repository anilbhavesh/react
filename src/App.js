import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import User from './components/User';
import Student from './components/Student';
import FavoriteColor from './components/Hook';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      {/* <MyComponent /> */}
      {/* <User /> */}
      <Student name={"anil"} email="anil@gmail.com"/>
      <Student name={"bhavesh"} email="bhavesh@gmail.com"/>
      <Student name={"kavya"} email="kavya@gmail.com"/>

      {/* <FavoriteColor /> */}

      {/* <Timer /> */}
    </div>
  );
}

export default App;
