import styles from './styles.module.scss'
import cn from 'classnames'

export type Link = {
  id: number
  name: string
  link: string
}

type Props = {
  links: Link[]
  activeItem: number
}

export const DesktopMenu = ({ links, activeItem }: Props) => {
  return (
    <ul className={styles.DesktopMenu__Menu}>
      {links.length > 0 &&
        links.map((link) => (
          <li
            className={cn(styles.DesktopMenu__MenuItem, {
              [styles.DesktopMenu__MenuItem_active]: link.id === activeItem,
            })}
            key={link.name}
          >
            <a className={styles.DesktopMenu__MenuLink} href={link.link}>
              {link.name}
            </a>
          </li>
        ))}
    </ul>
  )
}
