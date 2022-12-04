import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
// import { Profile } from './profile/Profile';
import { fetchPeople } from './services';

const Register = lazy(() =>
  import('./register/Register').then(module => ({ default: module.Register }))
);
const Profile = lazy(() =>
  import('./profile/Profile').then(module => ({ default: module.Profile }))
);
export const App = () => {
  const [page, setPage] = useState(1);
  const [swapiTable, setSwapiTable] = useState([]);
  const [profile, setProfile] = useState();
  const pictureURL = `https://picsum.photos/534/383?random=${page}`;

  const renderPeople = async page => {
    try {
      const fetchedPeople = await fetchPeople(page);
      setSwapiTable([fetchedPeople, ...swapiTable]);
      setProfile(fetchedPeople);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    renderPeople(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const nextPerson = () => {
    setPage(page + 1);
  };
  const onSubmit = values => {
    console.log(values);
    // send swapitable and form data
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <Profile
              profile={profile}
              onClick={nextPerson}
              getPicture={pictureURL}
            />
          }
        />
        <Route path="/register" element={<Register />} onSubmit={onSubmit} />
        <Route path="*" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};
