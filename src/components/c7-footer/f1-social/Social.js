import s from './Social.module.scss'
import {IcoItem} from './ico-item/IcoItem'
import {svgData} from './svg-data/SvgData'

export const Social = () => {
  return (
    <div className={s.social}>

      {
        svgData.map((s, i) => <div key={i}>
          <IcoItem viewBox={s.viewBox} d={s.d} link={s.link}/>
        </div>)
      }

    </div>
  )
}
