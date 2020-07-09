import * as React from "react";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    grid: {
      width: "100%",
      margin: 0
    },
    fullWidth: {
      width: "100%"
    },
    formItem: {
      textAlign: "left"
    }
  })
);


const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  emailAddress: yup
    .string()
    .required("Email address is required")
    .email("Invalid email address"),
    confirmPassword: yup.string()
    .oneOf([yup.ref("password"), ""],"Passwords must match")
    .required("Please confirm password")
});

const SignupForm = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <Paper className={classes.root}>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Grid container className={classes.grid} spacing={3}>
          <Grid className={classes.formItem} item xs={6}>
            <TextField
              error={errors.firstName}
              helperText={errors.firstName?.message}
              inputRef={register}
              variant="outlined"
              fullWidth
              label="First Name"
              name="firstName"
            />
          </Grid>
          <Grid className={classes.formItem} item xs={6}>
            {/* example here if inputRef was not exposed. */}
            <Controller
              fullWidth
              variant="outlined"
              label="Last Name"
              error={errors.lastName}
              helperText={errors.lastName?.message}
              as={TextField}
              control={control}
              name="lastName"
            />
            {/* <TextField
              name="lastName"
              label="Last Name"
              variant="outlined"
              inputRef={register}
              fullWidth
            /> */}
          </Grid>
          <Grid item xs={12}>
            <TextField
            className={classes.fullWidth}
            inputRef={register}
            error={errors.password}
            helperText={errors.password?.message}
            variant="outlined"
            type="password"
            label="Password"
            name="password" />
            </Grid>
            <Grid item xs={12}>
            <TextField
            className={classes.fullWidth}
            inputRef={register}
            error={errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
            variant="outlined"
            type="password"
            label="Confirm Password"
            name="confirmPassword" />
            </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.fullWidth}
              inputRef={register}
              error={errors.emailAddress}
              helperText={errors.emailAddress?.message}
              variant="outlined"
              label="Email Address"
              name="emailAddress"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
        {Object.keys(errors).length > 0 ? (
          <label>Errors: {JSON.stringify(errors, null, 2)}</label>
        ) : (
          ""
        )}
      </form>
    </Paper>
  );
};

export default SignupForm;