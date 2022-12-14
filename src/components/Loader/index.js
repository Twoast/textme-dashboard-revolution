import { Box, Container, styled } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

const MainContent = styled(Box)(
  () => `
      height: 100%;
      display: flex;
      flex: 1;
      flex-direction: column;
  `
);

const LogoWrapper = styled(Box)(
  ({ theme }) => `
        display: flex;
        text-decoration: none;

        &:hover {
          text-decoration: none;
        }
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

function Loader() {
  return (
    <>
      <Head>
        <title>Textme Dashboard - Loading...</title>
      </Head>
      <MainContent>
        <TopWrapper>
          <Container maxWidth="md">
            <LogoWrapper>
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' }
                }}
              >
                <Image
                  src="/static/images/logo/logo-loader.gif"
                  width="600"
                  height="600"
                  priority
                />
              </Box>
            </LogoWrapper>
          </Container>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Loader;
