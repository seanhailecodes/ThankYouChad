import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Services } from './Services'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Layout } from './Layout'
import { NavigationBar } from './NavigationBar'
import { Jumbotron } from './Jumbotron'

class App extends Component {
  render() {
  return (
    <React.Fragment>
      <NavigationBar />
        <Jumbotron />
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Services" component={Services} />
                <Route path="/Contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>
     </React.Fragment>
    )
  }
}

export default App;
