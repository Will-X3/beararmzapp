import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NestedNavigation.css";

const NestedNavigation = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);

  useEffect(() => {
    console.log("showSubcategories toggled to:", showSubcategories);
  }, [showSubcategories]);

  const handleMainCategoryClick = (category) => {
    setShowSubcategories((prevState) => {
      // Create a new state object with all categories hidden
      const newState = Object.fromEntries(
        Object.keys(prevState).map((key) => [key, false])
      );
      // Set the visibility of the clicked category to true
      newState[category] = true;
      return newState;
    });
  };
  

  const subcategories = {
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

  return (
    <div className="nested-navigation">
      <ul>
        <li className="active">
          <Link to="/trending-videos" onClick={handleMainCategoryClick}>
            Trending Videos
          </Link>
        </li>
        <li className="active">
          <Link
            to="/laws"
            onClick={() => handleMainCategoryClick("laws")}
          >
            Laws
          </Link>
          {showSubcategories.laws && (
            <ul className="subcategories">
              {subcategories.laws.map((subcategory, index) => (
                <li key={index}>
                  <Link
                    to={`/laws/${subcategory
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
        <li className="active">
          <Link
            to="/news/campaigns"
            onClick={() => handleMainCategoryClick("news")}
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
        <li className="active">
          <Link
            to="/self-defense"
            onClick={() => handleMainCategoryClick("selfDefense")}
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
        <li className="active">
          <Link
            to="/firearms"
            onClick={() => handleMainCategoryClick("firearms")}
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
        <li className="active">
          <Link
            to="/dictionary"
            onClick={() => handleMainCategoryClick("dictionary")}
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
        <li className="active">
          <Link
            to="/emergency"
            onClick={() => handleMainCategoryClick("emergency")}
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
