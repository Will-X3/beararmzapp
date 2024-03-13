import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
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
import SelfDefenseVideos from "./pages/self-defense/SelfDefenseVideos";
import SurvivalSkillsPage from "./pages/self-defense/SurvivalSkillsPage";
import DemographicsPage from "./pages/self-defense/DemographicsPage";
import NonLethalPage from "./pages/self-defense/NonLethalPage";
import BasicDefensePage from "./pages/self-defense/BasicDefensePage";
import PersonalDefensePage from "./pages/self-defense/PersonalDefensePage";
import DictionaryPage from "./pages/dictionary/DictionaryPage";
import CreateUserForm from "./forms/CreateUserForm";
import LoginForm from "./forms/LoginForm";
import CommentButton from "./components/CommentButton";

const App = () => {
  const [currentPage, setCurrentPage] = useState("videos");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setCurrentPage(getPageFromPath(window.location.pathname));
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    history.push('/');
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

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
          <Route exact path="/login">
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )}
          </Route>
          <Route exact path="/">
            {isLoggedIn ? <TrendingVideosPage /> : <Redirect to="/login" />}
          </Route>

          <Route exact path="/user" component={CreateUserForm} />

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
          <Route
            exact
            path="/self-defense/training-videos"
            component={SelfDefenseVideos}
          />
          <Route
            exact
            path="/self-defense/survival-skills"
            component={SurvivalSkillsPage}
          />
          <Route
            exact
            path="/self-defense/demographics"
            component={DemographicsPage}
          />
          <Route
            exact
            path="/self-defense/non-lethal"
            component={NonLethalPage}
          />
          <Route
            exact
            path="/self-defense/basic-defense"
            component={BasicDefensePage}
          />
          <Route
            exact
            path="/self-defense/personal-defense"
            component={PersonalDefensePage}
          />

          <Route exact path="/dictionary" component={DictionaryPage} />

          {/* Path for article and video details pages */}
          <Route path="/videos/:videoUrl" component={VideoDetails} />
          <Route path="/article/:articleId" component={ArticleDetails} />
          <Route
            exact
            path="/"
            component={() => (
              <TrendingVideosPage
                currentPage={currentPage}
                onPageToggle={handlePageToggle}
              />
            )}
          />
          <Route exact path="/slider-view" component={SliderView} />
          <Route exact path="/comment" component={CommentButton} />
        </Switch>

        <footer></footer>
      </div>
    </Router>
  );
};

export default App;
