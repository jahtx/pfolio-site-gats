import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { graphql, useStaticQuery } from 'gatsby';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './contact.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ContactPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        twitterLogo: file(
          relativePath: { eq: "contact-logos/twitter-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 50
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
        githubLogo: file(
          relativePath: { eq: "contact-logos/github-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              width: 50
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
        linkedinLogo: file(
          relativePath: { eq: "contact-logos/linkedin-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 50
              transformOptions: { fit: FILL, grayscale: false }
            )
          }
        }
      }
    `
  );
  const [state, handleSubmit] = useForm('meqnyjkp');

  const twitterLogo = data.twitterLogo;
  const githubLogo = data.githubLogo;
  const linkedinLogo = data.linkedinLogo;

  return (
    <MainLayout pageClasses="contactPage general">
      <Container fluid="lg">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="m-0 pt-2">Contact</h1>
        <hr className="m-0" />
        {!state.succeeded ? (
          <Form onSubmit={handleSubmit} className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                name="_replyto"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Organization"
                name="organization"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message *</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" />
            </Form.Group>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button variant="primary" type="submit" disabled={state.submitting}>
              Send
            </Button>
          </Form>
        ) : (
          <p className="mt-4">Thanks for your message!</p>
        )}

        {/* <p className="mt-4">Thanks for your message!</p> */}

        <div className="text-center contactNote mt-3 mb-3">
          <a
            href="https://twitter.com/jah_uxdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              className="contactIcon"
              image={getImage(twitterLogo)}
              alt="Twitter Profile"
            />
          </a>
          <a
            href="https://github.com/jahtx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              className="contactIcon"
              image={getImage(githubLogo)}
              alt="Github Profile"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jameshernandez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              className="contactIcon"
              image={getImage(linkedinLogo)}
              alt="LinkedIn Profile"
            />
          </a>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ContactPage;
