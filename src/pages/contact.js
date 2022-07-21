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
        stampImage: file(relativePath: { eq: "contact-logos/stamp.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              placeholder: BLURRED
              formats: [WEBP]
              height: 150
              transformOptions: { fit: CONTAIN, cropFocus: CENTER }
            )
          }
        }
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
          <>
            <p className="pt-9-rem mt-4">
              I'm available for side-projects involving UX, web-development,
              general consulting, and full-time employment. Send me a note and
              we'll be in touch!
            </p>
            <div className="letterBack mt-4">
              <div className="letterInside">
                <Form onSubmit={handleSubmit}>
                  <div className="topSection">
                    <div className="topSection__left">
                      <Form.Group>
                        <Form.Label className="contactFormLabel">
                          Your name *
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="enter first/last name"
                          name="yourName"
                          required
                        />
                        <ValidationError
                          prefix="Name"
                          field="yourName"
                          errors={state.errors}
                        />
                      </Form.Group>{' '}
                      <Form.Group>
                        <Form.Label className="contactFormLabel">
                          Organization
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="enter organization"
                          name="organization"
                        />
                        <ValidationError
                          prefix="Organization"
                          field="organization"
                          errors={state.errors}
                        />
                      </Form.Group>
                    </div>
                    <GatsbyImage
                      image={getImage(data.stampImage)}
                      alt="Github Profile"
                    />
                  </div>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="contactFormLabel">
                      Email address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="_replyto"
                      placeholder="Enter email"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="contactFormLabel">
                      Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <div className="buttonContainer">
                    <Button
                      className="flushButton"
                      variant="primary"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Send
                    </Button>
                  </div>
                  <ValidationError errors={state.errors} />
                </Form>
              </div>
            </div>
          </>
        ) : (
          <p className="mt-4">Thanks for your message!</p>
        )}

        {/* <p className="mt-4">Thanks for your message!</p> */}
        <div className="text-center contactIconArea mt-5 mb-3">
          <a
            href="https://twitter.com/jah_uxdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GatsbyImage
              className="contactIcon"
              image={getImage(data.twitterLogo)}
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
              image={getImage(data.githubLogo)}
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
              image={getImage(data.linkedinLogo)}
              alt="LinkedIn Profile"
            />
          </a>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ContactPage;
