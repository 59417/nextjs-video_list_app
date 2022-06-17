import React from 'react';
import { useState } from 'react';
import Header from './Header';
import classes from './Layout.module.css';

function Layout(props) {

  const [isMenu, setIsMenu] = useState(false);
  function handleClick() {
    setIsMenu(!isMenu);
  };
  // console.log(isMenu);

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}> 
      {/* style={{'position': 'sticky', 'top': 0, 'zIndex': 1}} */}
        <Header />
        <div className={classes.bars} onClick={handleClick}>
          {/* <i className="fa-solid fa-bars fa-4x"></i> */}
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
        </div>
      </div>
      {/* <main className={classes.main}>{props.children}</main> */}
      <main>{React.cloneElement(props.children, {menuState: isMenu, setMenu: setIsMenu})}</main>
    </div>
  );
}

export default Layout;
