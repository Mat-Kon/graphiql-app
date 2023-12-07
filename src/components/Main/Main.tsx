import styles from './main.module.css';
import { useForm } from 'react-hook-form';
import { IFormMain } from '../../types/types';

const Main = () => {
  const { register } = useForm<IFormMain>({
    mode: 'onChange',
  });
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <label htmlFor="API">
          <input
            className={styles.API}
            type="text"
            placeholder="Please enter the API"
            id={'API'}
            {...register('API', { required: true })}
          />
        </label>
        <label>
          <textarea className={styles.request}>Here will be requests</textarea>
        </label>
        <label>
          <textarea className={styles.request}>Variables</textarea>
        </label>
        <label>
          <textarea className={styles.request}>Headers</textarea>
        </label>
        <input className={styles.submit} type="submit" value={'Send request'} />
      </form>
    </div>
  );
};

export default Main;
