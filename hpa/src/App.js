import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Services } from './components/Services'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Jumbotron } from './components/Jumbotron'
import styled from 'styled-components'

const Styles = styled.div`
    .blueBack {
        background-color: #0000ff;
    }
`

class App extends Component {
  render() {
  return (
     <Styles>
   <React.Fragment>
     <NavigationBar />
     <Jumbotron />
     <Layout>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Services" component={Services} />
        <Route component={NoMatch} />
      </Switch>
     </Router>
     </Layout>
   </React.Fragment>
     </Styles>
    )
  }
}

export default App;
