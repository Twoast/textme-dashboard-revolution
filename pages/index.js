import { Container, Grid } from '@mui/material';
import PageHeader from 'src/content/Dashboards/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import MixPanelUniqueSessions from 'src/content/Dashboards/MixPanel/UniqueSessions';

function Home() {
  return (
    <>
      <Head>
        <title>TextMe Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <MixPanelUniqueSessions />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;

Home.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
