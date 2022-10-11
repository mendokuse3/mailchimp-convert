import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders properly', () => {
  render(<App />);
  const textarea = screen.getByTestId('input-area');
  const showinghtml = screen.queryByTestId('show-rendered-html');
  const showingwithtags = screen.getByTestId('show-html-tags');

  expect(textarea).toBeInTheDocument();
  expect(showinghtml).toBeNull();
  expect(showingwithtags).toBeInTheDocument();
});

test('clicking button swaps modes', async () => {
  render(<App />);
  const button = screen.getByTestId('switch-html');
  await userEvent.click(button);

  const showinghtml = screen.getByTestId('show-rendered-html');
  const showingwithtags = screen.queryByTestId('show-html-tags');

  expect(showinghtml).toBeInTheDocument();
  expect(showingwithtags).toBeNull();
})

test('inputing markdown returns html', async () => {
  render(<App />);

  const textarea = screen.getByTestId('input-area');
  await userEvent.type(textarea, "## header1");
  const showingwithtags = screen.getByTestId('show-html-tags');
  
  expect(showingwithtags).toHaveTextContent('<h2>header1</h2>')
  
})