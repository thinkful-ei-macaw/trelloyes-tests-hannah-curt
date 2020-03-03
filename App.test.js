import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import List from './List';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//smoke

//card
it('renders Card properly', () => {
  const div = document.createElement('div'); 
  ReactDOM.render(<Card />, div); 
  ReactDOM.unmountComponentAtNode(div);
});

//list
it('renders List properly', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//snapshot
it('renders the UI as expected with no cards', () => { 
  const tree = renderer
  .create(<Card />) 
  .toJSON(); 
  expect(tree).toMatchSnapshot();
});
