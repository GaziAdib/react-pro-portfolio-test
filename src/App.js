import React from 'react'
import './App.css';
import BarChart from './components/BarChart';
import AddAbout from './pages/admin/about/AddAbout';
import AddCourse from './pages/admin/course/AddCourse';
import AddProject from './pages/admin/project/AddProject';
import AddSkill from './pages/admin/skills/AddSkill';
import ShowAbout from './pages/client/about/ShowAbout';
import ShowAllCourses from './pages/client/course/ShowAllCourses';
import ShowAllProjects from './pages/client/project/ShowAllProjects';
import ShowAllSkills from './pages/client/skills/ShowAllSkills';

const App = () => {
  return (
    <div>
        <h1>Portfolio</h1>
        <hr/>

      <ShowAllProjects/>
      <ShowAllCourses/>
      <ShowAllSkills/>
      <ShowAbout/>
      
     

        
    </div>
  )
}

export default App
