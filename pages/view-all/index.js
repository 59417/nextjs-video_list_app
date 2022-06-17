import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../../styles/Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import ListContainer from '../../components/body/ListContainer';
import GoBack from '../../components/body/goback/GoBack';

function Categories(props) {

  // console.log(props.fetchData);  // PageProps

  const isMenu = props.menuState;
  const setMenu = props.setMenu;

  const [winWidth, setWinWidth] = useState(0);

  useEffect(() => {
    setMenu(false);
    window.addEventListener('resize', setWinWidth);
    return () => {
      window.removeEventListener('resize', setWinWidth(window.innerWidth))
    }
  }, [setMenu, winWidth]);
        
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
          style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
        >
          <Sidebar turn_on={'All'} />
        </div>
        <div className={classes.videos_container}>
            <ListContainer list_state={'All'} filtered={'all'} fetch_data={props.fetchData} />
            <div className={classes.goback}>
                <GoBack />
            </div>
        </div>
      </div>
    </Fragment>
  )
};


export default Categories;
