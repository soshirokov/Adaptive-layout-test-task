import lampIcon from './imgs/lamp.png'
import earthIcon from './imgs/earth.png'
import documentIcon from './imgs/document.png'
import handshakeIcon from './imgs/handshake.png'
import processIcon from './imgs/process.png'
import signIcon from './imgs/sign.png'

export enum IconNames {
  lamp = 'lamp',
  earth = 'earth',
  document = 'document',
  handshake = 'handshake',
  process = 'process',
  sign = 'sign',
}

type Props = {
  type: IconNames
}

export const Icon = ({ type }: Props) => {
  let url = './imgs/empty.png'

  switch (type) {
    case IconNames.process:
      url = processIcon
      break
    case IconNames.sign:
      url = signIcon
      break
    case IconNames.lamp:
      url = lampIcon
      break
    case IconNames.earth:
      url = earthIcon
      break
    case IconNames.document:
      url = documentIcon
      break
    case IconNames.handshake:
      url = handshakeIcon
      break
  }

  return <img src={url} alt={`${type}_icon`} />
}
