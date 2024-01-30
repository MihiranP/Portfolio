import React from 'react';
import './App.css';
import { ThemeProvider, styled } from 'styled-components';
import MuiThemeProvider from '@mui/material/styles/ThemeProvider';
import appTheme from './theme/theme'
import Header from './components/header'
import { Box, } from '@mui/material';

function App() {

	return (
		<MuiThemeProvider theme={appTheme}>

			<ThemeProvider theme={appTheme}>
				<AppContainer className='App' id='root'>
					<Header />
					<BodyContainer>
					</BodyContainer>
				</AppContainer>
			</ThemeProvider>
		</MuiThemeProvider>
	);
}

const AppContainer = styled.div`
  text-align: center;
  font-family: ${(props) => props.theme.typography.fontFamily} !important;
`;

const BodyContainer = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.palette.common.black};
`;

export default App;
