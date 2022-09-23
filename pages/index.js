import { Container } from '@mui/material';
import PageHeader from 'src/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';

function Home() {
  return (
    <>
      <Head>
        <title>TextMe Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg"></Container>
    </>
  );
}

export default Home;

Home.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;
