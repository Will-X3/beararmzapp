import React from 'react';
import NestedNavigation from '../../components/NestedNavigation';
import '../../styles/HistoryPage.css'; // Import CSS for styling

const HistoryPage = () => {
  return (
    <div className="history-page">
      <NestedNavigation currentPage="Firearms History" />
      <div className="history-content">
        <h1>Firearms History</h1>
        <div className="history-fact">
          <img src="/history_image1.jpg" alt="Historical Fact 1" />
          <div className="fact-description">
            <h2>The Invention of Gunpowder</h2>
            <p>
              The invention of gunpowder, also known as black powder, in ancient China during the 9th century AD revolutionized warfare and led to the development of firearms.
            </p>
          </div>
        </div>
        <div className="history-fact">
          <img src="/history_image2.jpg" alt="Historical Fact 2" />
          <div className="fact-description">
            <h2>The Matchlock Musket</h2>
            <p>
              The matchlock musket, introduced in Europe in the 15th century, was one of the earliest firearms to use a firing mechanism. It ignited the gunpowder using a slow-burning match.
            </p>
          </div>
        </div>
        <div className="history-fact">
          <img src="/history_image3.jpg" alt="Historical Fact 3" />
          <div className="fact-description">
            <h2>The Revolver</h2>
            <p>
              The invention of the revolver by Samuel Colt in the early 19th century revolutionized personal firearms. Its revolving cylinder allowed multiple shots to be fired without reloading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
