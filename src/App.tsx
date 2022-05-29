import React from 'react';
import styles from "./App.module.css";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import { Home } from "./pages";


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" render={() => <div>登录页面</div>} />
          <Route render={() => <h1>404 not found</h1>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
