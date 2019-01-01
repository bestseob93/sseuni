import * as React from 'react';

export interface ISubmitBtnProps {
  onSubmit?: (evt: React.FormEvent<HTMLButtonElement>) => void,
}

const SubmitBtn: React.StatelessComponent<ISubmitBtnProps> = ({ onSubmit }) => {
  return (
    <div>
      <button onClick={onSubmit}>Save</button>
    </div>
  );
}

export default SubmitBtn;
