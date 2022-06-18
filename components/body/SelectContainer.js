import { useState } from 'react';
import VideoList from './blocks/VideoList'
import SelectHeader from './headers/SelectHeader';
import classes from './SelectContainer.module.css';
// import { CATEGORY_IDS } from '../data';
// import { ALL_LIST } from '../data_all';


function SelectContainer(props) {

    const ALL_LIST = props.fetch_data;
    const catsData = props.categories;
    // console.log(catsData.find(obj => obj.filter === 'movies'));
    // const targetIds = catsData.find(obj => obj.filter === 'movies');
    // console.log(targetIds);

    function getData(filter) {
        const targetIds = catsData.find(obj => obj.filter === filter);
        const targetData = ALL_LIST.filter(obj => targetIds.ids.includes(obj.videoid));
        return targetData;
    };
    const [currData, setCurrData] = useState(getData('movies'));

    // const movieData = CATEGORY_IDS.movies;
    // const seriesData = CATEGORY_IDS.series;
    // const docsData = CATEGORY_IDS.documentaries;
    // const otherData = CATEGORY_IDS.others;

    // const FILTERD_LIST = ALL_LIST.filter((item => movieData.includes(item.videoid)));
    // const [data, setData] = useState(FILTERD_LIST);

    // function getSelect(option) {
    //     if (option === 'movies') {
    //         setData(ALL_LIST.filter((item => movieData.includes(item.videoid))))
    //     } else if (option === 'series') {
    //         setData(ALL_LIST.filter((item => seriesData.includes(item.videoid))))
    //     } else if (option === 'documentaries') {
    //         setData(ALL_LIST.filter((item => docsData.includes(item.videoid))))
    //     } else {
    //         setData(ALL_LIST.filter((item => otherData.includes(item.videoid))))
    //     };
    // };

    return (
            <div className={classes.wrapper}>
                <div className={classes.page_title}>
                    <div>
                        <SelectHeader /*select_data={getSelect}*/ selected_data={getData} set_state={setCurrData} />
                    </div>
                </div>
                <div className={classes.list}>
                    <VideoList /*data={data}*/ data={currData} />
                </div>
            </div>
    );
};

export default SelectContainer;