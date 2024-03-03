import React from "react";
import "../../styles/SpotlightNews.css";
import NestedNavigation from "../../components/NestedNavigation";
import PropTypes from 'prop-types';


const SpotlightNews = ({ currentPage }) => { // Receive currentPage prop
  return (
    <>
      <NestedNavigation currentPage={currentPage} />
      <div className="spotlight-news container">
        <h1 className="mt-5 mb-4">Spotlight News</h1>
        <div className="card">
          <img
            src="https://via.placeholder.com/600x300"
            className="card-img-top"
            alt="Spotlight News"
          />
          <div className="card-body">
            <h5 className="card-title">Spotlight News Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              nisi sed justo rutrum cursus. Mauris lacinia ex vitae semper
              vulputate. In hac habitasse platea dictumst. Fusce ullamcorper est
              sit amet orci fermentum, eu gravida lectus convallis. Nulla
              facilisi. Quisque ullamcorper velit sed magna tincidunt, a euismod
              sem viverra. Pellentesque sed varius elit, eget mollis arcu.
              Integer dapibus, dolor id ultrices convallis, purus leo efficitur
              odio, in scelerisque turpis libero sit amet tellus. Integer eu ex
              ultricies, consectetur arcu et, fermentum justo. Vestibulum
              volutpat euismod justo. Mauris convallis odio at magna vestibulum
              fermentum. Duis fermentum faucibus ipsum, a interdum metus
              ultricies ac.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

SpotlightNews.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default SpotlightNews;
