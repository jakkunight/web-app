import React from 'react';
import { NativeBaseProvider, Center, Text } from 'native-base';
import Navigator from './components/navigator/Navigator.js';
import Screen from './components/navigator/Screen.js';
import { INITIAL, ANIMATE, EXIT } from './components/navigator/Animations.js';

const App = () => {
	return (
		<NativeBaseProvider>
			<Navigator homeScreen={0} >
				<Screen id={0} next={1} prev={0} initial={INITIAL.Fade} animate={ANIMATE.Fade} exit={EXIT.Fade} >
					<Text color={"white"} >
						Hello World!
					</Text>
				</Screen>
			</Navigator>
		</NativeBaseProvider>
	);
};

export default App;
