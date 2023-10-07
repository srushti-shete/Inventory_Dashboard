import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useTheme } from "@mui/material";
import Header from "components/Header";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        InventoTracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function About() {
    const theme = useTheme();
    return (
        <Box m="3.5rem 2.5rem" display="flex" flexDirection="column" alignItems="center">
            <Header title="Team Members" />
        <Box
          sx={{
            bgcolor: theme.palette.background,
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={4} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column',}}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Srushti Shete
                      </Typography>
                      <Typography>
                        Class: Third year
                        <br/>
                        Branch: IT
                        <br/>
                        Roll no.: 60
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Contact</Button>
                      <Button size="small">Mail</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Shazmeen Shaikh
                      </Typography>
                      <Typography>
                        Class: Third year
                        <br/>
                        Branch: IT
                        <br/>
                        Roll no.: 58
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Contact</Button>
                      <Button size="small">Mail</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={4} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Mitali Rananavare
                      </Typography>
                      <Typography>
                        Class: Third year
                        <br/>
                        Branch: IT
                        <br/>
                        Roll no.: 51
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Contact</Button>
                      <Button size="small">Mail</Button>
                    </CardActions>
                  </Card>
                </Grid>
                {/* Repeat ends */}
            </Grid>
          </Container>
        </Box>
        {/* Footer */}
        <Box sx={{ bgcolor: theme.palette.background, p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Inventory Management App
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </Box>
    );
}
