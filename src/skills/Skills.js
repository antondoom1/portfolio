import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill'

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={`${sContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill title={'JS'}
                 description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, commodi dolorum eos harum ipsa nostrum.'}/>
          <Skill title={'CSS'}
                 description={'Cupiditate nostrum recusandae sed soluta, sunt ullam. Ab amet ea illum labore libero mollitia odit ratione.'}/>
          <Skill title={'React'}
                 description={'Corporis ducimus error laboriosam laborum numquam obcaecati provident quo reiciendis velit delectus doloremque doloribus ducimus.'}/>
        </div>
      </div>
    </div>
  )
}

