import "./header.scss";
import { Reset } from '@carbon/icons-react';
import { Button } from "@carbon/react";

const Header = (props) => {
    return ( 
        <header className="header">
            <div className="header__logo">
                <span  className="header__logo-x">X</span>
                <span className="header__logo-o">O</span>
            </div> 
            <div className="header__turn-indicator">{props.turn + " turn"}</div>
            <Button
                className="header__reset"
                renderIcon={Reset}
                hasIconOnly
            />
        </header>
    )
};

export default Header;
