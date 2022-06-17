import { Fragment, useState, useEffect } from 'react';
// import classes from './AllList.module.css';
// import { favorite_list } from '../../data';
import VideoEdit from './VideoEdit';
import classes from './EditList.module.css';
import { FAVORITE_IDS } from '../../data';


function EditList(props) {

    const [lovedlist, setList] = useState(FAVORITE_IDS['all']);
    
    useEffect(() => {
        console.log('First render', lovedlist);
    }, [lovedlist]);

    function getLovedState(isLoved, id) {
        if (isLoved == false) {
            console.log('isLoved == false');
            lovedlist.push(id);
            setList(lovedlist);
        } else {
            if (lovedlist.includes(id)) {
                const listFiltered = lovedlist.filter(function(value, index, lovedlist){ return value !== id });
                setList(listFiltered);
            }
        };
        console.log(lovedlist);
    };


    return (
        <Fragment>
            <div className={classes.video_container}>
                <div className="columns is-multiline is-desktop">
                    {props.data.map((video) => (
                        <div className="column is-3-desktop is-12-tablet" key={video.videoid}>
                            <div className={classes.container}>
                                <VideoEdit
                                    key={video.videoid}
                                    id={video.videoid}
                                    data={video}
                                    change_list={getLovedState}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};


export default EditList;
