import {
  Box,
  TextField,
  MenuItem,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
  FormGroup,
  InputLabel,
  Button,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const socialMediaOptions = [
  { label: 'Telegram', value: 'telegram', placeholder: '@username' },
  { label: "What's App", value: 'whatsapp', placeholder: '+333 999 999 99 99' },
  { label: 'Facebook', value: 'facebook', placeholder: 'https://' },
  { label: 'Instagram', value: 'instagram', placeholder: '@username' },
  { label: 'LinkedIn', value: 'linkedin', placeholder: 'https://' },
];

interface PasswordFormProps {
  selectedSocial: {
    value: string;
    placeholder: string;
  };
  onSocialChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  socialMediaValue: string;
  onSocialMediaValueChange: (value: string) => void;
  password: string;
  onChangePassword: (value: string) => void;
}

export const PasswordForm = ({
  selectedSocial,
  onSocialChange,
  socialMediaValue,
  onSocialMediaValueChange,
  password,
  onChangePassword,
}: PasswordFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <FormGroup sx={{ width: '100%' }}>
      <Box display="flex" flexDirection="column" width="100%" gap={1}>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            required
            value={password}
            onChange={(e) => onChangePassword(e.target.value)}
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
          fullWidth
          value={selectedSocial.value}
          onChange={onSocialChange}
        >
          {socialMediaOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          placeholder={selectedSocial.placeholder}
          value={socialMediaValue}
          onChange={(e) => onSocialMediaValueChange(e.target.value)}
          sx={{ mb: 3 }}
          helperText="Оставь свою соцсеть и получи WIXI токены в 50$"
        />

        <FormControlLabel
          control={<Checkbox color="warning" />}
          label={
            <Typography>
              Я согласен с{' '}
              <Link>
                Условиями использования, Политикой конфиденциальности, AML/KYC
                процедурами, Использованием файлов Cookies
              </Link>
            </Typography>
          }
        />
        <Button
          variant="contained"
          fullWidth
          onClick={() => {}}
          sx={{ textTransform: 'capitalize', mt: '12px' }}
        >
          Продолжить
        </Button>
      </Box>
    </FormGroup>
  );
};

export default PasswordForm;
