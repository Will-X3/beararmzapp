import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/NestedNavigation.css";

const NestedNavigation = ({ currentPage }) => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  useEffect(() => {
    console.log("showSubcategories toggled to:", showSubcategories);
    console.log("Show subcategories after state update:", showSubcategories);
  }, [showSubcategories]);

  const handleMainCategoryClick = () => {
    setShowSubcategories((prevState) => {
      const nextState = !prevState;
      console.log("showSubcategories toggled to:", nextState);
      console.log("Show subcategories after state update:", nextState);
      return nextState;
    });
  };

  // const renderSubcategories = (category) => {
  //   return (
  //     currentPage === category &&
  //     showSubcategories && (
  //       <ul className="subcategories">
  //         {subcategories[category].map((subcategory, index) => (
  //           <li key={index}>
  //             <Link
  //               to={`/${category}/${subcategory
  //                 .toLowerCase()
  //                 .replace(/\s/g, "-")}`}
  //             >
  //               {subcategory}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     )
  //   );
  // };

  console.log("Current page:", currentPage);
  console.log("Show subcategories:", showSubcategories);

  const subcategories = {
    laws: ["Recent Laws", "Laws By State"],
    news: ["Spotlight News", "Campaigns", "Stories"],
    selfDefense: [
      "Directory",
      "Videos",
      "Survival Skills",
      "Demographics",
      "Non-Lethal",
      "Personal Defense",
      "Basic Defense",
    ],
    firearms: ["Training Videos", "Safety", "Maintenance", "History", "Ammo"],
    dictionary: [
      "Directory",
      "Legal Terms",
      "Self Defense",
      "Medical Terms",
      "Ammunition",
    ],
    emergency: ["Emergency Response", "Emergency Preparedness"],
  };

  return (
    <div className="nested-navigation">
      <ul>
        <li className={currentPage === "videos" ? "active" : ""}>
          <Link to="/trending-videos" onClick={handleMainCategoryClick}>
            Trending Videos
          </Link>
        </li>
        <li className={currentPage === "laws" ? "active" : ""}>
          <Link to="/laws-by-state" onClick={handleMainCategoryClick}>
            Laws
          </Link>
          {showSubcategories && currentPage === "laws" && (
            <ul className="subcategories">
              {subcategories.laws.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={`/laws-by-state/${subcategory
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li className={currentPage === "news" ? "active" : ""}>
          <Link to="/news" onClick={handleMainCategoryClick}>
            News
          </Link>
          {currentPage === "news" && showSubcategories && (
            <ul className="subcategories">
              {subcategories.news.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={`/news/${subcategory
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={currentPage === "self-defense" ? "active" : ""}>
          <Link to="/self-defense" onClick={handleMainCategoryClick}>
            Self-defense
          </Link>
          {currentPage === "self-defense" && showSubcategories && (
            <ul className="subcategories">
              {subcategories.selfDefense.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={`/self-defense/${subcategory
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={currentPage === "firearms" ? "active" : ""}>
          <Link to="/firearms" onClick={handleMainCategoryClick}>
            Firearms
          </Link>
          {currentPage === "firearms" && showSubcategories && (
            <ul className="subcategories">
              {subcategories.firearms.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={`/firearms/${subcategory
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={currentPage === "dictionary" ? "active" : ""}>
          <Link to="/dictionary" onClick={handleMainCategoryClick}>
            Dictionary
          </Link>
          {currentPage === "dictionary" && showSubcategories && (
            <ul className="subcategories">
              {subcategories.dictionary.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={`/dictionary/${subcategory
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li className={currentPage === "emergency" ? "active" : ""}>
          <Link to="/emergency" onClick={handleMainCategoryClick}>
            Emergency
          </Link>
          {currentPage === "emergency" && showSubcategories && (
            <ul className="subcategories">
              {subcategories.emergency.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={`/emergency/${subcategory
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
      {/*Navigation links for subcategories */}
      {currentPage === "news" && showSubcategories && (
        <>
          <Link to="/news/stories">Stories</Link>
          <Link to="/news/spotlight-news">Spotlight News</Link>
        </>
      )}
    </div>
  );
};

NestedNavigation.propTypes = {
  currentPage: PropTypes.oneOf([
    "videos",
    "laws",
    "news",
    "self-defense",
    "firearms",
    "dictionary",
    "emergency",
    "campaigns",
    "stories",
    "spotlight-news",
  ]).isRequired,
};

export default NestedNavigation;
