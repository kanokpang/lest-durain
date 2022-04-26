import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { createBrowserHistory } from "history";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import InformationPage from './page/InformationPage';
import Consent from './page/Consent';
import Information from './page/Information';
import Thankyou from './page/Thankyou';

const THEME = createTheme({
  typography: {
  "fontFamily": `'Noto Sans Thai', 'Nunito', sans-serif;`,
  "fontSize": 12,
  }
});

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={InformationPage} />
          <Route path="/consent" component={Consent} />
          <Route path="/information" component={Information} />
          <Route path="/thankyou" component={Thankyou} />
        </Switch>
      </Router>
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
