import { ImageContainer, Image } from "./styles";

interface IProfilePicture {
  imageUrl: string;
}

export const ProfilePicture = ({ imageUrl } : IProfilePicture) => {
  return (
    <ImageContainer>
      <Image src={imageUrl} alt="User picture" />
    </ImageContainer>
  );
}