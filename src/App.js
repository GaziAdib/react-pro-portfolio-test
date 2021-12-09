import React from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BarChart from './components/BarChart';
import AddAbout from './pages/admin/about/AddAbout';
import AddCourse from './pages/admin/course/AddCourse';
import AddProject from './pages/admin/project/AddProject';
import AddSkill from './pages/admin/skills/AddSkill';
import ShowAbout from './pages/client/about/ShowAbout';
import ShowAllCourses from './pages/client/course/ShowAllCourses';
import ShowAllProjects from './pages/client/project/ShowAllProjects';
import ShowAllSkills from './pages/client/skills/ShowAllSkills';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addProject" element={<AddProject />} />
          <Route path="/showProjects" element={<ShowAllProjects />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
















// const App = () => {
//   return (
//     <div>
//         <h1>Portfolio</h1>
//         <hr/>

//       <ShowAllProjects/>
      
      
     

        
//     </div>
//   )
// }

// export default App
