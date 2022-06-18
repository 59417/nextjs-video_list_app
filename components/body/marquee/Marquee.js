import { useState } from 'react';
import Link from 'next/link';
import classes from './Marquee.module.css';
import VideoThumbnail from './VideoThumbnail';
// import { ALL_LIST } from '../../data_all';


function Marquee (props) {

    // const ALL_LIST = props.fetch_data;
    
    // const videoList = props.videoList;
    const marqueeTitle = props.marquee_title;
    const marqueeLink = props.marquee_link;
    
    const [scroll, setScroll] = useState(0);
    const start = 0 + 3 * scroll;
    const end = 3 + 3 * scroll;
    // const videoList = ALL_LIST.slice(start,end);

    const data = props.data.slice(start,end);
    const num = props.data.length;

    // function getRandomData(targetData) {
    //     const n = Math.floor(targetData.length / 15);
    //     const arr = Array.from({length: 15}, (item, index) => (
    //         { start: index * n, end: (index + 1) * n }
    //     ));
    //     const randomArr =arr.map(elem => {
    //         const temp = targetData.slice(elem.start, elem.end);
    //         const final = temp[Math.floor(Math.random()*temp.length)];
    //         return final
    //     });
    //     return randomArr;
    // };
    // const randomData = getRandomData(props.data);
    // const currData = randomData.slice(start,end);

    function handleClickLeft() {
        scroll -= 1
        if (scroll < 0) {
            scroll += 5
            setScroll(scroll)
        } else if (scroll === 5) {
            setScroll(0)
        } else {
            setScroll(scroll)
        }
    };

    function handleClickRight() {
        scroll += 1
        if (scroll === 5) {
            setScroll(0)
        } else {
            setScroll(scroll)
        }
    };
    
    return (
        <div className={classes.marquee}>
            <Link href={marqueeLink}>
                <p className={classes.title} data-content={`(${num}) ≫`}>{marqueeTitle}&ensp;</p>
            </Link>
            <div className={classes.sepline}></div>
                <div className={classes.container}>
                    <div className={classes.turnleft} onClick={handleClickLeft}>
                        <i className="fa-solid fa-chevron-left fa-5x" style={{textRendering: 'optimizeLegibility'}}></i>
                    </div>
                    <div className={classes.video_container}>
                        {data.map((video) => (
                            <div className={classes.item} key={video.videoid}>
                                <VideoThumbnail
                                    video_id={video.videoid}
                                    video_title={video.chinese}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={classes.turnright} onClick={handleClickRight}>
                        <i className="fa-solid fa-chevron-right fa-5x"></i>
                    </div>
                </div>
            <div className={classes.sepline}></div>
        </div>
    );
};

export default Marquee;
