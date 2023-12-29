import React from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { setloading } from '../../utils/redux/loadingSlice';
import { setRespons } from '../../utils/redux/responsSlice';

interface Props {
  name: string;
  className: string;
}

const BtnRequest: React.FC<Props> = ({ name, className }) => {
  const query = useAppSelector((store) => store.quary.query);
  const dispatch = useAppDispatch();
  const baseUrl = localStorage.getItem('url') ?? '';
  const varsString = useAppSelector((store) => store.variables.variables);
  let variables: object;

  try {
    variables = JSON.parse(varsString);
  } catch {
    variables = {};
  }

  const handlerClick = () => {
    if (query !== '') {
      showData(baseUrl, query, variables);
    }
  };

  const showData = async (url: string, query: string, variables: object) => {
    if (!url || url === '') {
      dispatch(setRespons('You need to specify the endpoint in the url'));
    }

    try {
      dispatch(setloading(true));
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });
      const data = await resp.json();
      dispatch(setRespons(data));
    } catch (error) {
      console.error('error');
      dispatch(setRespons(error));
    } finally {
      dispatch(setloading(false));
    }
  };

  return (
    <button className={className} onClick={handlerClick}>
      {name}
    </button>
  );
};

export default BtnRequest;
