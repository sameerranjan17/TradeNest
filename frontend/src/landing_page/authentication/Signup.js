import * as React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar, Alert } from "@mui/material";
// Assumes AuthContext handles your global auth state later
// import { AuthContext } from "../contexts/AuthContext"; 

const defaultTheme = createTheme();

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      if (response.data.success) {
        setSnackbar({ open: true, message: "Account created successfully!", severity: "success" });
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.response?.data?.message || "Registration failed. Try again.",
        severity: "error"
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80)", // Modern trading background
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: "flex", flexDirection: "column", align盤Items: "center", justifyContent: "center", height: "80%" }}>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Your TradeNest Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: "100%" }}>
              <TextField margin="normal" required fullWidth id="username" label="Username" name="username" autoFocus value={formData.username} onChange={handleInputChange} />
              <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" value={formData.email} onChange={handleInputChange} />
              <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" value={formData.password} onChange={handleInputChange} />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, py: 1.2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign In
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>{snackbar.message}</Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
