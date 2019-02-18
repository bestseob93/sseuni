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
    <div className={cx('modal', { opend: isVisible })}>
      <div className="modal__box">
        <span>X</span>
        <div className="modal__login--form">
          <input className="form__field" name="username" type="text" />
          <input className="form__field" name="password" type="password" />
          <button className="btn__login">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
