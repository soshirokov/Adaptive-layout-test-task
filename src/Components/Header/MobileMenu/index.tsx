import styles from './styles.module.scss'
import { MenuIcon } from './MenuIcon'
import { useState } from 'react'
import { CloseIcon } from './CloseIcon'
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

export const MobileMenu = ({ links, activeItem }: Props) => {
  const [show, setShow] = useState(false)

  const menuClickHandler = () => {
    setShow(!show)
  }

  return (
    <div className={styles.MobileMenu}>
      <div className={styles.MobileMenu__Icon} onClick={menuClickHandler}>
        {!show ? <MenuIcon /> : <CloseIcon />}
      </div>
      {show && (
        <div className={styles.MobileMenu__List}>
          <ul className={styles.MobileMenu__Menu}>
            {links.length > 0 &&
              links.map((link) => (
                <li
                  className={cn(styles.MobileMenu__MenuItem, {
                    [styles.MobileMenu__MenuItem_active]:
                      link.id === activeItem,
                  })}
                  key={link.name}
                >
                  <a className={styles.MobileMenu__MenuLink} href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  )
}
