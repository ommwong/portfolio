import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profileport.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Full Stack Developer</SubTitle>
            </div>
            <div>
              <Title> Hi, I’m Mo 👋 </Title>
              <Text> I'm a full stack developer and life-long student from <b className="text-primary lined-link">Los Angeles 🌴 </b>.
              </Text>
              <Text> I love coding - I'm both excited by how much I can learn in a short amount of time and <b className="text-primary lined-link">humbled</b> by how much I have yet to learn. 🎢 ⛰
              </Text>
              <Text> As a developer, I've worked on challenging projects alongside incredibly talented developers who have raised the bar for what I can build and <b className="text-primary lined-link">learn</b> in full stack development.
              </Text>
              <Text> In a prior life, I was a freelance digital marketing consultant. With my experience in digital marketing, I've had the opportunity to create some <b className="text-primary lined-link">cool</b> applications that are both useful and memorable to users.
              </Text>
              <Text> When I'm not in front of the 💻, I read 50+ books a year and I love to cook 🍝.
              </Text>
              <ResumeButton href="MoWongResume.pdf" target="_blank"> Download my resume 👀 </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
