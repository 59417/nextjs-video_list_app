import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import Sidebar from '../components/sidebar/Sidebar';
import SidebarMobile from '../components/sidebar/SidebarMobile';
import HomeBody from '../components/body/HomeBody';
import GoBack from '../components/body/goback/GoBack';
import { TAGS_DICT, FAVORITE_IDS, CATEGORY_IDS } from '../components/mongodb_data';


function HomePage(props) {

  // console.log(process.env.API_URL);

  const date = new Date();
  // const nowTime = date.toTimeString();
  const nowTime = date.getSeconds();
  console.log('Welcome!', nowTime);
  
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
          <title>17 Watching | 17片單一起看</title>
          <meta 
              name="description" 
              content="Here is my videos collection! Come and take a look at my favorites." 
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
      </Head>
      <div className={classes.body}>
        <div 
          className={classes.sidebar} 
          // style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
        >
          <Sidebar turn_on={'Home'}/>
        </div>
        <div 
          className={classes.sidebar_mobile} 
          // style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
          style={isMenu ? null : {'display': 'none'}}
        >
          <SidebarMobile turn_on={'Home'}/>
        </div>
        <div className={classes.videos_container}>
          <HomeBody fetch_data={props.fetchData} datas={props.marqueeData} />
          <div className={classes.goback}>
            <GoBack />
          </div>
        </div>
      </div>
    </Fragment>
  )
};


export default HomePage;



export async function getServerSideProps(context) {
  try {
    // const favsRes = await fetch(`${process.env.API_URL}/api/favorite`);
    // const favsData = await favsRes.json();
    // const favsMovie = favsData.find(obj => obj.filter === 'movie');
    // const favsSeries = favsData.find(obj => obj.filter === 'series');
    // const catsRes = await fetch(`${process.env.API_URL}/api/category`);
    // const catsData = await catsRes.json();
    // const docus = catsData.find(obj => obj.filter === 'documentaries');
  
    return {
      props: { 
        marqueeData: {
          movies: FAVORITE_IDS.find(obj => obj.filter === 'movie'),
          series: FAVORITE_IDS.find(obj => obj.filter === 'series'),
          docus: CATEGORY_IDS.find(obj => obj.filter === 'documentaries'),
        },
      },
    }
  } catch (error) {
    return {
      props: { 
        marqueeData: {
          movies: FAVORITE_IDS.find(obj => obj.filter === 'movie'),
          series: FAVORITE_IDS.find(obj => obj.filter === 'series'),
          docus: CATEGORY_IDS.find(obj => obj.filter === 'documentaries'),
        },
      },
    }
  };
};
