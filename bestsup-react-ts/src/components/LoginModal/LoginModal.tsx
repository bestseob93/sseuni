import * as React from 'react';
import './LoginModal.css';

interface ILoginModalProps {
  isVisible: boolean,
  closeLoginModal: () => void
}
// https://codepen.io/ivanodintsov/pen/yqvZzO - 나중에 참고
const LoginModal: React.StatelessComponent<ILoginModalProps> = ({ isVisible, closeLoginModal }) => {
  return (
    <div className={`modal ${isVisible ? 'opend' : ''}`}>
      LoginModal
    </div>
  );
}

export default LoginModal;
