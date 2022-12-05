import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const Register = ({ onSubmit }) => {
  const initialState = {
    login: '',
    password: '',
    email: '',
    phone: '',
    agreement: false,
  };
  const [state, setState] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const { login, password, email, phone, agreement } = state;
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCheckbox = e => {
    setState({ ...state, agreement: e.target.checked });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(state));
    setIsSubmit(true);
  };
  const resetForm = () => {
    setState(initialState);
  };
  const validate = values => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.email || !regex.test(values.email)) {
      errors.email = 'Nieprawidłowy format adresu e-mail';
    }
    if (!values.phone || values.phone.length < 9) {
      errors.phone = 'Nieprawidłowy numer telefonu';
    }
    if (values.agreement === false) {
      errors.agreement = 'Wymagana akceptacja regulaminu';
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      onSubmit(state);
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);
  return (
    <form onSubmit={handleSubmit}>
      <h2>FORMULARZ REJESTRACYJNY</h2>
      <div className="form-group label">
        <label>Login:</label>
        <input value={login} onChange={handleChange} name="login" type="text" />
      </div>
      <div className="form-group">
        <label>Hasło:</label>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
        />
      </div>
      <div className="form-group">
        <label>E-mail:</label>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          className={formErrors.email && 'invalid'}
          type="email"
        />
        <span className="error">{formErrors.email}</span>
      </div>
      <div className="form-group">
        <label>Numer telefonu:</label>
        <input
          value={phone}
          onChange={handleChange}
          name="phone"
          className={formErrors.phone && 'invalid'}
          type="phone"
        />
        <span className="error">{formErrors.phone}</span>
      </div>
      <div className="form-group">
        <label className="checkbox">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            onChange={handleCheckbox}
            className={formErrors.agreement && 'invalid'}
          />
          <span className="checkmark"></span>
          Akceptuję Regulamin
          <span className="agreement--error">{formErrors.agreement}</span>
        </label>
      </div>
      <button type="submit">zapisz</button>
    </form>
  );
};

Register.propTypes = {
  onSubmit: PropTypes.func,
};
