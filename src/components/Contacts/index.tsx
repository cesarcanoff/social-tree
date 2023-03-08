import { ReactNode } from "react"
import { Container } from "./styles"

interface IContacts {
  children: ReactNode
}

export const Contacts = ({ children }: IContacts) => {
  return <Container>{children}</Container>
}