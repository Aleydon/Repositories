import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Main from './components/Main';
import Repositories from './components/Repositories';




function App() {
  return(
   <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/repositories/:repositories"  component={Repositories} />
      </Switch>
   </BrowserRouter>
  );


}
export default App;