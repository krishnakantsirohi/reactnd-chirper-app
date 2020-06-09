import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {handleInitialData} from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweets from './NewTweets'
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import Route from "react-router-dom/es/Route";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <Router>
            <Fragment>
                <LoadingBar />
                <div className='container'>
                    <Nav/>
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/tweet/:id' component={TweetPage} />
                            <Route path='/new' component={NewTweets} />
                        </div>}
                </div>
            </Fragment>
        </Router>

    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)