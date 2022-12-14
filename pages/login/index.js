import {
  Box,
  Container,
  Button,
  styled,
  Card,
  Typography
} from '@mui/material';
import { pink } from '@mui/material/colors';

import FavoriteIcon from '@mui/icons-material/Favorite';
import BaseLayout from 'src/layouts/BaseLayout';
import Head from 'next/head';
import Logo from 'src/components/LogoSign';

import GoogleIcon from '@mui/icons-material/Google';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(6)};
`
);

function Login() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>TextMe Dashboard - Login</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <Logo />
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <Button
                onClick={() =>
                  signIn('google', {
                    callbackUrl: 'http://localhost:3000/login/'
                  })
                }
                variant="outlined"
                startIcon={<GoogleIcon />}
                size="large"
              >
                Log-in using Google
              </Button>
            </Card>
            <Container maxWidth="lg" sx={{ mt: 2 }}>
              <Typography textAlign="center" variant="subtitle1">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                  }}
                >
                  Made with &nbsp;
                  <FavoriteIcon sx={{ color: pink[500] }} />
                  &nbsp; by the tech team
                </div>
              </Typography>
            </Container>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) return { props: {} };
  return {
    redirect: {
      destination: '/'
    }
  };
};
