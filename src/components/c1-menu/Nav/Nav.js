import s from '../Menu.module.scss'

export const Nav = (props) => {
  return (
    <a href={props.link} className={`${s.disc} ${props.item} ${props.toggle}`}>
      {
        !props.toggle
          ? <div>{props.title}</div>
          : props.title
      }
    </a>
  )
}

