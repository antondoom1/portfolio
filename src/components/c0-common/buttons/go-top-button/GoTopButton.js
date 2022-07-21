import s from './GoTopButton.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const GoTopButton = () => {
  return (
    <a href={'#top'} className={s.goTop}>
      <FontAwesomeIcon icon="fa-solid fa-angle-up"/>
    </a>
  )
}
