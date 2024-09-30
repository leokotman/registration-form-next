'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Box, Paper, Typography } from '@mui/material';

import { EmailForm } from './components/EmailForm';
import SocialButtons from './components/SocialButtons';
import { Divider } from './components/Divider';
import PasswordForm from './components/PasswordForm';

const socialMediaOptions = [
  { label: 'Telegram', value: 'telegram', placeholder: '@username' },
  { label: "What's App", value: 'whatsapp', placeholder: '+333 999 999 99 99' },
  { label: 'Facebook', value: 'facebook', placeholder: 'https://' },
  { label: 'Instagram', value: 'instagram', placeholder: '@username' },
  { label: 'LinkedIn', value: 'linkedin', placeholder: 'https://' },
];

const STEPS = {
  email: 'email',
  password: 'password',
};

const styles = {
  paper: {
    width: {
      lg: 670,
      md: '80%',
      xs: '95%',
    },
    height: 700,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: {
      lg: '20px',
      xs: '6px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: {
      lg: '57%',
      md: '70%',
      xs: '90%',
    },
    borderRadius: 2,
  },
  heading: {
    fontSize: {
      lg: '2.125rem',
      xs: '1.5rem',
    },
    fontWeight: 600,
    margin: '20px 0 32px',
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
  const [selectedSocial, setSelectedSocial] = useState({
    value: socialMediaOptions[0].value,
    placeholder: socialMediaOptions[0].placeholder,
  });
  const [socialMediaValue, setSocialMediaValue] = useState('');
  const [password, setPassword] = useState('');

  const [currentStep, setCurrentStep] = useState(STEPS.email);

  const handleSocialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSocial({
      value: event.target.value,
      placeholder:
        socialMediaOptions.find((media) => media.value === event.target.value)
          ?.placeholder ?? 'Your social media account',
    });
  };

  return (
    <Paper sx={styles.paper} elevation={0}>
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
            <EmailForm
              email={email}
              setEmail={setEmail}
              onGoNext={() => setCurrentStep(STEPS.password)}
            />

            <Divider text="Или" />

            <SocialButtons />
          </>
        ) : (
          <PasswordForm
            selectedSocial={selectedSocial}
            onSocialChange={handleSocialChange}
            socialMediaValue={socialMediaValue}
            onSocialMediaValueChange={setSocialMediaValue}
            password={password}
            onChangePassword={setPassword}
          />
        )}
      </Box>
    </Paper>
  );
};

export default SignUp;
