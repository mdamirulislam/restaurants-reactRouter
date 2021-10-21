import React from 'react';
import Restaurant from '../Restaurant/Restaurant';
import About from '../About/About' ;
import Contract from '../Contract/Contrat';
import MealDetail from '../MealDetail/MealDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from '../NotFound/NotFound';

const Home = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/home'>
                        <Restaurant/>
                    </Route>
                    <Route path='/about'>
                     <About/>
                    </Route>
                    <Route path='/meal/:id'>
                      <MealDetail/>
                    </Route>
                    <Route path='/contract'>
                       <Contract/>
                    </Route>
                    <Route exact path='/'>
                        <Restaurant/>
                    </Route>
                    <Route  path='*'>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;