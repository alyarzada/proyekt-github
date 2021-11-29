import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({findItem}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    console.log(findItem)
  },[])

  return (
    <Box sx={{ width: '100%', bgcolor: 'white' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Xususiyyetler" {...a11yProps(0)} />
          <Tab label="Istifadeci Reyleri" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <table className='table table-striped'>
                <tbody>
                    <tr>
                        <td>Model:</td>
                        <td>{findItem.title}</td>
                    </tr>
                    <tr>
                        <td>Category:</td>
                        <td>{findItem.category}</td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>${findItem.price}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{findItem.description}</td>
                    </tr>
                </tbody>
            </table>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form className='row'>
            <div className="col-md-6">
                <label htmlFor="firstName" className='form-label text-dark'>First Name</label>
                <input type="text" className='form-control' id='firstName' />
            </div>
            <div className="col-md-6">
                <label htmlFor="lastName" className='form-label text-dark'>Last Name</label>
                <input type="text" className='form-control' id='lastName' />
            </div>
            <div className="col-md-8">
                <label htmlFor="email" className='form-label text-dark'>E-mail</label>
                <input type="text" className='form-control' id='email' />
            </div>
            <div className="col-md-4">
                <label htmlFor="number" className='form-label text-dark'>Phone Number</label>
                <input type="text" className='form-control' id='number' />
            </div>
        </form>
      </TabPanel>
    </Box>
  );
}
