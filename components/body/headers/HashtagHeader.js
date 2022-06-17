import classes from './HashtagHeader.module.css';

function HashtagHeader(props) {

    const total = props.total;
    const hashtag = props.hashtag;
    const chiTag = props.hashtag.chi_tag;
    const engTag = props.hashtag.eng_tag;

    return (
        <h1>
            <span className={classes.chinese}>
                {/* <i className="fa-light fa-hashtag"></i> */}
                #{chiTag}
                <span className={classes.english}>#{engTag}</span>
            </span>
            <span className={classes.total}>&emsp;({total})</span>
            <div className={classes.sepline}></div>
        </h1>
    )
};

export default HashtagHeader;
