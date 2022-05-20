import React, { useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { Box, PresenceTransition } from 'native-base';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Router from './Router.js';

const Screen = ({ children, id, next, prev, initial, animate, exit }) => {
	const { navigate, screens } = useContext(Router);
	const screenSize = useWindowDimensions();
	return (
		<TapGestureHandler>
			<PresenceTransition initial={initial} animate={animate} exit={exit} visible={screens[id]} >
				<Box w={screenSize.width} h={screenSize.height} position={"fixed"} top={0} left={0} bgColor={"black"} >
					{children}
				</Box>
			</PresenceTransition>
		</TapGestureHandler>
	);
};

export default Screen;
