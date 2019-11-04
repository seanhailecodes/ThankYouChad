import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Services } from './components/Services'
import { NoMatch } from './components/NoMatch'

class App extends Component {
  render() {
  return (
   <React.Fragment>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/components/About" components={About} />
        <Route path="/componenets/Blog" component={Blog} />
        <Route path="/componenets/Contact" component={Contact} />
        <Route path="/components/Services" component={Services} />
        <Route path="/components/NoMatch" component={NoMatch} />
      </Switch>
     </Router>
   </React.Fragment>
    )
  }
}

export default App;
