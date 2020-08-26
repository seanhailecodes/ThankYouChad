import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
// import { Blog } from '/.Blog'
import { Contact } from './Contact'
import { Services } from './Services'
import { NoMatch } from './NoMatch'
import { Layout } from './Layout'
import { NavigationBar } from './NavigationBar'
import { Jumbotron } from './Jumbotron'
// import styled from 'style'

// const Styles = styled.view`
//     .blueBack {
//         background-color: #0000ff;
//     }
// `

class App extends Component {
  render() {
  return (
    <React.Fragment>
     <NavigationBar />
     <Jumbotron />
       {/* <Styles> */}
     <Layout>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        {/* <Route path="/Blog" component={Blog} /> */}
        <Route path="/Contact" component={Contact} />
        <Route path="/Services" component={Services} />
        <Route component={NoMatch} />
      </Switch>
     </Router>
     </Layout>
     {/* </Styles> */}
   </React.Fragment>
    )
  }
}

export default App;
