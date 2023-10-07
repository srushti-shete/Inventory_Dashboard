import React from "react";
import { useState } from "react";
import Header from "../../components/Header";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Grid,
  TextField,
} from "@mui/material";
import { useLogin } from "hooks/useLogin";
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';

const Login = () => {
  
  const theme = useTheme();
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(email, password)
    await login(email, password)
  }

  return (
    <Box
      m="5rem 2rem"
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
        <Header title="WELCOME" subtitle="Sign In to your dashboard" />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "theme.palette.secondary" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In          
          </Typography>
          <Box
            m="1rem"
            component="form"
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
              <Grid item xs={12}>
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
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: "0.5rem 0", background: theme.palette.primary[400],
                "&:hover": { backgroundColor: theme.palette.primary[300]} 
                  }}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Login
            </Button>
            <Typography 
              component="h4" 
              variant="h6"
              sx={{
                backgroundColor: theme.palette.background.alt,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Don't have an account? <Link href="/signup" color={theme.palette.secondary[300]} underline="none">Create one</Link>        
            </Typography>
            {error && 
              <Alert severity="error">{error} — check it out!</Alert>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;