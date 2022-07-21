import s from './Projects.module.scss'
import {Project} from './project/Project'
import img1 from './img/p2.jpg'
import img2 from './img/p5.jpg'
import img3 from './img/p6.jpg'
import img4 from './img/p3.jpg'

export const Projects = () => {
  return (
    <section className={s.projects}>

      <div className={s.container}>

        <div>
          <h2>
            Recent Works
          </h2>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from
          </p>
        </div>


        <div className={s.row}>

          <Project img={img2}/>
          <Project img={img1}/>
          <Project img={img3}/>

        </div>

        <div className={s.row}>

          <Project img={img1}/>
          <Project img={img4}/>
          <Project img={img1}/>

        </div>

      </div>

    </section>
  )
}

