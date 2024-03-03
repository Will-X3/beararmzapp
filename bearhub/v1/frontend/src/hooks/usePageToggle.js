// hooks/usePageToggle.js
import { useState } from 'react';

const usePageToggle = () => {
  const [currentPage, setCurrentPage] = useState();

  const onPageToggle = (page) => {
    setCurrentPage(page);
  };

  return { currentPage, onPageToggle };
};

export default usePageToggle;
