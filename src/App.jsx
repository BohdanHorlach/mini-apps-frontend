import './App.css';
import MyCard from './components/MyCard';
import ListCard from './components/ListCard'
import { useState, useEffect } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';


function App() {
  const [value, setValue] = useState(0);
  const tg = window.Telegram.WebApp;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    tg.requestContact();
  }, [tg])

  return (
    <div className='centered'>
      <Box sx={{
        p: 2,
        width: "-webkit-fill-available"
      }}>
        <MyCard title="First card" discription="Discription on first card" />
        <MyCard title="Second card" discription="Discription on Second card" />
      </Box>

      <ListCard>
        <MyCard title="Card" discription="Discription on card Discription on card" isInlineBlock={true} />
        <MyCard title="Card" discription="Discription on card Discription on card" isInlineBlock={true} />
        <MyCard title="Card" discription="Discription on card Discription on card" isInlineBlock={true} />
      </ListCard>

      <Box width="100%">
        <TabContext value={value}>
          <div>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
              <Tab label="Item One" value={0} />
              <Tab label="Item Two" value={1} />
              <Tab label="Item Three" value={2} />
            </TabList>
          </div>
          <TabPanel value={0}><MyCard title="Item One" discription="Item One from tabs" /></TabPanel>
          <TabPanel value={1}><MyCard title="Item Two" discription="Item Two from tabs" /></TabPanel>
          <TabPanel value={2}><MyCard title="Item Three" discription="Item Three from tabs" /></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default App;
