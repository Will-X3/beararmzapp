import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "../styles/ToggleButton.css";

const ToggleButton = ({ currentPage, onPageToggle }) => {
  const history = useHistory();

  const handleClick = () => {
    console.log("Toggle button clicked");
    const targetPage = currentPage === "videos" ? "articles" : "videos";
    onPageToggle(targetPage);
    const targetUrl =
      targetPage === "videos"
        ? "/trending/trending-videos"
        : "/trending/trending-articles";
    history.push(targetUrl);
  };

  const buttonClass =
    currentPage === "videos"
      ? "toggle-button videos"
      : "toggle-button articles";
  const indicatorPosition = currentPage === "videos" ? "0" : "50%";

  return (
    <div className={buttonClass} onClick={handleClick}>
      {currentPage === "videos" ? "Videos" : "Articles"}
      <div className="indicator" style={{ left: indicatorPosition }} />
    </div>
  );
};

ToggleButton.propTypes = {
  currentPage: PropTypes.oneOf(["videos", "articles"]).isRequired,
  onPageToggle: PropTypes.func.isRequired,
};

export default ToggleButton;
