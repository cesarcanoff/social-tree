import { LinkCardContainer, LinkText } from "./styles"

interface ILinkCard {
  title: string;
  link: string;
}

export const LinkCard = ({ title, link }: ILinkCard) => {
  return (
    <LinkCardContainer href={link} target="_blank">
      <LinkText>{title}</LinkText>
    </LinkCardContainer>
  );
}