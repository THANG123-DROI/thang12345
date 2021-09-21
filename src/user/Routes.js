import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Signin from './Signin';
import Signup from './Signup'

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route path="/" exact component ={HomePage}/>
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </Router>
    )
} 
export default Routes;