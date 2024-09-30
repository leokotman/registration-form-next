import { Box, Button, Link, TextField, Typography } from '@mui/material';

interface EmailFormProps {
  email: string;
  setEmail: (email: string) => void;
  onGoNext: () => void;
}

export const EmailForm = ({ email, setEmail, onGoNext }: EmailFormProps) => {
  return (
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
        type="email"
      />

      <Button
        variant="contained"
        fullWidth
        onClick={onGoNext}
        sx={{ textTransform: 'capitalize' }}
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
  );
};
