'use client';

import { Box, Button, Link } from '@mui/material';
import Image from 'next/image';

const styles = {
  signUpLayout: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 56px',
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
      <Button sx={{ gap: 3, height: 'max-content' }}>
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
