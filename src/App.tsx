import { Card, Container, LinksContainer } from "./App.styles";
import { InstagramProfileLink } from "./components/InstagramProfileLink";
import { ProfilePicture } from "./components/ProfilePicture";

import '../styles/global.css';
import { LinkCard } from "./components/LinkCard";
import { Contacts } from "./components/Contacts";
import { Icon } from "./components/Icon";

function App() {

  return (
    <Container>
      <Card>
      <ProfilePicture imageUrl="https://www.github.com/cesarcanoff.png" />
      <InstagramProfileLink profileUsername="cesar.canoff" />

      <LinksContainer>
        <LinkCard title="GitHub" link="https://www.github.com/cesarcanoff" />
        <LinkCard title="Instagram" link="https://www.instagram.com/cesar.canoff" />
        <LinkCard title="LinkedIn" link="https://www.linkedin.com/in/cesarcanoff" />
      </LinksContainer>
      </Card>
      
      <Contacts>
        <Icon iconName="Gmail" iconSize={30} iconUrl="mailto:canoff.cesar@gmail.com" />
        <Icon iconName="LinkedIn" iconSize={30} iconUrl="https://www.linkedin.com/in/cesarcanoff" />
      </Contacts>
    </Container>
      )
}

export default App;
