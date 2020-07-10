import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import moment from "moment";
import {
  Button,
  TextField,
  CssBaseline,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
} from "@material-ui/core";
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
  City: string;
  ZipCode: string;
  PhoneNumber: string;
  PhoneNumberExt: string;
  AlternatePhone: string;
};

const schema = yup.object().shape({
  FirstName: yup.string().required("First name is required"),
  LastName: yup.string().required("Last name is required"),
  Address: yup.string().required("Address is required"),
  City: yup.string().required("City is required"),
  ZipCode: yup.string().required("Zip is required"),
  PhoneNumber: yup.string().required("Phone is required"),
  Email: yup
    .string()
    .required("Email address is required")
    .email("Invalid email address"),
  // DOB: yup.string().test("DOB", "Must be at least 16.", (value) => {
  //   return moment().diff(moment(value), "years") >= 16;
  // }),
});

const useStyles = makeStyles({
  textField: {
    marginTop: "1em",
  },
  logo: {
    width: "100%",
  },

});

export const OnlineApp = () => {
  const { register, control, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const classes = useStyles();
  const onSubmit: SubmitHandler<FormData> = (data) =>
    console.log(JSON.stringify(data));
  return (
    <Grid container>
      {/* <DevTool control={control} /> */}
      <CssBaseline />
      <Typography variant="h4">Please fill out</Typography>
      <Grid container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item md={12}>
            <TextField
              id="Email"
              label="Email"
              size="small"
              variant="outlined"
              type="text"
              name="Email"
              inputProps={{maxLength: 200, }}
              error={!!errors.Email}
              helperText={errors.Email?.message}
              className={classes.textField}
              inputRef={register({ required: true })}
            />
          </Grid>
          {/* <Grid item xs={12}>
          //https://material-ui-pickers.dev/
            <TextField
              label="DOB"
              type="date"
              id="DOB"
              name="DOB"
              size="small"
              defaultValue=""//"2017-05-24"
              variant="outlined"
              error={!!errors.DOB}
              helperText={errors.DOB?.message}
              className={classes.textField}
              inputRef={register}
            />
          </Grid> */}
          <Grid item md={12}>
            <TextField
              label="First Name"
              type="text"
              id="FirstName"
              name="FirstName"
              inputProps={{maxLength: 200, }}
              size="small"
              variant="outlined"
              className={classes.textField}
              helperText={errors.FirstName?.message}
              error={!!errors.FirstName}
              inputRef={register({ required: true})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Middle Name"
              type="text"
              id="MiddleName"
              name="MiddleName"
              inputProps={{maxLength: 200, }}
              size="small"
              variant="outlined"
              className={classes.textField}
               inputRef={register({ required: false })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              type="text"
              id="LastName"
              name="LastName"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 200, }}
              helperText={errors.LastName?.message}
              error={!!errors.LastName}
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address Line 1"
              type="text"
              id="Address"
              name="Address"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 200, }}
              helperText={errors.Address?.message}
              error={!!errors.Address}
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address Line 2"
              type="text"
              id="AddressExt"
              name="AddressExt"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 200, }}
              inputRef={register({ required: false})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              type="text"
              id="City"
              name="City"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 200, }}
              helperText={errors.City?.message}
              error={!!errors.City}
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="ZipCode"
              type="text"
              id="ZipCode"
              name="ZipCode"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 15, }}
              helperText={errors.ZipCode?.message}
              error={!!errors.ZipCode}
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="PhoneNumber"
              type="text"
              id="PhoneNumber"
              name="PhoneNumber"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 20, }}
              helperText={errors.PhoneNumber?.message}
              error={!!errors.PhoneNumber}
              inputRef={register({ required: true})}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="PhoneNumberExt"
              type="text"
              id="PhoneNumberExt"
              name="PhoneNumberExt"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 20, }}
              helperText={errors.PhoneNumberExt?.message}
              error={!!errors.PhoneNumberExt}
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Alternate Phone"
              type="text"
              id="AlternatePhone"
              name="AlternatePhone"
              size="small"
              variant="outlined"
              className={classes.textField}
              inputProps={{maxLength: 20, }}
              helperText={errors.AlternatePhone?.message}
              error={!!errors.AlternatePhone}
              inputRef={register({ required: true })}
             />
          </Grid>
          {/*       

      <select name="State" ref={register({ required: true })}>
        <option value="CA">CA</option>
        <option value="FL">FL</option>
      </select>
      <input type="text" placeholder="ZipCode" name="ZipCode" ref={register({required: true, pattern: /12/i})} />
      <select name="County" ref={register({ required: true })}>
        <option value="Pasco">Pasco</option>
        <option value="Pinellas">Pinellas</option>
        <option value="Seminole">Seminole</option>
      </select>
      <input type="text" placeholder="Phone" name="Phone" ref={register({required: true, maxLength: 20})} />
      <input type="text" placeholder="PhoneExt" name="PhoneExt" ref={register({maxLength: 15})} />
      <input type="text" placeholder="AltPhone" name="AltPhone" ref={register({maxLength: 20})} />
      <input type="text" placeholder="EmContactFirstName" name="EmContactFirstName" ref={register({required: true, maxLength: 50})} />
      <input type="text" placeholder="EmLastName" name="EmLastName" ref={register({required: true, maxLength: 50})} />
      <input type="tel" placeholder="EmPhone" name="EmPhone" ref={register({required: true})} />
      <input type="text" placeholder="EmRelationship" name="EmRelationship" ref={register({required: true, maxLength: 50})} />
      <textarea name="Education" ref={register({maxLength: 200})} />
      <input type="number" placeholder="EmploymentHistory" name="EmploymentHistory" ref={register({maxLength: 200})} />
      <textarea name="Hobbies" ref={register({max: 200})} />
      <textarea name="VolunteerExperience" ref={register({maxLength: 200})} />
      <textarea name="CommunityAffiliations" ref={register({maxLength: 200})} />
      <select name="Referral" ref={register}>
        <option value="Advertisment">Advertisment</option>
        <option value="Other">Other</option>
      </select>
      <input type="text" placeholder="ReferralDetails" name="ReferralDetails" ref={register({maxLength: 200})} />

      <input name="Schedule" type="radio" value="Days" ref={register({ required: true })}/>
      <input name="Schedule" type="radio" value="Flexibile" ref={register({ required: true })}/>
      <input name="Schedule" type="radio" value="Other" ref={register({ required: true })}/>
      <input name="Schedule" type="radio" value="Weekends" ref={register({ required: true })}/>
      <textarea name="ScheduleExt" ref={register} />
      <input type="checkbox" placeholder="Service" name="Service" ref={register({required: true})} />
      <input type="checkbox" placeholder="HasGeographicPreference" name="HasGeographicPreference" ref={register} />
      <input type="checkbox" placeholder="GeographicPreference" name="GeographicPreference" ref={register} />
 */}
 
          <Button
            type="submit"
            variant="contained"
            disabled={!!errors.Email || !!errors.FirstName}
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};
