import { Fragment } from 'react';
import Link from 'next/link';
import classes from './VideoDescription.module.css';
import { TAGS_DICT } from '../../data';


function VideioDescription(props) {
    const videoData = props.data;
    const tags = new Set(videoData.genres_no.concat(videoData.tags_no));
    const tagsSet = [...tags]

    function getTag(tagNumber) {
        const targetTag = TAGS_DICT.find(no => no['genre_number'] === tagNumber);
        const chiTag = targetTag['chi_tag'];
        return chiTag;
    };

    // function getCategory(type) {
    //     if (
    //         type.includes('Serie') || type.includes('Season') || type.includes('Part')
    //     ) {
    //         return 'series'
    //     } else {
    //         return 'movies'
    //     }
    // };

    return (
        <Fragment>
            <div className={classes.container}>
                <div className={classes.info}>
                    <Link href={`/view-all/${videoData.videoid}`}>
                        <h6 style={{marginBottom: '2px'}}>{videoData.chinese}</h6>
                    </Link>
                    <div className={classes.tags}>
                        {tagsSet.map((tag) => (
                            <Link href={`/hashtag/${tag}`} key={tag}>
                                <div className={classes.a_tag}>
                                    {`#${getTag(tag)}`}
                                    <span>&ensp;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className={classes.videotype} data-content={`>> categories`}>
                        <Link href='/category'>
                            <p>{videoData.type}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default VideioDescription;