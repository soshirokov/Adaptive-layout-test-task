import { Icon, IconNames } from '../Icon'
import styles from './styles.module.scss'

type Props = {
  iconType: IconNames
  num: number
  desc: string
}

export const Feature = ({ desc, iconType, num }: Props) => {
  return (
    <div className={styles.Feature}>
      <div className={styles.Feature__Num}>{num}</div>
      <div className={styles.Feature__Icon}>
        <Icon type={iconType} />
      </div>
      <div className={styles.Feature__Desc}>{desc}</div>
    </div>
  )
}
