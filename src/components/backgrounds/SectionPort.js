import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const SectionPort = ({ className, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        uxBack: file(relativePath: { eq: "backgrounds/wood-wall.png" }) {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const uxBack = data.uxBack.childImageSharp.fluid;

  return (
    <BackgroundImage tag="div" className={className} fluid={uxBack}>
      {children}
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(SectionPort)`
  background-position: center;
  background-color: white;

  background-size: 800px;
  background-repeat: repeat-x;
`;

export default StyledBackgroundSection;
