// hooks/useCurrentPage.js
import { useState } from 'react';

const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState();

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return { currentPage, setPage };
};

export default useCurrentPage;
