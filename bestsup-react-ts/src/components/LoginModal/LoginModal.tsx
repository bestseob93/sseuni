import * as React from 'react';
import cx from 'classnames';
import './LoginModal.css';

interface ILoginModalProps {
  isVisible: boolean,
  closeLoginModal: () => void,
  onChange: (ev: React.SyntheticEvent) => void
  onSubmit: () => Promise<void>
}
// https://codepen.io/ivanodintsov/pen/yqvZzO - 나중에 참고
const LoginModal: React.StatelessComponent<ILoginModalProps> = ({
  isVisible,
  closeLoginModal,
  onChange,
  onSubmit
}) => {
  return (
    <div className={cx('modal__container', { 'modal__container--open': isVisible })}>
      <div className="modal__container--background" />
      <div className="modal__box">
        <button className="modal__close" onClick={closeLoginModal}>✖</button>
        <div className="modal__login--form">
          <div className="form__box">
            <input
              className="form__field"
              name="username"
              onChange={onChange}
              placeholder="Username"
              type="text" />
          </div>
          <div className="form__box">
            <input
              className="form__field"
              name="password"
              onChange={onChange}
              placeholder="Password"
              type="password" />
          </div>
          <button className="btn__login" onClick={onSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
