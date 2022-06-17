import { useState } from 'react';
import VideoList from './blocks/VideoList'
import HashtagHeader from './headers/HashtagHeader';
import classes from './HashtagContainer.module.css';
// import { TEMP_LIST, CATEGORY_IDS } from '../data';


function HashtagContainer(props) {

    const data = props.data;
    const total = data.length;
    const hashtag = props.hashtag;

    return (
        <div className={classes.wrapper}>
            <div className={classes.page_title}>
                <div style={{width: '100%', height: '100%'}}>
                    <HashtagHeader total={total} hashtag={hashtag}/>
                </div>
            </div>
            <div className={classes.list}>
                <VideoList data={data}/>
            </div>
        </div>
    );
};

export default HashtagContainer;