import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../styles/Home.module.css';
import Sidebar from '../components/sidebar/Sidebar';
import HomeBody from '../components/body/HomeBody';
import GoBack from '../components/body/goback/GoBack';


function HomePage(props) {

  const date = new Date();
  // const nowTime = date.toTimeString();
  const nowTime = date.getSeconds();
  console.log('Welcome!', nowTime);
  
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
          style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
        >
          <Sidebar turn_on={'Home'}/>
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
  const favsRes = await fetch(`http://localhost:3001/api/favorite`);
  const favsData = await favsRes.json();
  const favsMovie = favsData.find(obj => obj.filter === 'movie');
  const favsSeries = favsData.find(obj => obj.filter === 'series');
  const catsRes = await fetch(`http://localhost:3001/api/category`);
  const catsData = await catsRes.json();
  const docus = catsData.find(obj => obj.filter === 'documentaries');

  return {
    props: { 
      marqueeData: {
        movies: favsMovie,
        series: favsSeries,
        docus: docus,
      }
    },
  }
};
