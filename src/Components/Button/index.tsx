import styles from './styles.module.scss'

type Props = {
  text: string
}

export const Button = ({ text }: Props) => {
  return <div className={styles.Button}>{text}</div>
}
