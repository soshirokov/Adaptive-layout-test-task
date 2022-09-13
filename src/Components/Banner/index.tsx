import { CallToAction } from '../CallToAction'
import styles from './styles.module.scss'

type Props = {
  title: string
  description: string
  buttonText: string
}

export const Banner = ({ title, description, buttonText }: Props) => {
  return (
    <div className={styles.Banner}>
      <div className={styles.Banner__Wrap}>
        <div className={styles.Banner__CallToAction}>
          <CallToAction
            title={title}
            description={description}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  )
}
