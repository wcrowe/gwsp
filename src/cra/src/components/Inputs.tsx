import React, { Component } from 'react'
import { TextField } from '@material-ui/core'

//const SignupForm = () => {
const Inputs= () => {
<TextField
    id="Email"
    label="Email"
    size="small"
    variant="outlined"
    type="text"
    name="Email"
    inputProps={{maxLength: 200, }}

  />
};


export default Inputs;