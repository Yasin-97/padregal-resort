import React from "react";
import "./css/main.min.css"

// context Proviuder
import { RoomProvider } from "./context";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// page components
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
     <RoomProvider>
      
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/rooms/:slug" component={SingleRoom} />
            <Route component={Error} />
          </Switch>
        </Router>
     </RoomProvider>

    </>
  );
}

export default App;
