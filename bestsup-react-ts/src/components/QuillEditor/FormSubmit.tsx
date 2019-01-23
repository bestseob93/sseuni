import * as React from 'react';

export interface IFormSubmitProps {
  onSubmit?: (evt: React.FormEvent<HTMLButtonElement>) => void,
}

const FormSubmit: React.StatelessComponent<IFormSubmitProps> = ({ onSubmit }) => {
  return (
    <div>
      <button onClick={onSubmit}>작성 완료</button>
    </div>
  );
}

export default FormSubmit;
