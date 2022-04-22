import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Pages
import { Home } from './pages/Home'

export const App = () => {

  return(

    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>

  )

}