import Navbar from './Navbar';
import Home from './Home';
import Check from './Check';
import Cart from './Cart';
import ItemDetails from './ItemDetail';
import Done from './Done';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className = "content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
            <Route path='/checkout'>
              <Check/>
            </Route>
            <Route path='/items/:id'>
              <ItemDetails/>
            </Route>
            <Route path='/success'>
              <Done/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
