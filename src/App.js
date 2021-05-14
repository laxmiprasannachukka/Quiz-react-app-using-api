import "bootstrap/dist/css/bootstrap.min.css"
import Quizcard from './quizcard';
import Createquiz from './createquiz';
import Addquestions from './addquestions';
import Test from './test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App(){
  return (
    <>
    <Router>
    <div class="container">
    <div class="row">
    <div class="col-12 text-center">
<strong class="product-tagline">Test your skill</strong>
<h1>MicroARC</h1>
<p>Standardized Skill Assessment Test to Stand out among Peers</p>
</div>
</div>
<Switch>
<Route path="/createquiz" exact={true}>
<Createquiz></Createquiz>
</Route>
<Route path="/" exact={true}>
<Quizcard></Quizcard>
</Route>
<Route path="/addQuestion/:id" exact={true} component={Addquestions}/>
<Route path="/test/:id" exact={true} component={Test} />
</Switch>
</div>
</Router>
</>
  )
}

export default App;