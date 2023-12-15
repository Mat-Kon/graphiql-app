interface Props {
  content: string;
  className: string;
}

const FormatBtn: React.FC<Props> = ({ content, className }) => {
  // const formatGraphQLQuery = (query) => {
  //   const prettifiedQuery = query
  //     .replace(/\s+/g, ' ')
  //     .replace(/({|}|,)/g, '$1\n')
  //     .replace(/\s*:\s*/g, ': ');

  //   return prettifiedQuery;
  // };

  // // Пример использования
  // const unformattedQuery = `
  //   {
  //     user(id: 1){name, age}
  //   }
  // `;

  return <button className={className}>{content}</button>;
};

export default FormatBtn;
