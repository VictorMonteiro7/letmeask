import React from 'react';

type ButtonProps = {
  text?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button>
      <a href="./">{props.text}</a>
    </button>
  );
};

export default Button;
