import React, { useState, useEffect, Children } from 'react';
import { useWindowDimensions } from 'react-native';
import { Box } from 'native-base';
import Router from './Router.js';

const Navigator = ({ children, homeScreen }) => {
	const screenSize = useWindowDimensions();
	const [ activeScreen, setActiveScreen ] = useState(homeScreen);
	const loadScreens = () => {
        let components = Children.toArray(children);
        let aux = [];
        for(let i = 0; i < components.length; i++){
            if(i !== activeScreen){
                aux = [...aux, false];
            }else{
                aux = [...aux, true];
            }
        }
        return aux;
    };
    const [ screens, setScreens ] = useState(loadScreens());
    const navigate = async (screenId) => {
        let aux = screens;
        aux[activeScreen] = false;
        aux[screenId] = true;
        setScreens(aux);
        setActiveScreen(screenId);
    };
    useEffect(() => {
        setScreens(loadScreens());
    }, [activeScreen]);
    const data = {
        navigate,
        screens,
        activeScreen
    };
	return (
		<Router.Provider value={data} >
			<Box w={screenSize.width} h={screenSize.height} >
				{children}
			</Box>
		</Router.Provider>
	);
};

export default Navigator;
