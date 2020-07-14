import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Form, Col, Button, Spinner, Container } from "react-bootstrap";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

type FormData = {
  Email: string;
  DOB?: Date | null | undefined;
  FirstName: string;
  MiddleName?: string;
  LastName: string;
  Address: string;
  AddressExt?: string | null;
  City: string;
  StateId: string;
  ZipCode: string;
  //   PhoneNumber: string;
  //   PhoneNumberExt: string;
  //   AlternatePhone: string;
};

const schema = yup.object().shape({
  FirstName: yup.string().required("First name is required"),
  LastName: yup.string().required("Last name is required"),
  Address: yup.string().required("Address is required"),
  City: yup.string().required("City is required"),
  StateId: yup.string().required("State is required"),
  ZipCode: yup.string().required("Zip is required"),
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

const States = [
  { StateName: "Alabama", StateCode: "1" },
  { StateName: "Arkansa", StateCode: "2" },
  { StateName: "Florida", StateCode: "3" },
];

const MARKETING_ROLE_OPTIONS = [
  {
    label: "test",
    value: "1",
  },
  {
    label: "test 2",
    value: "2",
  },
  {
    label: "test 3",
    value: "3",
  },
  {
    label: "test 4",
    value: "4",
  },
];

const OnlineAppExample = (props: any) => {
  const { register, control, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [stateLU] = React.useState(States);

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
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              name="City"
              isInvalid={!!errors.City}
              ref={register}
              maxLength={200}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.City?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              name="StateId"
              ref={register}
              isInvalid={!!errors.StateId}
            >
              <option value="">Select A State</option>
              {stateLU.map((State) => (
                <option key={State.StateCode} value={State.StateCode}>
                  {State.StateName}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.StateId?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip Code"
              name="ZipCode"
              isInvalid={!!errors.ZipCode}
              ref={register}
              maxLength={15}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.ZipCode?.message}
            </Form.Control.Feedback>
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
      <DevTool control={control} /> {/* set up the dev tool */}
    </Container>
  );
};

export default OnlineAppExample;
