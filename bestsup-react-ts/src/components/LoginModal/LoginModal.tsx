import * as React from 'react';
import './LoginModal.css';

interface ILoginModalProps {
  isVisible: boolean
}
// https://codepen.io/ivanodintsov/pen/yqvZzO - 나중에 참고
const LoginModal: React.StatelessComponent<ILoginModalProps> = ({ isVisible }) => {
  return (
    <div className="modal">
      LoginModal
    </div>
  );
}

export default LoginModal;
