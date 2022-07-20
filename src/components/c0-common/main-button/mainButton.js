import s from './mainButton.module.css'

export const MainButton = (props) => {
  return (
    <div>
      <a href={props.link} className={s.button}>
        {props.title}
      </a>
    </div>
  )
}