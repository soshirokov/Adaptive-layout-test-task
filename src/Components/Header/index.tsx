import { DesktopMenu } from './DesktopMenu'
import logo from './logo.png'
import { MobileMenu } from './MobileMenu'
import styles from './styles.module.scss'

export type Link = {
  id: number
  name: string
  link: string
}

type Props = {
  links: Link[]
  activeItem: number
}

export const Header = ({ links, activeItem }: Props) => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Wrap}>
        <div className={styles.Header__Logo}>
          <div className={styles.Header__LogoImg}>
            <img src={logo} alt="logo" />
          </div>
          <h1 className={styles.Header__LogoText}>LOGO</h1>
          <div className={styles.Header__MenuMobile}>
            <MobileMenu links={links} activeItem={activeItem} />
          </div>
        </div>
        <div className={styles.Header__Menu}>
          <div className={styles.Header__MenuDesktop}>
            <DesktopMenu links={links} activeItem={activeItem} />
          </div>
        </div>
      </div>
    </header>
  )
}
