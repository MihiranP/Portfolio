import {
    Box,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'
import { styled } from 'styled-components/'

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderSetter>
                <HeaderItems>
                    <List>
                        <ListItem>
                            <ListItemText primary='Home' />
                        </ListItem>
                    </List>
                </HeaderItems>
            </HeaderSetter>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.palette.text.primary};
    background-color: ${(props) => props.theme.palette.background.paper};
    min-height: 84px;
`;

const HeaderSetter = styled(Box)`
    background-color: ${(props) => props.theme.palette.common.black} !important;
    justify-content: center;
    padding: 10px 20px;
    align-items: center;
    max-width: calc(100% - 250px);
    width: 100%;
    margin: auto;
    border-radius: 50px;
    height: 30px;
`;


const HeaderItems = styled(Box)`

`;


export default Header;