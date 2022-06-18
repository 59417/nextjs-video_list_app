import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../../styles/Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarMobile from '../../components/sidebar/SidebarMobile';
import HashtagContainer from '../../components/body/HashtagContainer';
import GoBack from '../../components/body/goback/GoBack';
import { TAGS_DICT } from '../../components/data';
// import { ALL_LIST } from '../../components/data_all';




function HashtagId(props) {

  const tagId = props.tagId;
  const ALL_LIST = props.fetchData;
  const data = ALL_LIST.filter(video => (
      video.tags_no.includes(tagId) || video.genres_no.includes(tagId)
  ));
  
  const hashtag = TAGS_DICT.find((tag) => tag.genre_number === tagId);

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
          <title>影片屬性 | 17片單一起看</title>
          <meta 
              name="description" 
              content="Shows all hashtags about collection." 
          />
          <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
      </Head>
      <div className={classes.body}>
        <div 
          className={classes.sidebar} 
          // style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
        >
          <Sidebar turn_on={'Tags'}/>
        </div>
        <div 
          className={classes.sidebar_mobile} 
          // style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
          style={isMenu ? null : {'display': 'none'}}
        >
          <SidebarMobile turn_on={'Tags'}/>
        </div>
        <div className={classes.videos_container}>
            <HashtagContainer data={data} hashtag={hashtag} />
            <div className={classes.goback}>
                <GoBack />
            </div>
        </div>
      </div>
    </Fragment>
  )
};


export async function getStaticPaths () {

  return {
      fallback: 'blocking',  
      paths: TAGS_DICT.map(tag => ({
          params: {
              tagId: tag.genre_number.toString()
          }
      }))
  }
};


export async function getStaticProps (context) {

  const tagId = parseInt(context.params.tagId); 
  return { props: { tagId: tagId }};

};


export default HashtagId;


