import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';
import { useEffect, useState } from 'react';
import styles from './docs.module.css';

const DocsMain = () => {
  const [schema, setSchema] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(true);

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
      if (errors) {
        console.error('Building schema error', errors);
        return;
      }
      const schema = buildClientSchema(data);
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
    <div className={styles.docs_content} data-testid="docs-content">
      <div>{isLoaded && <pre>{schema}</pre>}</div>
    </div>
  );
};

export default DocsMain;
