import React from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";
import SignUp from '../components/signUp/index'
import Login from '../components/login'
import DashBoard from '../components/dashboard'
import Sell from '../components/sell'
import Detail from '../components/detail'
import Profile from '../components/profile'

const RouterComp = ({ user }) => {


    function authChecker(user, component, path = "/") {

        return user ? component : <Redirect to={path} />

    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact>
                        {authChecker(!user, <SignUp />, '/dashboard')}
                    </Route>
                    <Route path="/login" exact>
                        {authChecker(!user, <Login />, '/dashboard')}
                    </Route>
                    <Route path="/dashboard" exact>
                        {authChecker(user, <DashBoard user={user} />)}
                    </Route>
                    <Route path="/dashboard/sell" exact>
                        {authChecker(user, <Sell user={user} />)}
                    </Route>
                    <Route path="/dashboard/details/:adId" exact>
                        {authChecker(user, <Detail user={user} />)}
                    </Route>
                    <Route path="/dashboard/profile" exact>
                        {authChecker(user, <Profile user={user} />)}
                    </Route>



                    {/* <Route path="/" exact>

                        <SignUp />
                    </Route>
                    <Route path="/login" exact>

                        <Login />
                    </Route>
                    <Route path="/dashboard" exact>

                        <DashBoard />
                    </Route>
                    <Route path="/dashboard/sell" exact>

                        <Sell />
                    </Route>
                    <Route path="/dashboard/details/:adId" exact>

                        <Detail />
                    </Route>
                    <Route path="/dashboard/profile" exact>

                        <Profile />
                    </Route> */}

                </Switch>

            </div>

        </Router>

    )
}

export default RouterComp
