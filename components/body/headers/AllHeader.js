import classes from './AllHeader.module.css';

function AllHeader(props) {

    const total = props.total;

    return (
        <h1>
            All My Collections&ensp;
            <span style={{fontSize: '1.2rem', color: 'grey'}}>({total})</span>
            <div className={classes.sepline}></div>
        </h1>
    )
};

export default AllHeader;
