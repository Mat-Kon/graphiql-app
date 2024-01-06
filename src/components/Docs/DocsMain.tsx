import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
import { useEffect, useState } from 'react';

const DocsMain = () => {
  const [schema, setSchema] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('The schema is loading');

  const url = localStorage.getItem('url') || '';
  const introspectionQuery = getIntrospectionQuery();

  useEffect(() => {
    const getSchema = async (url: string) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: introspectionQuery }),
      });
      //   if (response.ok) {}
      if (!response.ok) {
        setError(
          'Error!Something is going wrong! The documnetation is not loaded. Please check endpoints'
        );
      }
      const { data } = await response.json();
      const schema = buildClientSchema(data);
      const printedSchema = await printSchema(schema);
      setSchema(printedSchema);
      setIsLoaded(true);
      return printedSchema;
    };
    getSchema(url)
      .then(() => {
        setIsLoaded(true);
      })
      .catch(() =>
        setError(
          'Error!Something is going wrong! The documnetation is not loaded. Please check endpoints'
        )
      );
  });

  return (
    <div>
      <div>{isLoaded ? <pre>{schema}</pre> : <div>{error}</div>}</div>
    </div>
  );
};

export default DocsMain;
