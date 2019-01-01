import * as React from 'react';

export interface ISubmitBtnProps {
  onSubmit?: (evt: React.FormEvent<HTMLButtonElement>) => void,
  toggleToolBar?: () => void,
}

const SubmitBtn: React.StatelessComponent<ISubmitBtnProps> = ({ onSubmit, toggleToolBar }) => {
  return (
    <div>
      <button onClick={onSubmit}>Save</button>
      <button onClick={toggleToolBar}>Test Toggle ToolBar</button>
    </div>
  );
}

export default SubmitBtn;
