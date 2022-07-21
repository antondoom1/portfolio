import s from './FunFact.module.scss'
import {FunFactItem} from './fun-fact-item/FunFactItem'

export const FunFact = () => {
  return (
    <div className={s.container}>

      <div>
        <FunFactItem ico={'fa-solid fa-cubes'} num={5} text={'Projects Per Year'}/>
      </div>

      <div>
        <FunFactItem ico={'fa-solid fa-user'} num={99} text={'% Satisfied Clients'}/>
      </div>

      <div>
        <FunFactItem ico={'fa-solid fa-code'} num={31680} text={'Lines of code'}/>
      </div>

      <div>
        <FunFactItem ico={'fa-solid fa-trophy'} num={14} text={'Awards Won'} offBorder={true}/>
      </div>

    </div>
  )
}

