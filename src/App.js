// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Home from './Component/Home/Home';
import Notfound from './Component/Notfound/Notfound';
import Quiz from './Component/Quiz/Quiz';
import SingleQuiz from './Component/SingleQuiz/SingleQuiz';
import Statistics from './Component/Statistics/Statistics';
import Tutorials from './Component/Tutorials/Tutorials';
import Main from './Layouts/Main';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/tutorials',
          element: <Tutorials></Tutorials>
        },
        {
          path: "quiz/:id",
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <SingleQuiz></SingleQuiz>
        },
        {
          path:'/statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          loader: async () => {
            return fetch(`question.json`)
          },
          element: <Blog></Blog>
        }
      ]
    },
    {path: "*",
    element: <Notfound></Notfound>,}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
