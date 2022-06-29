import { useState } from 'react';
import type { NextPage } from 'next'
import { projectList } from '../data/projectList'

const Home: NextPage = () => {
  const [projects] = useState(projectList);
  return (
    <div className='bg-gray-700 h-screen w-screen text-slate-200'>
      <h1 className='text-center text-3xl p-6'>Hi👋<br/> I&apos;m <b>Isti</b> and welcome on my totally incomplete page</h1>
      <div>
        <p className='text-center text-xl pt-5'>My mainly goal in this page to create and well document🤯 web applications</p>
        <div>
          {projects.map(project => (
            <ul key={project.name}>
              <li>
                {project.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
