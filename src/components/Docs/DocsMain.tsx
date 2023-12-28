import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
import { useEffect, useState } from 'react';

const DocsMain = () => {
  const [schema, setSchema] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const url = localStorage.getItem('url') || '';
  const introspectionQuery = getIntrospectionQuery();

  useEffect(() => {
    const getSchema = async (url: string) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: introspectionQuery }),
      });
      const { data, errors } = await response.json();
      console.log(data);
      if (errors) {
        console.error('Building schema error', errors);
        return;
      }
      const schema = buildClientSchema(data);
      console.log(schema);

      const printedSchema = await printSchema(schema);
      setSchema(printedSchema);
      return printedSchema;
    };
    getSchema(url)
      .then(() => {
        setIsLoaded(true);
      })
      .catch(console.error);
  });

  return (
    <div>
      <div>{isLoaded && <div>{schema}</div>}</div>
    </div>
  );
};

export default DocsMain;
