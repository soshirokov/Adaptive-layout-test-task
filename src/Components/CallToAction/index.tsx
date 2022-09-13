import { Button } from '../Button'
import styles from './styles.module.scss'

type Props = {
  title: string
  description: string
  buttonText: string
}

export const CallToAction = ({ title, description, buttonText }: Props) => {
  return (
    <div className={styles.CallToAction}>
      <div className={styles.CallToAction__TextBlock}>
        <h2 className={styles.CallToAction__Title}>{title}</h2>
        <div className={styles.CallToAction__Desc}>{description}</div>
      </div>
      <Button text={buttonText} />
    </div>
  )
}
