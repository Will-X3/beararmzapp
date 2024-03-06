import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TrendingVideosPage from "./pages/TrendingVideosPage";
import TrendingArticlesPage from "./pages/TrendingArticlesPage";
import LawsByState from "./pages/laws/LawsByState";
import SpotlightNews from "../src/pages/news/SpotlightNews";
import CampaignsPage from "../src/pages/news/CampaignsPage";
import StoriesPage from "../src/pages/news/StoriesPage";
import LegalUpdatesPage from "../src/pages/laws/LegalUpdates";

const App = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("videos");

  useEffect(() => {
    const path = location.pathname;
    setCurrentPage(getPageFromPath(path));
  }, [location]);

  const handlePageToggle = () => {
    setCurrentPage((prevPage) => (prevPage === "videos" ? "articles" : "videos"));
  };

  const getPageFromPath = (path) => {
    if (path.startsWith("/laws")) return "laws";
    if (path.startsWith("/campaigns")) return "campaigns";
    if (path.startsWith("/self-defense")) return "self-defense";
    if (path.startsWith("/firearms")) return "firearms";
    if (path.startsWith("/dictionary")) return "dictionary";
    if (path.startsWith("/emergency")) return "emergency";
    return "videos";
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/laws-by-state" component={LawsByState} />
          <Route exact path="/laws-by-state/laws-by-state" component={LawsByState} />
          <Route exact path="/laws-by-state/legal-updates" component={LegalUpdatesPage} />
          <Route exact path="/news/campaigns" component={CampaignsPage} />
          <Route exact path="/news/stories" component={StoriesPage} />
          <Route exact path="/news/spotlight-news" component={SpotlightNews} />

          {/* TrendingVideosPage */}
          <Route exact path="/trending-videos">
            <TrendingVideosPage currentPage={currentPage} onPageToggle={handlePageToggle} />
          </Route>

          {/* TrendingArticlesPage */}
          <Route exact path="/trending-articles">
            <TrendingArticlesPage currentPage={currentPage} onPageToggle={handlePageToggle} />
          </Route>

          {/* Default Route */}
          <Route path="/">
            <TrendingVideosPage currentPage={currentPage} onPageToggle={handlePageToggle} />
          </Route>
        </Switch>
        {/* Footer contents */}
        <footer></footer>
      </div>
    </Router>
  );
};

export default App;
