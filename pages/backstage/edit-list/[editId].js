import { Fragment, useEffect, useState } from "react";
import Head from 'next/head';
import classes from '../../../styles/Home.module.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import Details from '../../../components/body/detail/Details';
import GoBack from '../../../components/body/goback/GoBack';
import { TEMP_LIST, TAGS_DICT } from '../../../components/data';
import { ALL_LIST } from '../../../components/data_all';


function EditDetail (props) {

    const videoData = props.videoData;
    // console.log(videoData);
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
                <title>{videoData.title} | 編輯資訊</title>
                <meta 
                    name="description" 
                    content="Edit details of the film." 
                />
                <meta name="viewport" content="initial-scale=1.0, width=device-width, shrink-to-fit=no" />
            </Head>
            <div className={classes.body}>
                {/* <div style={{'position': 'fixed', 'top': '160px'}} > */}
                <div 
                    className={classes.sidebar} 
                    style={winWidth>768 ? null : isMenu ? null : {'display': 'none'}}
                >  
                <Sidebar turn_on={'Edit'} className={classes.sidebar}/>
                </div>
                <div className={classes.videos_container}>
                    {/* <h1>{JSON.stringify(videoData)}</h1> */}
                    <Details data={videoData}/>
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
        fallback: 'blocking',  // true: immediately return an empty page
        // fallback: false,  // if user enter an url not included > return 404
        paths: ALL_LIST.map(video => ({
            params: {
                editId: video.videoid
            }
        }))
    }
};


export async function getStaticProps (context, props) {
    // const params =  context.params;
    const videoId = context.params.editId; 
    const ALL_LIST = props.fetch_data;
    const videoTarget = ALL_LIST.find((element) => (
        element['videoid'] === videoId
        ));
    
    const tags = new Set(videoTarget.genres_no.concat(videoTarget.tags_no));
    const tagsSet = [...tags]
    const tagsDicts = tagsSet.map((tag) => (
        TAGS_DICT.find(no => no['genre_number'] === tag
        )));
    const targetTags = tagsDicts.map((tag) => tag['chi_tag']);
    
    return {
        props: {
            videoData: {
                id: videoTarget.videoid,
                videoid: videoTarget.videoid,
                title: videoTarget.chinese,
                engtitle: videoTarget.title,
                cast: videoTarget.cast,
                director: videoTarget.director,
                type: videoTarget.type,
                description: videoTarget.description,
                tags: targetTags,
                tagsid: tagsSet
            }
        }
    }
};

export default EditDetail;