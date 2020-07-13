import React, { useEffect, useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Formik } from "formik";
import { Form, Col, Button, Spinner, Container } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  email_address: yup
    .string()
    .email("Email address must be a valid email")
    .lowercase()
    .required("Email address is a required field"),
  password: yup.string().min(8).required("Password is a required field"),
});

type FormData = {
  // Email: string;
  // // DOB: Date;
  // FirstName: string;
  // MiddleName?: string;
  // LastName: string;
  // Address: string;
  // AddressExt?: string;
  // City: string;
  // ZipCode: string;
  // PhoneNumber: string;
  // PhoneNumberExt: string;
  // AlternatePhone: string;
  email_address: string;
  password: string;
};

const initialValues = {
  email_address: "",
  password: "",
};

const ContactForm: React.FC<{}> = () => {
  //  const ContactForm: React.FC<RouteComponentProps> = ({ history }) => {

  //const { setShowNavItems } = useContext(navbarContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log({ values });
        setSubmitting(false);
        resetForm();
        alert(JSON.stringify(values, null, 2));
        
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        handleReset,
        values,
        touched,
        isValid,
        errors,
        isSubmitting,
      }) => (
        <Container>
          <Form  onSubmit={()=>handleSubmit()}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email Address"
                  name="email_address"
                  value={values.email_address}
                  isInvalid={!!errors.email_address}
                  isValid={touched.email_address && !errors.email_address}
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email_address}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  isInvalid={!!errors.password}
                  isValid={touched.password && !errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                {isSubmitting ? (
                  <Button variant="primary" size="lg" disabled block>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true" 
                      
                    />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    active
                    block
                  >
                    Sign in
                  </Button>
                )}
              </Form.Group>
            </Form.Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default ContactForm;
