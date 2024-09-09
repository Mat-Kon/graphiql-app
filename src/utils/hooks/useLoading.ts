import { setloading } from '../redux/loadingSlice';
import { useAppDispatch, useAppSelector } from './reduxHooks';

const useLoading = () => {
  const isLoading = useAppSelector((store) => store.loading.isLoading);
  const dispatch = useAppDispatch();

  const setloader = (value: boolean) => {
    dispatch(setloading(value));
  };

  return { isLoading, setloader };
};

export { useLoading };
