import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Avatar from "@mui/material/Avatar";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {
  Box,
  Button,
  Typography,
  useTheme,
  Grid,
  TextField,
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useSignup } from "../../hooks/useSignup"
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';

const Signup = () => {
  
  const theme = useTheme();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [occupation, setOccupation] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [role, setRole] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(name, email, password, city, state, country, occupation, phoneNumber, role)
    // await signup(name, email, password, city, state, country, occupation, phoneNumber, role)
    await signup(name, email, password, city, state, country, occupation, phoneNumber, role)
  }

  return (
    <Box
      m="2rem 20rem"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        gap: "3rem"
      }}
    >
      <Box
        pt="2rem"
        sx={{
          backgroundColor: theme.palette.background.alt,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.2rem",
        }}
      >
        <Header title="WELCOME" subtitle="Create a new account" />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "theme.palette.secondary"}}>
            <AccountCircleOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up        
          </Typography>
          <Box
            m="1rem"
            component="form"
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
            {/* name, email, password, city, state, country, occupation, phoneNumber, role */}
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)} 
                  value={name}
                  autoFocus
                />
              </Grid>
             {/*email, password, city, state, country, occupation, phoneNumber, role */}
              <Grid item xs={6}>
                <TextField
                  inputProps={{
                    autoComplete: "new-email",
                    form: {
                      autoComplete: "off",
                    },
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  autoFocus
                />
              </Grid>
            {/* city, state, country, occupation, phoneNumber, role */}
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                  value={phoneNumber}
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  onChange={(e) => setRole(e.target.value)} 
                  value={role}
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="occupation"
                  label="Occupation"
                  name="occupation"
                  onChange={(e) => setOccupation(e.target.value)} 
                  value={occupation}
                  autoFocus
                />
              </Grid>
              <Grid item xs={3}>
                <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="City"
                        fullWidth
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Thane"}>Thane</MenuItem>
                    <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
                    </Select>
              </Grid>
            {/* country, occupation, phoneNumber, role */}
            <Grid item xs={3}>
                <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="State"
                        fullWidth
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                    <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
                    <MenuItem value={"Rajasthan"}>Rajasthan</MenuItem>
                    <MenuItem value={"Jammu & Kashmir"}>Jammu & Kashmir</MenuItem>
                    <MenuItem value={"Haryana"}>Haryana</MenuItem>
                    <MenuItem value={"West Bengal"}>West Bengal</MenuItem>
                    </Select>
              </Grid>
            {/* occupation, phoneNumber, role */}
            <Grid item xs={3}>
                <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Country"
                        fullWidth
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"America"}>America</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Greenland"}>Greenland</MenuItem>
                    <MenuItem value={"Ireland"}>Ireland</MenuItem>
                    <MenuItem value={"Ratnagiri"}>Ratnagiri</MenuItem>
                </Select>
            </Grid>
              <Grid item xs={3}>
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt:"1.8rem", p: "0.5rem 0", background: theme.palette.primary[400],
                        "&:hover": { backgroundColor: theme.palette.primary[300]} 
                        }}
                    onClick={handleSubmit}
                    disabled={isLoading}
                    >
                    Signup
                </Button>
              </Grid>
            </Grid>
              {error && 
                <Alert 
                  severity="error" 
                  sx= {{ 
                    mt: "1rem",
                    justifyContent: "center",
                    alignItems: "center", 
                  }}
                  fullWidth
                >
                  {error} — check it out!
                </Alert>
              }
              <Typography 
                component="h4" 
                variant="h6"
                sx={{
                  mt: "1rem",
                  backgroundColor: theme.palette.background.alt,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Already have an account? <Link href="/login" color={theme.palette.secondary[300]} underline="none">Login</Link>        
              </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;