'use client';

import { Box, Button, Link } from '@mui/material';
import Image from 'next/image';

const styles = {
  signUpLayout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: {
      lg: 'row',
      xs: 'column',
    },
    alignItems: 'center',
    padding: {
      lg: '30px 56px',
      md: 2,
      xs: 1,
    },
  },
  linkButton: {
    color: 'warning.main',
  },
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={styles.signUpLayout}>
      <Button
        sx={{
          gap: 3,
          height: 'max-content',
          alignSelf: {
            lg: 'baseline',
            xs: 'flex-start',
          },
        }}
      >
        <Image
          src="/assets/icons/arrow-left.svg"
          width={15}
          height={15}
          alt="arrow-back"
        />
        <Link href="/" sx={styles.linkButton}>
          Назад
        </Link>
      </Button>
      {children}
    </Box>
  );
}
