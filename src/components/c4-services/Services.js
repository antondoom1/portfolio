import s from './Services.module.scss'
import {ServiceItem} from './Serviceitem/ServiceItem'

export const Services = () => {
  return (
    <section className={s.services}>

      <div className={s.container}>

        <div>
          <h2>
            Service I Offer
          </h2>
        </div>

        <div className={s.row}>

          <ServiceItem
            ico={'fa-solid fa-desktop'}
            title={'web development'}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

          <ServiceItem
            ico={'fa-mobile-screen-button'}
            title={'mobile development'}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

          <ServiceItem
            ico={'fa-solid fa-bullhorn'}
            title={'digital marketing'}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

        </div>

        <div className={s.row}>

          <ServiceItem
            ico={'fa-solid fa-laptop-code'}
            title={'html5'}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

          <ServiceItem
            ico={'fa-solid fa-mobile-screen'}
            title={'responsive design'}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

          <ServiceItem
            ico={'fa-solid fa-code'}
            title={'software development'}
            description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}/>

        </div>


      </div>

    </section>
  )
}

