import { Banner } from '../../Components/Banner'
import { Item } from '../../Components/Item'
import { IconNames } from '../../Components/Icon'
import styles from './styles.module.scss'
import { Feature } from '../../Components/Feature'

const banner = {
  title: 'TEXT_TEXT_TEXT',
  description: 'TEXT_TEXT_TEXT_TEXT',
  buttonText: 'TEXT_TEXT_TEXT',
}

const items = [
  {
    iconType: IconNames.lamp,
    desc: 'TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT',
    linkText: 'TEXT',
    linkURL: '#',
    title: 'TEXT_TEXT',
  },
  {
    iconType: IconNames.earth,
    desc: 'TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT',
    linkText: 'TEXT',
    linkURL: '#',
    title: 'TEXT_TEXT',
  },
]

const features = [
  {
    iconType: IconNames.document,
    num: 1,
    desc: 'TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXTTEXT_TEXT_TEXT_TEXT',
  },
  {
    iconType: IconNames.handshake,
    num: 2,
    desc: 'TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXTTEXT_TEXT_TEXT_TEXT',
  },
  {
    iconType: IconNames.process,
    num: 3,
    desc: 'TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXTTEXT_TEXT_TEXT_TEXT',
  },
  {
    iconType: IconNames.sign,
    num: 4,
    desc: 'TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXTTEXT_TEXT_TEXT_TEXT',
  },
]

export const Home = () => {
  return (
    <div className={styles.Home}>
      <Banner {...banner} />
      <div className={styles.Home__Wrap}>
        <div className={styles.Home__Items}>
          {items.length > 0 &&
            items.map((item) => <Item {...item} key={item.iconType} />)}
        </div>
        <div className={styles.Home__SubHeader}>TEXT_TEXT</div>
        <div className={styles.Home__Features}>
          {features.length > 0 &&
            features.map((feature) => (
              <Feature {...feature} key={feature.num} />
            ))}
        </div>
      </div>
    </div>
  )
}
