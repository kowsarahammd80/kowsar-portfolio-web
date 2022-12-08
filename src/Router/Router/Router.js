import { createBrowserRouter } from "react-router-dom";
import MyProjects from "../../Components/MyProjects/MyProjects";
import Main from "../../Layout/Main/Main";
import AboutPages from "../../Pages/AboutPages/AboutPages";
import HomePages from "../../Pages/HomePages/HomePages";
import MySkillPages from "../../Pages/MySkillPages/MySkillPages";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
         {
          path: '/',
         element: <HomePages></HomePages>
         },
         {
          path: '/about',
          element: <AboutPages></AboutPages>
         },
        {
          path: '/skills',
          element: <MySkillPages></MySkillPages>
        },
        {
          path:'/projects',
          element: <MyProjects></MyProjects>
        }
    ]
  }
]);

export default routers;