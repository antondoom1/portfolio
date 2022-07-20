import s from './ServiceItem.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const ServiceItem = (props) => {
  return (
    <div className={s.container}>

      <a href="#">
        <div className={s.iBox}>

          <FontAwesomeIcon
            icon={props.ico}
            size={'4x'}
            color={'#fff'}
          />

          <h4>
            {props.title}
          </h4>

          <p>
            {props.description}
          </p>

        </div>
      </a>

    </div>
  )
}
