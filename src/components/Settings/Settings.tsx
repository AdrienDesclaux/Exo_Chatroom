import { X } from 'react-feather';
import './Settings.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { openSettings, logIn } from '../../store/reducers/chat';

function Settings() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const dispatch = useAppDispatch();

  const settingsValue = useAppSelector((state) => state.chat.settingsMenuOpen);

  const displaySettings = () => {
    dispatch(openSettings());
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(logIn(formData));
  };

  const xClass = settingsValue
    ? 'settings__button animated'
    : 'settings__button';

  const handleInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      password: newPassword,
    }));
  };

  const handleInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      email: newEmail,
    }));
  };

  const closeLogger = () => {
    console.log('fornite');
  };

  // const closeLogger = () => {
  //   dispatch(openSettings());
  // };

  return (
    <div className="settings">
      <X className={xClass} onClick={displaySettings} />
      {settingsValue && (
        <form action="" className="settings__form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            id=""
            className="settings__input"
            placeholder="Email"
            onChange={handleInputEmail}
          />
          <input
            type="password"
            name="password"
            id=""
            className="settings__input"
            placeholder="Mot de passe"
            onChange={handleInputPassword}
          />
          <button
            type="submit"
            className="settings__form__button"
            onClick={closeLogger}
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}

export default Settings;
