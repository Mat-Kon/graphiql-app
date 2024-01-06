import React from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { setloading } from '../../utils/redux/loadingSlice';
import { setResponse } from '../../utils/redux/responsSlice';

interface Props {
  name: string;
  className: string;
}

const BtnRequest: React.FC<Props> = ({ name, className }) => {
  const query = useAppSelector((store) => store.quary.query);
  const dispatch = useAppDispatch();
  const baseUrl = localStorage.getItem('url') ?? '';
  const varsString = useAppSelector((store) => store.variables.variables);
  const headsString = useAppSelector((store) => store.headers.headers);
  let variables: object;
  const headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  try {
    variables = JSON.parse(varsString);
  } catch {
    variables = {};
  }

  try {
    const parsedHeaders = JSON.parse(headsString);
    for (const key in parsedHeaders) {
      headers[key] = parsedHeaders[key];
    }
  } catch {}

  const handlerClick = () => {
    if (query !== '') {
      showData(baseUrl, query, variables);
    }
    if (!baseUrl || baseUrl === '') {
      dispatch(setResponse('You need to specify the endpoint in the url'));
    }
  };

  const showData = async (url: string, query: string, variables: object) => {
    try {
      dispatch(setloading(true));
      const resp = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          query,
          variables,
        }),
      });
      const data = await resp.json();
      dispatch(setResponse(data));
    } catch (error: unknown) {
      console.error('error');
      if (error instanceof Error) {
        dispatch(setResponse(error.message));
      }
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
