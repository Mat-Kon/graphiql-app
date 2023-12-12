import styles from './signup.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { schema } from '../../validation/validation';
import { IFormData, InputsSignUp } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { registerWithEmailAndPassword } from '../../utils/Firebase';
import { useLanguageContext } from '../../utils/hooks/useLangContext';

const SignUp = () => {
  const { translations, currentLanguage } = useLanguageContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const submitHandler: SubmitHandler<InputsSignUp> = (data) => {
    const { email, password } = data;
    registerWithEmailAndPassword(email, password);
    navigate('/main');
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
          <h1 className={styles.title}> {translations[currentLanguage].signup}:</h1>
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
          <label htmlFor="passwordRepeat">
            <input
              className={styles.input}
              type="text"
              placeholder={translations[currentLanguage].rePassword}
              id={'passwordRepeat'}
              {...register('passwordRepeat', { required: true })}
            />
            {errors.passwordRepeat ? (
              <p className={styles.error}>{errors.passwordRepeat.message}</p>
            ) : null}
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

export default SignUp;
