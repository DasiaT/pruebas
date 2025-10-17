import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import MoreTimeTwoToneIcon from '@mui/icons-material/MoreTimeTwoTone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Paper  from '@mui/material/Paper';
import { IMenu } from '../Interfaces/IMenu';
import { Item_Menu } from '../Components/Componente_Item';
import ShowUser from '../Pages/User/Page/ShowUser';

const Bottom_Navigation: React.FC = () => {

  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  const pages: IMenu[] = [
    { label: 'Inventario', icon: <StorefrontTwoToneIcon />, path: '/', content: '' },
    { label: 'Empleados', icon: <PersonAddAltTwoToneIcon />, path: '/empleados', content: <ShowUser></ShowUser>},
    { label: 'Marcaje', icon: <MoreTimeTwoToneIcon />, path: '/marcaje', content: ''},
    { label: 'Salir', icon: <ExitToAppIcon />, path: '/LoginOut', content: ''},
  ];

  return (
    <Router>
      <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
      <Box sx={{ flexGrow: 10 , height:'120px'}}>
      <Grid2 className="Menu">
            <BottomNavigation showLabels value={value} onChange={handleChange}>
              {pages.map((page, index) => (
                <Grid2 spacing={2} key={index}>
                  <Item_Menu elevation={0}>
                      <NavLink to={page.path} style={{ textDecoration: 'none', fontWeight: 'bold' , width:'100%', height:'100%' }}>
                        <BottomNavigationAction key={index} label={page.label} icon={page.icon} />
                        <br></br>
                        {page.label}
                      </NavLink>
                      <br></br>
                  </Item_Menu>
                </Grid2>
              ))}
            </BottomNavigation>
          </Grid2>
      </Box>
      <Routes>
        <Route path="/" element={''} />
        <Route path="/empleados" element={<ShowUser></ShowUser>} />
        <Route path="/marcaje" element={''} />
        <Route path='/cerrar_sesion' element={''}></Route>
      </Routes>
      </Paper>
    </Router>
  );
};

export default Bottom_Navigation;
