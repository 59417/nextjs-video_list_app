import { Fragment } from 'react';
import classes from './HomeBody.module.css';
import Marquee from './marquee/Marquee';


function HomeBody (props) {

    const marqueeData = props.datas;

    function getData(filter) {
        const targetIds = marqueeData[filter];
        const targetData = props.fetch_data.filter(obj => targetIds.ids.includes(obj.videoid));
        return targetData;
    };


    return (
        <Fragment>
            <div className={classes.wrapper}>
                <ul>
                    <li className={classes.item}>
                        <Marquee 
                            marquee_title={`My Favorite Movies`} 
                            marquee_link={`/favorites`}
                            // fetch_data={props.fetch_data}
                            data={getData('movies')}
                        />
                    </li>
                    <li className={classes.item}>
                        <Marquee 
                            marquee_title={`My Favorite Series`} 
                            marquee_link={`/favorites/series`} 
                            // fetch_data={props.fetch_data}
                            data={getData('series')}
                        />
                    </li>
                    <li className={classes.item}>
                        <Marquee 
                            marquee_title={`Documentary Films`} 
                            marquee_link={`/hashtag/3053904`} 
                            // fetch_data={props.fetch_data}
                            data={getData('docus')}
                        />
                    </li>
                </ul>
            </div>
        </Fragment>
    )
};

export default HomeBody;