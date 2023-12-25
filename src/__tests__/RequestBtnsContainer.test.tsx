import { fireEvent, screen } from '@testing-library/react';
import RequstBtnsContainer from '../components/RequstBtnsContainer/RequstBtnsContainer';
import { renderer } from '../utils/renderer';

test('click to "setBtn" must save URL in localStorage', () => {
  const url = 'https://example.com';

  const localStorageMock = jest.spyOn(window.localStorage.__proto__, 'setItem');

  renderer(<RequstBtnsContainer url={url} />);

  const setBtn = screen.getByText('Set API');

  fireEvent.click(setBtn);

  expect(localStorageMock).toHaveBeenCalledWith('url', url);
});
