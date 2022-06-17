import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../../styles/Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import ListContainer from '../../components/body/ListContainer';
import GoBack from '../../components/body/goback/GoBack';



function Favorites(props) {

  const favsData = props.favsData;  // getServerSideProps

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
          <title>精選列表 | 17片單一起看</title>
          <meta 
              name="description" 
              content="All my favorite films!" 
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
      </Head>
      <div className={classes.body}>
        <div 
          className={classes.sidebar} 
          style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
        >     
          <Sidebar turn_on={'Favs'}/>
        </div>
        <div className={classes.videos_container}>
            {/* <ListContainer list_state={'All'} filtered={'harlan'} fetch_data={props.fetchData}/> */}
            <ListContainer list_state={'All'} filtered={'hc'} fetch_data={props.fetchData} favs_data={favsData} />
            <div className={classes.goback}>
                <GoBack />
            </div>
        </div>
      </div>
    </Fragment>
  )
};


export default Favorites;



export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3001/api/favorite`);
  const data = await res.json();

  return {
    props: { favsData: data },
  }
};