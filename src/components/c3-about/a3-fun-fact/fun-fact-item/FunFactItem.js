import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import s from './FunFactItem.module.scss'

export const FunFactItem = (props) => {

  return (
    <div className={`${s.fFact} ${!props.offBorder && s.border}`}>

      <div>
        <FontAwesomeIcon
          icon={props.ico}
          color={'#e22a6c'}
          size={'3x'}
        />
      </div>

      <span>
        {props.num}
      </span>

      <p>
        {props.text}
      </p>

    </div>
  )
}

