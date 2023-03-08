import { Link } from "./styles";

interface IInstagramProfileLink {
  profileUsername: string;
}

export const InstagramProfileLink = ({ profileUsername }: IInstagramProfileLink) => {
  return <Link href={`https://instagram.com/${profileUsername}`}>@{profileUsername}</Link>
}