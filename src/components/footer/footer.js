import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: 'https://www.instagram.com/comunidadecristaavivarte/',
  twitter: 'https://www.instagram.com/comunidadecristaavivarte/',
  instagram: 'https://www.instagram.com/comunidadecristaavivarte/',
};

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'black',
        color: 'palegoldenrod',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="palegoldenrod" gutterBottom>
              Comunidade Cristã Avivar-te
            </Typography>
            {/* Add your logo component or image here */}
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="palegoldenrod" gutterBottom>
              Ações sociais
            </Typography>
            <Link href="#" color="inherit" display="block">Atendimento</Link>
            <Link href="#" color="inherit" display="block">Cesta básica</Link>
            <Link href="#" color="inherit" display="block">Clinica de recuperação</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="palegoldenrod" gutterBottom>
              Ministerios
            </Typography>
            <Link href="#" color="inherit" display="block">Barueri - SP</Link>
            <Link href="#" color="inherit" display="block">Itapevi - SP</Link>
            <Link href="#" color="inherit" display="block">Sumare - SP</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="palegoldenrod" gutterBottom>
              Escola Crescer
            </Typography>
            <Link href="#" color="inherit" display="block">Seminário</Link>
            <Link href="#" color="inherit" display="block">Devocionais</Link>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="palegoldenrod" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }}>
          © 2024 Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;