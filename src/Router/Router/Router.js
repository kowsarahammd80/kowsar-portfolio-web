import { createBrowserRouter } from "react-router-dom";
import MyProjects from "../../Components/MyProjects/MyProjects";
import Main from "../../Layout/Main/Main";
import AboutPages from "../../Pages/AboutPages/AboutPages";
import ContactMePages from "../../Pages/ContactMePages/ContactMePages";
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
        },
        {
          path: '/contact',
          element: <ContactMePages></ContactMePages>
        }
    ]
  }
]);

export default routers;