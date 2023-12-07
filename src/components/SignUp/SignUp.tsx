import styles from './signup.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { schema } from '../../validation/validation';
import { IFormData } from '../../types/types';
import { useNavigate } from 'react-router-dom';

const error: SubmitErrorHandler<IFormData> = (data) => console.log(data);

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    navigate('/');
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}> Please sign up:</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit, error)}>
          <label htmlFor="email">
            <input
              type="text"
              placeholder="Email"
              id={'email'}
              {...register('email', { required: true })}
              autoComplete="email"
            />
            {errors.email ? <p className={styles.error}>{errors.email.message}</p> : null}
          </label>
          <label htmlFor="password">
            <input
              type="text"
              id={'password'}
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password ? <p className={styles.error}>{errors.password.message}</p> : null}
          </label>
          <label htmlFor="passwordRepeat">
            <input
              type="text"
              placeholder="Repeat password"
              id={'passwordRepeat'}
              {...register('passwordRepeat', { required: true })}
            />
            {errors.passwordRepeat ? (
              <p className={styles.error}>{errors.passwordRepeat.message}</p>
            ) : null}
          </label>
          <input className={styles.submit} type="submit" value={'Submit'} disabled={!isValid} />
        </form>
      </div>
    </>
  );
};

export default SignUp;
