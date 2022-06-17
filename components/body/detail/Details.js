import { Fragment, useState } from 'react';
import Link from 'next/link';
import DetailImage from './DetailImage';
import classes from './Details.module.css';

function Detail(props) {

    const videoData= props.data;

    const [directors, Setdirector] = useState(videoData.director);
    const [casts, SetCasts] = useState(videoData.cast);
    const [tags, SetTags] = useState(videoData.tags);
    const [tagsId, SetTagIds] = useState(videoData.tagsid);

    function isData(subtitle, data) {
        if (data.length > 0) {
            if (subtitle === 'D') {
                return '・Director/Creator/Writer'
            } else {
                return '・Cast'
            } 
        } else {
            return null
        };
    };

    function getType(type) {
        if (type.includes("h ")) {
            return '・Duration'
        } else {
            return '・Series/Show'
        }
    };
    const test = [];

    function getTagNo(tag) {
        const tagNo = tagsId[tags.indexOf(tag)];
        return tagNo;
    }

    return (    
        <div className={classes.container}>
            <div className={classes.data_container}>
                <div className={classes.img}>
                    <DetailImage data={videoData} />
                </div>
                <div className={classes.content}>
                    {/* <DetailData data={videoData} /> */}
                    <h1>{videoData.title}</h1>
                    <div className={classes.sepline}></div>
                    <h3>{videoData.engtitle}</h3>
                    <h4>{isData('D', directors)}</h4>
                    <h5>{directors.join(', ')}</h5>
                    <h4>{isData('C', casts)}</h4>
                    <h5>{casts.join(', ')}</h5>
                    <h4>{getType(videoData.type)}</h4>
                    <h5>{videoData.type}</h5>
                    {/* <h6>#{tags.join('\xa0\xa0#')}</h6> */}
                    <h6>
                        {tags.map((tag) => (
                            <Link href={`/hashtag/${getTagNo(tag)}`} key={tag}>
                                <span className={classes.tag}>
                                    {`#${tag}`}
                                    <span>&ensp;</span>
                                </span>
                            </Link>
                        ))}
                    </h6>
                </div>    
            </div>
            <div className={classes.description}>
                <h2>{videoData.description}</h2>
            </div>   
            <div className={classes.other}>
                <h3>推薦閱讀 | 相關影評</h3>
            </div>
        </div>
    )
};

export default Detail;