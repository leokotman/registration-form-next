import { Box, Button, Link } from '@mui/material';
import Image from 'next/image';

export const SocialButtons = () => {
  return (
    <Box display="flex" flexDirection="column" gap={1} width="100%">
      {['facebook', 'google', 'apple'].map((platform) => {
        const platformName =
          platform.charAt(0).toUpperCase() + platform.slice(1);

        return (
          <Button key={platform} variant="outlined" sx={{ gap: 3 }} fullWidth>
            <Image
              src={`/assets/icons/${platform}.svg`}
              width={24}
              height={24}
              alt={`${platform}-icon`}
            />
            <Link
              sx={{
                fontSize: '14px',
                fontWeight: 500,
                textTransform: 'initial',
                color: 'secondary.main',
              }}
            >
              Продолжить с {platformName}
            </Link>
          </Button>
        );
      })}
    </Box>
  );
};

export default SocialButtons;
