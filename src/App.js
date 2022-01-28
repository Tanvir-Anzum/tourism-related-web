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
import Footer from "./components/Footer/Footer";
import Placed from "./components/Placed/Placed";
import Register from "./components/Register/Register";
import DashboardHome from "./components/Dashboard/DashboardHome/DashboardHome";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";




function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          
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
            <Route exact path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute exact path='/myEvents'>
              <MyEvents></MyEvents>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
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
            <PrivateRoute path='/singleItem/:itemId'>
              <SingleItem></SingleItem>
            </PrivateRoute>
            <PrivateRoute exact path='/adminDashboard'>
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
