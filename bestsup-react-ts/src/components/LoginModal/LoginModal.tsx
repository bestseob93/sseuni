import * as React from 'react';
import cx from 'classnames';
import './LoginModal.css';

interface ILoginModalProps {
  isVisible: boolean,
  closeLoginModal: () => void
}
// https://codepen.io/ivanodintsov/pen/yqvZzO - 나중에 참고
const LoginModal: React.StatelessComponent<ILoginModalProps> = ({ isVisible, closeLoginModal }) => {
  return (
    <div className={cx('modal__container', { 'modal__container--opend': isVisible })}>
      <div className="modal__container--background" />
      <div className="modal__box">
        <button className="modal__close">✖</button>
        <div className="modal__login--form">
          <div className="form__box"><input className="form__field" name="username" placeholder="Username" type="text" /></div>
          <div className="form__box"><input className="form__field" name="password" placeholder="Password" type="password" /></div>
          <button className="btn__login">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
