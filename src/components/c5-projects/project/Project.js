import s from './Project.module.scss'

export const Project = (props) => {
  return (
    <div>
      <img src={props.img} alt="project1" className={s.img}/>
    </div>
  )
}

