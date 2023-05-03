import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagens from '../listaProduto/ListaProduto';
import './TabProdutos.css';
import Noticias from '../../noticias/Noticias';

function TabProdutos() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
      setValue(newValue);
    }
    return (
      <>
        <TabContext value={value}>
          <AppBar position="static" >
            <Tabs className='tabProd'centered onChange={handleChange}>
              <Tab label="Recomendados para você" value="1" />
              <Tab label="Noticias" value="3" />
              
            </Tabs>
          </AppBar>
          <TabPanel value="1" >
            <Box>
              <ListaPostagens />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Typography variant="h5" gutterBottom component="h5" align="center" className="titulo">Recomendados para você</Typography>
          </TabPanel>
          <TabPanel value="3">
            <Noticias/>
          </TabPanel>
        </TabContext>
      </>
    );
  }

  export default TabProdutos;

