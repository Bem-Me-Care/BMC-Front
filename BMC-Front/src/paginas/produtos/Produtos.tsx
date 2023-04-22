import { Box, Container, Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import Navbartwo from '../../components/staticos/navbartwo/Navbartwo';
import Carousel from '../../components/staticos/carousel/Carousel';
import GridProdutos from '../../components/staticos/grids/GridProdutos';

function Produtos() {
    return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
         <Navbartwo />
            <Carousel />
        </Grid>
        
      </Grid>
      <Paper>
        <Box>
          <Box>
          <GridProdutos />
          </Box>
          {/* navbar #78a493 */}
          
        </Box>
      </Paper>
    </>
  );
}

export default Produtos;
