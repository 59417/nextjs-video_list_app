// import { useEffect, useState } from "react";
import classes from '../styles/Home.module.css';
// import TestFavs from "../components/TestFavs";
import { FAVORITE_IDS } from '../components/data';


function Categories(props) {

    const movie = FAVORITE_IDS.movie;
    const series = FAVORITE_IDS.series;
    
    // console.log(movie, series);
    const n1 = Math.floor(movie.length / 15);
    const n2 = Math.floor(series.length / 15);
    const arr1 = Array.from({length: 15}, (item, index) => (
        { start: index * n1, end: (index + 1) * n1 }
    ));
    const arr2 = Array.from({length: 15}, (item, index) => (
        { start: index * n2, end: (index + 1) * n2 }
    ));

    // const arr11 = movie.slice(arr1[0].start, arr1[0].end);
    // const arr22 = series.slice(arr2[0].start, arr2[0].end);

    // console.log(arr11[Math.floor(Math.random()*arr11.length)]);
    // console.log(arr22[Math.floor(Math.random()*arr22.length)]);

    const random1 =arr1.map(elem => {
        const temp = movie.slice(elem.start, elem.end);
        // console.log(temp);
        const final = temp[Math.floor(Math.random()*temp.length)];
        return final
    })

    const random2 =arr2.map(elem => {
        const temp = series.slice(elem.start, elem.end);
        // console.log(temp);
        const final = temp[Math.floor(Math.random()*temp.length)];
        return final
    })
    // console.log(getRandomData(series));

    


    // const data = props.fetchData;
    // const [favs, setFavs] = useState([]);
    
    // function handleClick(videoId) {
    //     const arr2 = favs.concat([videoId]);
    //     setFavs(arr2);
    // }
    
    // useEffect(() => {
    //     console.log('reder', favs)
    // }, [favs]);

  return (
      <div className={classes.body} style={{overflow: 'scroll'}}>
        {/* <div className={classes.videos_container} >
            <div className="columns is-multiline">
                {data.map((video) => (
                    <div className="column is-3-desktop" key={video.videoid}>
                        <div 
                            className={classes.container} 
                            onClick={() => handleClick(video.videoid)}
                            style={favs.includes(video.videoid) ? {backgroundColor: 'red'} : null}
                        >
                            <TestFavs data={video} />
                        </div>
                    </div>
                ))}
            </div>
        </div> */}
        <h1>TESTING......</h1>
        <div>{movie.map(str => <div key={str}>{str}</div>)}</div>
      </div>
  )
};


export default Categories;
