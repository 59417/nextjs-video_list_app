import { useState, useEffect } from 'react';
import AllList from './AllList';
import AllHeader from './headers/AllHeader';
import TagHeader from './headers/TagHeader';
import classes from './ListContainer.module.css';
// import { FAVORITE_IDS  } from '../data';
// import { ALL_LIST } from '../data_all';


function ListContainer(props) {
    
    const ALL_LIST = props.fetch_data;
    const favsData = props.favs_data;
    // const tagsTotal = favsData.map(obj => obj.ids.length);
    
    const filter = props.filtered;
    // const targetIds = favsData.find(obj => obj.filter === filter);
    // const targetData = ALL_LIST.filter(obj => targetIds.ids.includes(obj.videoid));
    // console.log('targetData', targetData);

    function getData() {
        if (favsData) {
            const targetIds = favsData.find(obj => obj.filter === filter);
            const targetData = ALL_LIST.filter(obj => targetIds.ids.includes(obj.videoid));
            return targetData
        } else {
            const targetData = ALL_LIST;
            return targetData
        }
    };

    function getTotal() {
        if (favsData) {
            const tagsTotal = favsData.map(obj => (
                { filter: obj.filter, len: obj.ids.length }
            ));
            return tagsTotal;
        } else {
            return ALL_LIST.length;
        }
    };

    // console.log(targetTotal);

    // const allData = FAVORITE_IDS.all;
    // const movieData = FAVORITE_IDS.movie;
    // const seriesData = FAVORITE_IDS.series;
    // const conjuringData = FAVORITE_IDS.conjuring;
    // const rmData = FAVORITE_IDS.rm;
    // const hcData = FAVORITE_IDS.hc;
    // const opData = FAVORITE_IDS.op;
    // const allTotal = ALL_LIST.length;
    // const allTotal = fetchData.length;
    // const total = [
    //     movieData.length, seriesData.length, conjuringData.length, 
    //     rmData.length, hcData.length, opData.length
    // ];


    // const [data, setData] = useState(TEMP_LIST);
    // const total = data.length;

    // const filtered = props.filtered;
    // function getHeader() {
    //     if (filtered === 'movie') {
    //         return <TagHeader total={total} filtered={filtered}/> ; 
    //     } else if (filtered === 'series') {
    //         return <TagHeader total={total} filtered={filtered}/> ; 
    //     } else if (filtered === 'conjuring') {
    //         return <TagHeader total={total} filtered={filtered}/> ; 
    //     } else if (filtered === 'ryan') {
    //         return <TagHeader total={total} filtered={filtered}/> ; 
    //     } else if (filtered === 'harlan') {
    //         return <TagHeader total={total} filtered={filtered}/> ; 
    //     } else if (filtered === 'oriol') {
    //         return <TagHeader total={total} filtered={filtered}/> ; 
    //     } else if (filtered === 'select') {
    //         return <TagHeader total={total} filtered={filtered}/> ; 
    //     } else {
    //         return <AllHeader total={allTotal}/> ; 
    //     }
    // };

    // function getData() {
    //     if (filtered === 'movie') {
    //         const FILTERD_LIST = ALL_LIST.filter((item => movieData.includes(item.videoid)));
    //         return FILTERD_LIST ; 
    //     } else if (filtered === 'series') {
    //         const FILTERD_LIST = ALL_LIST.filter((item => seriesData.includes(item.videoid)));
    //         return FILTERD_LIST ; 
    //     } else if (filtered === 'conjuring') {
    //         const FILTERD_LIST = ALL_LIST.filter((item => conjuringData.includes(item.videoid)));
    //         return FILTERD_LIST ; 
    //     } else if (filtered === 'ryan') {
    //         const FILTERD_LIST = ALL_LIST.filter((item => rmData.includes(item.videoid)));
    //         return FILTERD_LIST ; 
    //     } else if (filtered === 'harlan') {
    //         const FILTERD_LIST = ALL_LIST.filter((item => hcData.includes(item.videoid)));
    //         return FILTERD_LIST ; 
    //     } else if (filtered === 'oriol') {
    //         const FILTERD_LIST = ALL_LIST.filter((item => opData.includes(item.videoid)));
    //         return FILTERD_LIST ; 
    //     } else {
    //         const FILTERD_LIST = ALL_LIST;
    //         return FILTERD_LIST ; 
    //     };
    // }

    return (
        <div className={classes.wrapper}>
            <div className={classes.page_title}>
                <div style={{width: '100%', height: '100%'}}>
                    {/* {getHeader()} */}
                    {
                        filter === 'all' 
                        ? <AllHeader total={getTotal()}/> 
                        : <TagHeader totals={getTotal()} filtered={filter}/>
                    }
                </div>
            </div>
            <div className={classes.list}>
                <AllList 
                    list_state={props.list_state} /*get_number={getNumber}*/
                    data={getData()}
                    // data={targetData}
                />
            </div>
        </div>
    );
};


export default ListContainer;