import React from 'react'
import ProjectItem from "./ProjectItem"


const Projects = () => {

  const projects = [
  { title: "COVID 19 Tracker", link: "http://covid_tr-acker.surge.sh/", github: "https://github.com/Sijadkhan1678/COVID_19__TRACKER" },
  { title: "Expense Tracker", link: "", github: "https://github.com/Sijadkhan1678/Expense_Tracker_App" },
  { title: "Shoe-Store", link: "http://shoesstore2022.surge.sh/", github: "https://github.com/Sijadkhan1678/Shoe_Store" },
  { title: "Red-Quen", link: "https://redqueen-2022.surge.sh/", github: "https://github.com/Sijadkhan1678/RedQueen" },
  { title: "Tiny Short animation website", link: "http://ecommorce.surge.sh/", github: "https://github.com/Sijadkhan1678/Animated-Website" },
  //{ title: "", links: "", github },
  { title: "Quizzy App", link: "http://quizy.surge.sh/", github:"https://github.com/Sijadkhan1678/QuizAPP" },
  { title: "Stop Watch", link: "http://stop-watch6.surge.sh/", github: "https://github.com/Sijadkhan1678/Stop_Watch" },
  {title:"Expense Tracker With Typscript", link: "http://expensetrkr.surge.sh/",github:"https://github.com/Sijadkhan1678/Expense_Tracker_App"},
  {title:"SpaceX",link:"",github:"https://github.com/Sijadkhan1678/SpaceX"},
  {title:"Shopping Basket",link:"",github:"https://github.com/Sijadkhan1678/Shooping_Basket"},
  // {title:"",link:"",github:""},
  // {title:"",link:"",github:""},
  // {title:"",link:"",github:""},
   {title:"Library App",link:"https://crudlib.netlify.app/",github:"https://github.com/Sijadkhan1678/CRUD_netlify_serverless_App"},
   {title:"Github Finder",link:"stackblitz.com/edit/react-uhdomd",github:"https://github.com/Sijadkhan1678/Github-Finder-App"}
  ]



  return (
    <>
      <h3>Projects List</h3>
      <ul>


     { projects.map( (project) =>  <ProjectItem  project={project} />) }

      </ul>
    </>
  )
}

export default Projects
