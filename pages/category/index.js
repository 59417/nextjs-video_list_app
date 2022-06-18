import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../../styles/Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SelectContainer from '../../components/body/SelectContainer';
import GoBack from '../../components/body/goback/GoBack';
import { TAGS_DICT, FAVORITE_IDS, CATEGORY_IDS } from '../../components/data';



function Categories(props) {

  const catsData = props.catsData;

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
          <title>影片分類 | 17片單一起看</title>
          <meta 
              name="description" 
              content="Categories including movies, series, documentary films and different kind of shows." 
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
      </Head>
      <div className={classes.body}>
        <div 
          className={classes.sidebar} 
          style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
        >     
          <Sidebar turn_on={'Cats'}/>
        </div>
        <div className={classes.videos_container}>
            <SelectContainer fetch_data={props.fetchData} categories={catsData} />
            <div className={classes.goback}>
                <GoBack />
            </div>
        </div>
      </div>
    </Fragment>
  )
};


export default Categories;


export async function getServerSideProps(context) {
  try {
    const res = await fetch(`${process.env.API_URL}/api/category`);
    const data = await res.json();
    return {
      props: { catsData: CATEGORY_IDS },
    }
  } catch (error) {
    return {
      props: { catsData: CATEGORY_IDS },
    }
  }
};