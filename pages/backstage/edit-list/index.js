import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../../../styles/Home.module.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import SidebarMobile from '../../../components/sidebar/SidebarMobile';
import ListContainer from '../../../components/body/ListContainer';
import GoBack from '../../../components/body/goback/GoBack';

function EditPage(props) {

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
          <title>控制台-列表 | 17片單一起看</title>
          <meta 
              name="description" 
              content="Backstage Management." 
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
            <ListContainer list_state={'Edit'} filtered={'all'} fetch_data={props.fetchData} />
            <div className={classes.goback}>
                <GoBack />
            </div>
        </div>
      </div>
    </Fragment>
  )
};


export default EditPage;
