import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TrendingVideosPage from "./pages/TrendingVideosPage";
import TrendingArticlesPage from "./pages/TrendingArticlesPage";
import LawsByState from "./pages/laws/LawsByState";
import SpotlightNews from "../src/pages/news/SpotlightNews";
import CampaignsPage from "../src/pages/news/CampaignsPage";
import StoriesPage from "../src/pages/news/StoriesPage";

const App = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("videos");

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/laws")) {
      setCurrentPage("laws");
    } else if (path.startsWith("/news")) {
      setCurrentPage("news");
    } else if (path.startsWith("/self-defense")) {
      setCurrentPage("self-defense");
    } else if (path.startsWith("/firearms")) {
      setCurrentPage("firearms");
    } else if (path.startsWith("/dictionary")) {
      setCurrentPage("dictionary");
    } else if (path.startsWith("/emergency")) {
      setCurrentPage("emergency");
    } else {
      setCurrentPage("videos");
    }
  }, [location]);

  const handlePageToggle = () => {
    setCurrentPage((prevPage) => (prevPage === "videos" ? "articles" : "videos"));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/laws-by-state" component={LawsByState} />
          <Route exact path="/news" component={SpotlightNews} />
          <Route
            exact
            path="/news/spotlight-news"
            render={(props) => <SpotlightNews {...props} currentPage={currentPage} />}
          />
          <Route
            exact
            path="/news/campaigns"
            render={(props) => <CampaignsPage {...props} currentPage={currentPage} />}
          />
          <Route
            exact
            path="/news/stories"
            render={(props) => <StoriesPage {...props} currentPage={currentPage} />}
          />
          <Route path="/">
            {currentPage === "videos" ? (
              <TrendingVideosPage currentPage={currentPage} onPageToggle={handlePageToggle} />
            ) : (
              <TrendingArticlesPage currentPage={currentPage} onPageToggle={handlePageToggle} />
            )}
          </Route>
        </Switch>
        <footer>{/* Footer contents */}</footer>
      </div>
    </Router>
  );
};

export default App;
