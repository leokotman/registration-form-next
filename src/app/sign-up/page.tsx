'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Paper,
  Typography,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
  Link,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';

const socialMediaOptions = [
  { label: "What's App", value: 'whatsapp' },
  { label: 'Facebook', value: 'facebook' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Telegram', value: 'telegram' },
  { label: 'LinkedIN', value: 'linkedin' },
];
const STEPS = {
  email: 'email',
  password: 'password',
};

const styles = {
  paper: {
    width: 670,
    height: 'clamp(95%, 700px, 800px)',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 4,
    borderRadius: 2,
  },
  heading: {
    fontSize: '2.125rem',
    fontWeight: 600,
  },
  linkButton: {
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'initial',
    color: 'secondary.main',
  },
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [selectedSocial, setSelectedSocial] = useState(
    socialMediaOptions[0].value
  );
  const [inputValue, setInputValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(STEPS.email);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSocialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSocial(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.container}>
        <Image
          src="/assets/icons/logo.png"
          alt="wixi-logo"
          width={67}
          height={67}
        />
        <Typography component="h4" sx={styles.heading}>
          Регистрация
        </Typography>

        {currentStep === STEPS.email ? (
          <>
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
              width="100%"
              justifyContent="center"
            >
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
              />

              <Button
                variant="contained"
                fullWidth
                onClick={() => setCurrentStep(STEPS.password)}
              >
                Продолжить
              </Button>
              <Typography align="center">
                Уже есть аккаунт?
                <Link href="/sign-in" padding={1}>
                  Войти
                </Link>
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                margin: '32px 20px',
              }}
            >
              <Box
                sx={{
                  height: '1px',
                  backgroundColor: 'grey',
                  flex: 1,
                }}
              />

              <Typography
                sx={{
                  padding: '0 16px',
                  color: 'grey',
                }}
              >
                Или
              </Typography>

              <Box
                sx={{
                  height: '1px',
                  backgroundColor: 'grey',
                  flex: 1,
                }}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap={1} width="100%">
              <Button variant="outlined" sx={{ gap: 3 }} fullWidth>
                <Image
                  src="/assets/icons/facebook.svg"
                  width={24}
                  height={24}
                  alt="facebook-icon"
                />
                <Link sx={styles.linkButton}>Продолжить с Facebook</Link>
              </Button>
              <Button variant="outlined" sx={{ gap: 3 }} fullWidth>
                <Image
                  src="/assets/icons/google.svg"
                  width={24}
                  height={24}
                  alt="google-icon"
                />
                <Link sx={styles.linkButton}>Продолжить с Google</Link>
              </Button>
              <Button variant="outlined" sx={{ gap: 3 }} fullWidth>
                <Image
                  src="/assets/icons/apple.svg"
                  width={24}
                  height={24}
                  alt="apple-icon"
                />
                <Link sx={styles.linkButton}>Продолжить с Apple</Link>
              </Button>
            </Box>
          </>
        ) : (
          <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <TextField
              select
              label="Social Media"
              fullWidth
              value={selectedSocial}
              onChange={handleSocialChange}
              sx={{ mb: 3 }}
            >
              {socialMediaOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              placeholder={
                selectedSocial === 'whatsapp'
                  ? '+333 999 999 99 99'
                  : '@username'
              }
              value={inputValue}
              onChange={handleInputChange}
              sx={{ mb: 3 }}
            />
          </>
        )}
      </Box>
    </Paper>
  );
};

export default SignUp;
