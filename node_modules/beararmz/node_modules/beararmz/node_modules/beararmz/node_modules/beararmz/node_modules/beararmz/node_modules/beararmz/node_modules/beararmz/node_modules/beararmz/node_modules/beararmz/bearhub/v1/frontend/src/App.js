import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import TrendingVideosPage from "./pages/TrendingVideosPage";
import TrainingVideosPage from "./pages/firearms/TrainingVideosPage";
import LawsByState from "./pages/laws/LawsByState";
import LegalUpdatesPage from "./pages/laws/LegalUpdates";
import CampaignsPage from "./pages/news/CampaignsPage";
import StoriesPage from "./pages/news/StoriesPage";
import SpotlightNews from "../src/pages/news/SpotlightNews";
import SliderView from "./components/SliderView";
import SafetyPage from "./pages/firearms/SafetyPage";
import MaintenancePage from "./pages/firearms/MaintenancePage";
import HistoryPage from "./pages/firearms/HistoryPage";
import AmmoPage from "./pages/firearms/AmmoPage";
import TrendingArticlesPage from "./pages/TrendingArticlesPage";
import EmergencyPreparedness from "./pages/emergency/PreparednessPage";
import EmergencyResponse from "./pages/emergency/ResponsePage";
import VideoDetails from "./components/VideoDetails";
import ArticleDetails from "./components/ArticleDetails";

const App = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("videos");

  useEffect(() => {
    setCurrentPage(getPageFromPath(location.pathname));
  }, [location]);

  const handlePageToggle = () => {
    setCurrentPage((prevPage) =>
      prevPage === "videos" ? "articles" : "videos"
    );
  };

  const getPageFromPath = (path) => {
    if (path.startsWith("/trending")) return "trending";
    if (path.startsWith("/laws")) return "laws";
    if (path.startsWith("/news")) return "news";
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
          <Route exact path="/laws" component={LawsByState} />
          <Route exact path="/laws/laws-by-state" component={LawsByState} />
          <Route
            exact
            path="/laws/legal-updates"
            component={LegalUpdatesPage}
          />
          <Route exact path="/news/campaigns" component={CampaignsPage} />
          <Route exact path="/news/stories" component={StoriesPage} />
          <Route exact path="/news/spotlight-news" component={SpotlightNews} />
          <Route
            exact
            path="/firearms/training-videos"
            component={TrainingVideosPage}
          />
          <Route exact path="/firearms/safety" component={SafetyPage} />
          <Route
            exact
            path="/firearms/maintenance"
            component={MaintenancePage}
          />
          <Route exact path="/firearms/history" component={HistoryPage} />
          <Route exact path="/firearms/ammo" component={AmmoPage} />
          <Route
            exact
            path="/emergency/emergency-preparedness"
            component={EmergencyPreparedness}
          />
          <Route
            exact
            path="/emergency/emergency-response"
            component={EmergencyResponse}
          />
          <Route
            exact
            path="/trending/trending-videos"
            component={() => (
              <TrendingVideosPage onPageToggle={handlePageToggle} />
            )}
          />
          <Route
            exact
            path="/trending/trending-articles"
            component={() => (
              <TrendingArticlesPage onPageToggle={handlePageToggle} />
            )}
          />
          <Route
            exact
            path="/trending-videos"
            component={() => (
              <TrendingVideosPage onPageToggle={handlePageToggle} />
            )}
          />
          <Route
            exact
            path="/trending-articles"
            component={() => (
              <TrendingArticlesPage onPageToggle={handlePageToggle} />
            )}
          />
          <Route path="/videos/:videoUrl" component={VideoDetails} />
          <Route path="/article/:articleId" component={ArticleDetails} />


          <Route path="/">
            <TrendingVideosPage
              currentPage={currentPage}
              onPageToggle={handlePageToggle}
            />
          </Route>
          <Route />
          <Route exact path="/slider-view" component={SliderView} />
        </Switch>

        <footer></footer>
      </div>
    </Router>
  );
};

export default App;
