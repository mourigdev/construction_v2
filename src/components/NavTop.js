import React from 'react';
import { Link } from 'react-router-dom';

const NavTop = () => {

    return ( 
<div className="header__col bg-blue text-white">
    <div className="prl-container--lg hidden lg:block">
      <div className="region region--secondary-nav">
            <nav role="navigation" className="settings-tray-editable" data-drupal-settingstray="editable">
                <ul className="inline-menu">
                    <li className="inline-menu__item">
                        <Link to={"/Investor"} className="inline-menu__link menu_header ext" title="Login to Prologis Essentials" >Investor Relations</Link>
                    </li>
                    <li className="inline-menu__item">
                        <Link to={"/Careers"} className="inline-menu__link menu_header ext" title="Login to Prologis Essentials" >Careers</Link>
                    </li>
                    <li className="inline-menu__item">
                        <Link to={"/contact"} className="inline-menu__link menu_header ext" title="Login to Prologis Essentials" >Contact Us</Link>
                    </li>
            </ul>
            </nav>
        </div>
    </div>
</div>
     );
}
 
export default NavTop;
