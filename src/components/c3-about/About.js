import s from './a2-about-main/AboutMain.module.css'
import {AboutMain} from './a2-about-main/AboutMain'
import {FunFact} from './a3-fun-fact/FunFact'


export const About = () => {
  return (
    <section className={s.about}>

      <AboutMain/>

      <FunFact/>

    </section>
  )
}