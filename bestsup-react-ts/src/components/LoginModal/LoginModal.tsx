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
      LoginModal
    </div>
  );
}

export default LoginModal;
