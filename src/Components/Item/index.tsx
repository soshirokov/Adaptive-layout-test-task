import { Icon, IconNames } from '../Icon'
import styles from './styles.module.scss'

type Props = {
  iconType: IconNames
  title: string
  desc: string
  linkText: string
  linkURL: string
}

export const Item = ({ iconType, desc, linkText, linkURL, title }: Props) => {
  return (
    <div className={styles.Item}>
      <div className={styles.Item__Header}>
        <div className={styles.Item__Icon}>
          <Icon type={iconType} />
        </div>
        <div className={styles.Item__Title}>{title}</div>
      </div>
      <div className={styles.Item__Content}>
        <div className={styles.Item__Desc}>{desc}</div>
        <a className={styles.Item__Link} href={linkURL}>
          {linkText}
          <svg
            className={styles.Item__LinkIcon}
            width="32"
            height="12"
            viewBox="0 0 32 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="6" x2="18" y2="6" stroke="black" strokeWidth="2" />
            <path d="M24 6L17.25 11.1962L17.25 0.803848L24 6Z" fill="black" />
          </svg>
        </a>
      </div>
    </div>
  )
}
