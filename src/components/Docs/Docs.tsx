// import { useState } from 'react';
// import styles from './docs.module.css';

// const ENDPOINT = 'https://rickandmortyapi.com/'; // for first time

// const query = 'query{__schema}';

// export const getIntrospectionQueryData = async () => {
//   const response = await fetch(ENDPOINT, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       query,
//     }),
//   });
//   const data = await response.json();
//   return data.data;
// };

// const Docs = () => {
//   getIntrospectionQueryData();
//   const [isOpen, setOpen] = useState(false);

//   return isOpen ? (
//     <div className={styles.docs_container_open} data-testid="docs">
//       <div className={styles.btn_wrap}>
//         <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
//           btn
//         </button>
//       </div>
//       <div className={styles.docs}>Here will be Docs</div>
//     </div>
//   ) : (
//     <div className={styles.docs_container_close} data-testid="docs">
//       <div className={styles.btn_wrap}>
//         <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
//           btn
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Docs;

import { useState } from 'react';
import styles from './docs.module.css';

const Docs = () => {
  const [isOpen, setOpen] = useState(false);

  return isOpen ? (
    <div className={styles.docs_container_open} data-testid="docs">
      <div className={styles.btn_wrap}>
        <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
          btn
        </button>
      </div>
      <div className={styles.docs}>Here will be Docs</div>
    </div>
  ) : (
    <div className={styles.docs_container_close} data-testid="docs">
      <div className={styles.btn_wrap}>
        <button className={styles.btn} onClick={() => setOpen(!isOpen)}>
          btn
        </button>
      </div>
    </div>
  );
};

export default Docs;
