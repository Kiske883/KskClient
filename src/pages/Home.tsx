import { Grid } from '@mui/material';
import ArtistList from '../components/ArtistList';
import NewArtist from '../components/NewArtist';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 6 }}>
        <h2>Artist List</h2>
        <ArtistList></ArtistList>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <NewArtist></NewArtist>
      </Grid>
    </Grid>
  );
};

export default Home;