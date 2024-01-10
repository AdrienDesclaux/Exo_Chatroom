import { Send } from 'react-feather';
import { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './Form.scss';
import { changeInputValue, loadNewMessage } from '../../store/reducers/chat';

function Form() {
  const dispatch = useAppDispatch();

  const inputValue = useAppSelector((state) => state.chat.inputValue);

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(changeInputValue(newValue));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loadNewMessage());
  };

  return (
    <form action="" className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        value={inputValue}
        placeholder="Saissisez votre message"
        onChange={handleChangeInputValue}
      />
      <button type="submit" className="form__button">
        <Send />
      </button>
    </form>
  );
}

export default Form;
