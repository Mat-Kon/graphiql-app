import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
import { useEffect, useState } from 'react';
import styles from './docs.module.css';

const DocsMain = () => {
  const [schema, setSchema] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState('The schema is loading');

  const url = localStorage.getItem('url') || '';
  const introspectionQuery = getIntrospectionQuery();

  useEffect(() => {
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

  const getSchema = async (url: string) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: introspectionQuery }),
    });
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

  return (
    <div className={styles.docs_content} data-testid="docs-content">
      <div>{isLoaded ? <pre>{schema}</pre> : <div>{error}</div>}</div>
    </div>
  );
};

export default DocsMain;
