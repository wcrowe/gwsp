import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import { Form, Col, Button, Spinner, Container } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

type FormData = {
  Email: string;
  // DOB: Date;
  FirstName: string;
  MiddleName?: string;
  LastName: string;
  Address: string;
  AddressExt?: string;
  //   City: string;
  //   ZipCode: string;
  //   PhoneNumber: string;
  //   PhoneNumberExt: string;
  //   AlternatePhone: string;
};

const schema = yup.object().shape({
  FirstName: yup.string().required("First name is required"),
  LastName: yup.string().required("Last name is required"),
  Address: yup.string().required("Address is required"),
  //   City: yup.string().required("City is required"),
  //   ZipCode: yup.string().required("Zip is required"),
  //   PhoneNumber: yup.string().required("Phone is required"),
  Email: yup
    .string()
    .required("Email address is required")
    .email("Invalid email address"),
  // DOB: yup.string().test("DOB", "Must be at least 16.", (value) => {
  //   return moment().diff(moment(value), "years") >= 16;
  // }),
});

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// use as  <Form.Control type="text" ref={register({ required: true }) as RBRef}></Form.Control>
type RBRef = string & ((ref: Element | null) => void);

//  <Input ref={register} name="LastName" />
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

const OnlineAppExample = () => {
  const { register, control, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              name="Email"
              ref={register}
              maxLength={100}
              isInvalid={!!errors.Email}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.Email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="FirstName"
              isInvalid={!!errors.FirstName}
              ref={register}
              maxLength={100}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.FirstName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridMiddleName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Middle Name"
              name="MiddleName"
              ref={register}
              maxLength={100}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="LastName"
              isInvalid={!!errors.LastName}
              ref={register}
              maxLength={100}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.LastName?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              name="Address"
              isInvalid={!!errors.Address}
              ref={register}
              maxLength={200}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.Address?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddressExt">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address 2"
              name="AddressExt"
              ref={register}
              maxLength={200}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridSubmit">
            <Button type="submit" variant="primary" size="lg" active block>
              Sign in
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default OnlineAppExample;
