// import { useEffect } from 'react';
// import { useState } from 'react';

// const ENDPOINT = 'https://rickandmortyapi.com/graphql'; // for first time

// export const QueryData = async () => {
//   const response = await fetch(ENDPOINT);
//   const data = await response.json();
//   console.log(data.__schema);
//   return data.data;
// };

// const DocsMain = () => {
// //   const [isLoaded, setIsLoaded] = useState(false);
// //   const [schemaTypes, setSchemaTypes] = useState<null | FullType[]>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getIntrospectionQueryData();
//       const schema_types = (data.__schema.types as FullType[]).filter(
//         (type) => !type.name.startsWith('__')
//       );
//       setSchemaTypes(schema_types);
//     };
//     fetchData()
//       .then(() => {
//         setIsLoaded(true);
//       })
//       .catch(console.error);
//   }, []);

//   return <div>Here will be docs</div>;
// };

// export default DocsMain;
