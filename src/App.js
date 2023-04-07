import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { AddProducts } from './components/AddProducts'
import { ProductsContextProvider } from './global/ProductsContext';
import { Signup } from './components/Singup';
import { Login } from './components/Login';
import { auth, db } from './config/Config';
import { Cart } from './components/Cart';
import { CartContextProvider } from './global/CartContext';

export class App extends Component{

  state={
    user: null
  }
 
  componentDidMount() {

    // getting user info for navigation bar
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                this.setState({
                    user: snapshot.data().Name
                })
            })
        }
        else {
            this.setState({
                user: null
            })
        }
    })

}

  render(){
    return(
    <ProductsContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() => <Home user={this.state.user} />} />
            <Route path='/addproducts' component={AddProducts} />  
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />    
            <Route path='/cartproducts' component={()=> <Cart user={this.state.user}/>} />
          </Switch> 
        </BrowserRouter>
      </CartContextProvider>
    </ProductsContextProvider>
    )
  }
}

export default App