 
import Header from '../src/components/Header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login/Login';
import Notfound from './components/Notfound/Notfound';
import AuthProvider from './context/AuthProvider';
import AddEvents from './components/AddEvents/AddEvents';
import Order from './components/Order/Order';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Services from './components/Home/Services/Services';
import ManageAll from './components/ManageAll/ManageAll';
import MyOrders from './components/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
     
 <AuthProvider>
 <Router>
   
     <Header></Header>

       <Switch>

         <Route exact path="/">
         <Home></Home>
         </Route>

         <Route path="/about">
         <About></About>
         </Route>

         <Route path="/contact">
         <Contact></Contact>
         </Route>

         <PrivateRoute path="/placeorder/:id">
             <Order></Order>
          </PrivateRoute>

          <PrivateRoute path="/login/:orderId">
            <Order></Order>
          </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>

        <PrivateRoute path="/manageall">
          <ManageAll></ManageAll>
        </PrivateRoute>

        <PrivateRoute path="/myOrder">
          <MyOrders></MyOrders>
        </PrivateRoute>
       
        <PrivateRoute path="/addEvents">
          <AddEvents></AddEvents>
        </PrivateRoute>

         <Route exact path="*">
             <Notfound></Notfound>
          </Route>

       </Switch>

       <Footer></Footer>
     </Router>
 </AuthProvider>
    </div>
  );
}

export default App;
