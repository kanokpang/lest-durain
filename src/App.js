import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Main from './page/Main';
import Consent from './page/Consent';
import Information from './page/Information';
import Thankyou from './page/Thankyou';

const THEME = createTheme({
  typography: {
  "fontFamily": `'Noto Sans Thai', 'Nunito', sans-serif;`,
  "fontSize": 12,
  }
});

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <div className="App">
        <>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/consent' component={Consent} />
            <Route path="/information" component={Information} />
            <Route path="/thankyou" component={Thankyou} />
          </Switch>
        </>
      </div>
      {/* <Router history={history}> */}
        {/* <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/consent" component={Consent} />
          <Route path="/information" component={Information} />
          <Route path="/thankyou" component={Thankyou} />
        </Switch> */}
      {/* </Router> */}
    </ThemeProvider>
    
    
    // <Router>
    // {/* <Switch> */}
    //   <Route path="/">
    //     <InformationPage />
    //   </Route>
    //   <Route path="/consent">
    //     <Consent />
    //   </Route>
    // {/* </Switch> */}
    // </Router>
  );
}

export default App;
