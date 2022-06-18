import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import classes from '../../styles/Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarMobile from '../../components/sidebar/SidebarMobile';
// import ListContainer from '../../components/body/ListContainer';
import GoBack from '../../components/body/goback/GoBack';
import Login from '../../components/body/backstage/Login';

function BackstageLogin(props) {

  const isMenu = props.menuState;
  const setMenu = props.setMenu;

  // const [winWidth, setWinWidth] = useState(0);

  useEffect(() => {
    setMenu(false);
    // window.addEventListener('resize', setWinWidth);
    // return () => {
    //   window.removeEventListener('resize', setWinWidth(window.innerWidth))
    // }
  }, [setMenu]);
  // console.log(winWidth);

  return (
    <Fragment>
      <Head>
          <title>瀏覽全部 | 17片單一起看</title>
          <meta 
              name="description" 
              content="All movies, series, documentary films and TV shows in my collection." 
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
      </Head>
      <div className={classes.body}>
        <div 
          className={classes.sidebar} 
          // style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
        >
          <Sidebar turn_on={'Edit'}/>
        </div>
        <div 
          className={classes.sidebar_mobile} 
          // style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
          style={isMenu ? null : {'display': 'none'}}
        >
          <SidebarMobile turn_on={'Edit'}/>
        </div>
        <div className={classes.videos_container}>
            {/* <h1>Categories Homepage</h1> */}
            <Login />
            <div className={classes.goback}>
                <GoBack />
            </div>
        </div>
      </div>
    </Fragment>
  )
};

export default BackstageLogin;

