import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Main from './components/Main';

// react routes
const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />
  },
  {
    path: '/quiz',
    element: <Quiz />
  },
  {
    path: '/result',
    element: <Result />
  }
])
function App(){
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;

// how use scratch react program in only same page and how use react
// router dom and how install dependencies in this
// and how use redux in this. or hook
// how to connect redux store with this.

// develop quiz with out using any redux store....

// we have todo app maximilian i forgot.

// build frontend update function like click and show updated the thing which i never do.
