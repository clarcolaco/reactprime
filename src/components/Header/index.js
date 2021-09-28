import React from 'react';
import { Container, MenuButton, Title } from './styles';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';



function Header({ title }) {

    return (
        <Container>
            <MenuButton onPress={() => NavigationContainer.openDrawer()}>

                <Feather
                    name="menu"
                    size={36}
                    color="#fff"
                />

            </MenuButton>

            

        </Container>


    )
}


export default Header;
