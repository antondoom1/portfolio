import s from './IcoItem.module.scss'

export const IcoItem = (props) => {
  return (
    <a href={props.link} className={s.item}>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox}>
        <path d={props.d}/>
      </svg>

    </a>
  )
}
