import React from 'react';
import css from 'components/Button/Button.module.css';

const Button = ({ loadMoreImages }) => (
  <button className={css.button} onClick={loadMoreImages}>
    Load More
  </button>
);

export default Button;
