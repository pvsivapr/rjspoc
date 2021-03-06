import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "../CustomControls/Header_Body/Header";
import AboutPage from "../Views/About/AboutPage";
import DisplayProfilePage from "../Views/ResumeModule/DisplayProfile/DisplayProfile";
import IntroPage from "./../Views/IntroPage/IntroPage";

const Route_Navigation = (props) => {
    return (
      <div>
        <Routes>
          {/* If the current URL is /about, this route is rendered
              while the rest are ignored */}
          {/* <Route path="/about">
            <About />
          </Route> */}
  
          {/* Note how these two routes are ordered. The more specific
              path="/contact/:id" comes before path="/contact" so that
              route will render when viewing an individual contact */}
          {/* <Route path="/contact/:id">
            <Contact />
          </Route>
          <Route path="/contact">
            <AllContacts />
          </Route> */}
  
          {/* If none of the previous routes render anything,
              this route acts as a fallback.
  
              Important: A route with path="/" will *always* match
              the URL because all URLs begin with a /. So that's
              why we put this one last of all */}
          {/* <Route path="/">
            <Home />
          </Route> */}
          {/* <Route exact path="/" element={<IntroPage />} /> */}
          <Route exact path="/" component={IntroPage} />
        </Routes>
      </div>
    );
  }

  const RouteNavigation = (props) => {
    return (
      <div className="mainHolder">
        
      <Router>
      {/* <Header /> */}
        <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<DisplayProfilePage />} />
      </Routes>
      </Router>
      </div>
    );
  }

  export default RouteNavigation;