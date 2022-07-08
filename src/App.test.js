import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test.skip('task added to array', () => {
   let task = "new task" ;
   let tasksArray = [a,b,c,d,] ;
   const newArray = addTask(task) ;
   expect(newArray[{newArray.length -1}]).toEqual(task) ;
})