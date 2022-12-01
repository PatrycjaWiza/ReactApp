import { useEffect, useState } from 'react';
import { Profile } from './profile/Profile';
import { fetchPeople } from './services';

export const App = () => {
  const [page, setPage] = useState(1);
  const [swapiTable, setSwapiTable] = useState([]);
  const renderPeople = async page => {
    try {
      const fetchedPeople = await fetchPeople(page);
      setSwapiTable([fetchedPeople, ...swapiTable]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    renderPeople(page);
  }, [page]);

  const nextPerson = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Profile />
      <button type="button" onClick={nextPerson}>
        next profiles
      </button>
    </div>
  );
};
