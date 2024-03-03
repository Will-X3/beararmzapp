import React from "react";
import "../../styles/StoriesPage.css";
import NestedNavigation from "../../components/NestedNavigation"; 

const StoriesPage = ({ currentPage }) => { // Receive currentPage prop
  return (
    <>
      <NestedNavigation currentPage={currentPage} /> {/* Pass currentPage prop */}
      <div className="stories-page container">
        <h1 className="mt-5 mb-4">Stories</h1>

        <div className="story">
          <h2>Story Title 1</h2>
          <p>Description of Story 1 goes here...</p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>

        <div className="story">
          <h2>Story Title 2</h2>
          <p>Description of Story 2 goes here...</p>
          <a href="#" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default StoriesPage;
