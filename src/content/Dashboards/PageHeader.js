import { Typography, Avatar, Grid, useTheme } from '@mui/material';
import { useSession } from 'next-auth/react';

function PageHeader() {
  const { data: session } = useSession();
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={session.user.name}
          src={session.user.image}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {session.user.name}!
        </Typography>
        <Typography variant="subtitle2">
          If you encounter any problem, please reach out to the{' '}
          <a href="mailto:backend@go-text.me">Backend Team</a>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
