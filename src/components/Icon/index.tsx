import { IconContainer } from "./styles"
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

interface IIcon {
  iconName: string;
  iconSize: number;
  iconUrl: string;
}

export const Icon = ({ iconName, iconSize, iconUrl }: IIcon) => {
  return (
    <IconContainer>
      {iconName === "LinkedIn" && (
        <a href={iconUrl}>
          <BsLinkedin
            size={iconSize}
            color="#178cfc"
          />
        </a>
      )}

      {iconName === 'Gmail' && (
        <a href={iconUrl}>
          <SiGmail
            size={iconSize}
            color="#178cfc"
          />
        </a>
      )}
    </IconContainer>
  )
}