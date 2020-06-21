import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../views/hoc/Layout/Layout';
import routes from './routes';
import * as pages from '../views/';

function makeRoute(route, { userRole, isAuthenticated }) {
    let { 
        roles = [], 
        exact, 
        path, 
        auth = true, 
        component 
    } = route;
    let isValidRoute = roles.includes(userRole) || !roles.length;

    if (!isValidRoute) return false;

    if (!isAuthenticated && !auth)
        return <Route 
                    key={path} 
                    exact={exact} 
                    path={path} 
                    component={pages[component]}
                />;

    if (isAuthenticated && auth) {
        return <Route 
                    key={path} 
                    exact={exact} 
                    path={path} 
                    component={pages[component]} 
                />;
    }
}

const mapStateToProps = state => {
    return {
        userRole: state.userDetails.role,
        isAuthenticated: state.auth.isAuthenticated
    }
};

class RoutesList extends Component {

    componentWillReceiveProps(props) {
        console.log(props);
    }

    render() {
        const validRoutes = routes
                            .map(route => makeRoute(route, this.props))
                            .filter(Boolean);

        if (!this.props.isAuthenticated) {
            return <BrowserRouter>
                        <Switch>
                            {validRoutes}
                        </Switch>
                   </BrowserRouter>
        }

        return <Suspense fallback={<p>Loading...</p>}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            {validRoutes}
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </Suspense>;
    }
}

export default connect(mapStateToProps)(RoutesList);
