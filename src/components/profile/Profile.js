export const Profile = () => {
  return (
    <>
      <h1>Patrycja Wiza</h1>
      <button type="button">formularz rejestracyjny</button>
      <div className="profile-card">
        <h2>{name}</h2>
        <p>age: {age}</p>
        <p>eye color: {eye_color}</p>
      </div>
    </>
  );
};
