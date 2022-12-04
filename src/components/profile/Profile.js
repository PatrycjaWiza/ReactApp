import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Profile = ({ profile, onClick, getPicture }) => {
  const { name, birth_year, eye_color } = profile;
  const age = Math.ceil(birth_year.split('BBY').join(''));

  return (
    <div className="profile__wrapper">
      <div className="profile-header">
        <h1>Patrycja Wiza</h1>
        <button type="button">
          <NavLink to={'/register'} className="StyleLink">
            formularz rejestracyjny
          </NavLink>
        </button>
      </div>
      <div className="profile-card">
        <img
          className="profile-card__picture"
          src={getPicture}
          alt="person appearance"
        />
        <div className="profile-card__title">
          <h2>{name}</h2>
          <div className="profile-card__icon__wrapper">
            <img
              className="profile-card__icon"
              src={require('../../images/star-account.png')}
              alt="check symbol"
            />
            <img
              className="profile-card__icon"
              src={require('../../images/check-symbol.png')}
              alt="check symbol"
            />
          </div>
        </div>

        <p>age: {age}</p>
        <p>eye color: {eye_color}</p>
      </div>
      <button className="button--next-profile" type="button" onClick={onClick}>
        next profiles
      </button>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    birth_year: PropTypes.string,
    eye_color: PropTypes.string,
  }),
  onClick: PropTypes.func,
  getPicture: PropTypes.string,
};
