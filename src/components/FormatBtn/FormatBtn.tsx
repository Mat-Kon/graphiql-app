import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { setPrrettified } from '../../utils/redux/prettifiedSlice';

interface Props {
  content: string;
  className: string;
}

const FormatBtn: React.FC<Props> = ({ content, className }) => {
  const query = useAppSelector((store) => store.quary.query);
  const dispatch = useAppDispatch();

  const formatGraphQLQuery = () => {
    let prettifiedQuery = '';

    const lines = query.split(/({|})/);
    let indentationLevel = 0;

    lines.forEach((line) => {
      let formattedLine = line.trim();
      if (line === '{') {
        indentationLevel++;
        formattedLine = `\n${'  '.repeat(indentationLevel - 1)}{`;
      } else if (line === '}') {
        formattedLine = `\n${'  '.repeat(indentationLevel - 1)}}`;
        indentationLevel--;
      } else if (formattedLine !== '') {
        formattedLine = `\n${'  '.repeat(indentationLevel)}${formattedLine}`;
      }

      prettifiedQuery += formattedLine;
    });

    dispatch(setPrrettified(prettifiedQuery));
  };

  return (
    <button className={className} onClick={formatGraphQLQuery}>
      {content}
    </button>
  );
};

export default FormatBtn;
