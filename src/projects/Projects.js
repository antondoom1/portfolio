import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project'

export const Projects = () => {
  return (
    <div className={s.projectsBlock}>
      <div className={`${sContainer.container} ${s.projectsContainer}`}>
        <h2 className={s.title}>Projects</h2>
        <div className={s.projects}>
          <Project
            title={'Project name'}
            description={'Description ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cum eligendi fugiat hic.'}/>
          <Project
            title={'Project2 name'}
            description={'Description2 adipisci blanditiis eveniet fugit iste perferendis perspiciatis tempora unde veritatis voluptate.'}/>
        </div>
      </div>
    </div>
  )
}

