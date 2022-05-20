import React from 'react';
import { NativeBaseProvider, Center, Text } from 'native-base';
import Navigator from './components/navigator/Navigator.js';
import Screen from './components/navigator/Screen.js';
import { INITIAL, ANIMATE, EXIT } from './components/navigator/Animations.js';

const App = () => {
	return (
		<NativeBaseProvider>
			<Navigator homeScreen={0} >
				<Screen id={0} next={0} prev={0} initial={INITIAL.Fade} animate={ANIMATE.Fade} exit={EXIT.Fade} >
					<Text color={"white"} >
						H E L L O   D O U M O !
					</Text>
				</Screen>
			</Navigator>
		</NativeBaseProvider>
	);
};

export default App;
