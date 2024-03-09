import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NestedNavigation.css";

const NestedNavigation = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  useEffect(() => {
    console.log("showSubcategories toggled to:", showSubcategories);
  }, [showSubcategories]);

  // Function to handle main category click
  const handleMainCategoryClick = (category) => {
    setShowSubcategories((prevState) => {
      // Create a new state object with all categories hidden
      const newState = Object.fromEntries(
        Object.keys(prevState).map((key) => [key, false])
      );
      // Toggle the visibility of the clicked category
      newState[category] = !prevState[category];
      return newState;
    });
    // Update the active category state
    setActiveCategory(category);
    // Reset active subcategory
    setActiveSubcategory(null);
  };

  // Function to handle subcategory click
  const handleSubcategoryClick = (category, subcategory) => {
    // Update the active category and subcategory states
    setActiveCategory(category);
    setActiveSubcategory(subcategory);
  };

  const subcategories = {
    trending: ["Trending Videos", "Trending Articles"],
    laws: ["Legal Updates", "Laws By State"],
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
  // Render subcategories based on the visibility state
  const renderSubcategories = (category) => {
    return (
      <ul className="subcategories">
        {subcategories[category].map((subcategory, index) => (
          <li
            key={index}
            className={activeSubcategory === subcategory ? "active" : ""}
          >
            <Link
              to={`/${category}/${subcategory
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              onClick={() => handleSubcategoryClick(subcategory)}
            >
              {subcategory}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const preventDefault = (e) => {
    if (e.target.getAttribute("to") !== "/trending") {
      e.preventDefault();
    }
  };

  return (
    <div className="nested-navigation">
      <ul>
        <li className={activeCategory === "videos" ? "active" : ""}>
          <Link
            to="/trending"
            onClick={(e) => {
              preventDefault(e);
              handleMainCategoryClick("trending");
            }}
          >
            What's Trending
          </Link>
          {showSubcategories.trending && renderSubcategories("trending")}
        </li>
        <li className={activeCategory === "laws" ? "active" : ""}>
          <Link
            to="/laws"
            onClick={(e) => {
              preventDefault(e);
              handleMainCategoryClick("laws");
            }}
          >
            Laws
          </Link>
          {showSubcategories.laws && renderSubcategories("laws")}
        </li>
        <li className={activeCategory === "news" ? "active" : ""}>
          <Link
            to="/news"
            onClick={(e) => {
              preventDefault(e);
              handleMainCategoryClick("news");
            }}
          >
            News
          </Link>
          {showSubcategories.news && (
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
        <li className={activeCategory === "selfDefense" ? "active" : ""}>
          <Link
            to="/self-defense"
            onClick={(e) => {
              preventDefault(e);
              handleMainCategoryClick("selfDefense");
            }}
          >
            Self-defense
          </Link>
          {showSubcategories.selfDefense && (
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
        <li className={activeCategory === "firearms" ? "active" : ""}>
          <Link
            to="/firearms"
            onClick={(e) => {
              preventDefault(e);
              handleMainCategoryClick("firearms");
            }}
          >
            Firearms
          </Link>
          {showSubcategories.firearms && (
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
        <li className={activeCategory === "dictionary" ? "active" : ""}>
          <Link
            to="/dictionary"
            onClick={(e) => {
              preventDefault(e);
              handleMainCategoryClick("dictionary");
            }}
          >
            Dictionary
          </Link>
          {showSubcategories.dictionary && (
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
        <li className={activeCategory === "emergency" ? "active" : ""}>
          <Link
            to="/emergency"
            onClick={(e) => {
              preventDefault(e);
              handleMainCategoryClick("emergency");
            }}
          >
            Emergency
          </Link>
          {showSubcategories.emergency && (
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
        {/* Repeat for other categories */}
      </ul>
    </div>
  );
};

export default NestedNavigation;
