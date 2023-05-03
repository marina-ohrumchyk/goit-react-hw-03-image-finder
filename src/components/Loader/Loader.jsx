import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

const IsLoading = () => (
  <div className={css.spiner}>
  <TailSpin
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  </div>
);

export default IsLoading;
