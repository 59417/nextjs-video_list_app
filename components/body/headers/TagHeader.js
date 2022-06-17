import Link from 'next/link';
import classes from './TagHeader.module.css';

function TagHeader(props) {

    const filtered = props.filtered;
    const totals = props.totals;
    function getTotal(str) {
        const lenObj = totals.find(obj => obj.filter === str);
        return lenObj.len;
    };
    // const total = props.total;
    // console.log(filtered, total);

    function getStyle(title) {
        if (filtered === title) {
            return {borderBottom: '2px solid rgb(23, 23, 23)'};
        } else {
            return {backgroundColor: 'rgb(38, 38, 38)'};
        }
    };


    return (
        <h1>
            <span className={classes.container}>
                <Link href='/favorites'>
                    <div className={classes.tag} style={getStyle('movie')} /*style={getStyle('movies')}*/>
                        <span className={classes.tag_title}>Movies&ensp;</span>
                        {/* <span className={classes.numbers}>({total[0]})</span> */}
                        <span className={classes.numbers}>({getTotal('movie')})</span>
                    </div>
                </Link>
                <Link href='/favorites/series'>
                    <div className={classes.tag} style={getStyle('series')}>
                        <span className={classes.tag_title}>Series&ensp;</span>
                        {/* <span className={classes.numbers}>({total[1]})</span> */}
                        <span className={classes.numbers}>({getTotal('series')})</span>
                    </div>
                </Link>
                <Link href='/favorites/the-conjuring-universe'>
                    <div className={classes.tag} style={getStyle('conjuring')}>
                        <span className={classes.tag_title}>The Conjuring Universe&ensp;</span>
                        {/* <span className={classes.numbers}>({total[2]})</span> */}
                        <span className={classes.numbers}>({getTotal('conjuring')})</span>
                    </div>
                </Link>
                <Link href='/favorites/ryan-murphy'>
                    <div className={classes.tag} /*style={getStyle('ryan')}*/ style={getStyle('rm')} >
                        <span className={classes.tag_title}>Ryan Murphy&ensp;</span>
                        {/* <span className={classes.numbers}>({total[3]})</span> */}
                        <span className={classes.numbers}>({getTotal('rm')})</span>
                    </div>
                </Link>
                <Link href='/favorites/harlan-coben'>
                    <div className={classes.tag} /*style={getStyle('harlan')}*/ style={getStyle('hc')} >
                        <span className={classes.tag_title}>Harlan Coben&ensp;</span>
                        {/* <span className={classes.numbers}>({total[4]})</span> */}
                        <span className={classes.numbers}>({getTotal('hc')})</span>
                    </div>
                </Link>
                <Link href='/favorites/oriol-paulo'>
                    <div className={classes.tag} /*style={getStyle('oriol')}*/ style={getStyle('op')} >
                        <span className={classes.tag_title}>{/*奧瑞歐·保羅*/}Oriol Paulo&ensp;</span>
                        {/* <span className={classes.numbers}>({total[5]})</span> */}
                        <span className={classes.numbers}>({getTotal('op')})</span>
                    </div>
                </Link>
            </span>
            <div className={classes.sepline}></div>
        </h1>
    )
};

export default TagHeader;
