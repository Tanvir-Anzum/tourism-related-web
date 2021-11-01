import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddEvents from "./components/AddEvents/AddEvents";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import Events from "./components/Events/Events";
import MyEvents from "./components/MyEvents/MyEvents";
import SingleItem from "./components/SingleItem/SingleItem";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import PlacedServices from "./components/PlacedServices/PlacedServices";
import Services from "./components/Services/Services";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute exact path='/myEvents'>
              <MyEvents></MyEvents>
            </PrivateRoute>
            <PrivateRoute exact path='/orders'>
              <Orders></Orders>
            </PrivateRoute>
            <Route exact path='/services'>
             <Services></Services>
            </Route>
            <PrivateRoute exact path='/addEvents'>
              <AddEvents></AddEvents>
            </PrivateRoute>
            <Route path='/singleItem/:itemId'>
              <SingleItem></SingleItem>
            </Route>
            <Route exact path='/adminDashboard'>
              <AdminDashboard></AdminDashboard>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
