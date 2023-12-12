import styles from './signin.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { schemaSignIn } from '../../validation/validation';
import { ISignInFormData } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { useLanguageContext } from '../../utils/hooks/useLangContext';
import { logInWithEmailAndPassword } from '../../utils/Firebase';
import { InputsLogIn } from '../../types/types';

const SignIn = () => {
  const { translations, currentLanguage } = useLanguageContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignInFormData>({
    mode: 'onChange',
    resolver: yupResolver(schemaSignIn),
  });

  const submitHandler: SubmitHandler<InputsLogIn> = (data) => {
    const { email, password } = data;
    console.log(data);
    logInWithEmailAndPassword(email, password);
    navigate('/main');
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
          <h1 className={styles.title}> {translations[currentLanguage].login}:</h1>
          <label htmlFor="email">
            <input
              className={styles.input}
              type="text"
              placeholder={translations[currentLanguage].email}
              id={'email'}
              {...register('email', { required: true })}
              autoComplete="email"
            />
            {errors.email ? <p className={styles.error}>{errors.email.message}</p> : null}
          </label>
          <label htmlFor="password">
            <input
              className={styles.input}
              type="text"
              id={'password'}
              placeholder={translations[currentLanguage].password}
              {...register('password', { required: true })}
            />
            {errors.password ? <p className={styles.error}>{errors.password.message}</p> : null}
          </label>
          <input
            className={styles.submit}
            type="submit"
            value={translations[currentLanguage].submit}
            disabled={!isValid}
          />
        </form>
      </div>
    </>
  );
};

export default SignIn;
