import s from './Project.module.css'

export const Project = (props) => {
  return (
    <div className={s.project}>
      <div className={s.imgContainer}>
        <h4 className={s.button}>Watch</h4>
      </div>
      <div className={s.description}>
        <h5>{props.title}</h5>
        <div>{props.description}</div>
      </div>
    </div>
  )
}

