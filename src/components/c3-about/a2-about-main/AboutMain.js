import s from './AboutMain.module.scss'
import aboutPhoto from '../a1-img/Jhonp.jpg'
import {SkillsList} from '../a4-skills-list/SkillsList'
import {MainButton} from '../../c0-common/buttons/main-button/mainButton'

export const AboutMain = () => {
  return (
    <div className={s.container}>

      <div className={s.photoContainer}>
        <img src={aboutPhoto} alt={'about'} className={s.photo}/>
      </div>

      <div className={s.aboutInfoContainer}>

        <h3>I'm a Frond-end Web Developer from Mars!</h3>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC
        </p>
        <p>
          making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
          the cites of the word in classical literature, discovered the undoubtable source.
        </p>

        <div className={s.skillsContainer}>
          <SkillsList skills={['React', 'Redux', 'Redux-Thunk']}/>
          <SkillsList skills={['HTML5', 'CSS3', 'JS']}/>
        </div>

        <MainButton
          link={'src/components/c3-about/About#'}
          title={'download cv'}
        />

      </div>

    </div>
  )
}