import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
  <Container>
    <FeatureImage />
    <Content>
      <ContentCard 
      date="March 22, 2020" 
      title="Kos el gahba" 
      excerpt="Kos el gahba bil tiz aboki" 
      slug="/test"
      />
    </Content>
  </Container>
  )
}

export default IndexPage
