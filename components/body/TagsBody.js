import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TAGS_DICT } from '../data';
// import { ALL_LIST } from '../data_all';
import classes from './TagsBody.module.css';
// import { styleObj } from '../random';
import { getClass } from './tags/TagsRandom';



function TagsBody(props) {

    const ALL_LIST = props.fetch_data;

    const randomN = props.random_number;

    const itemTags = ALL_LIST.map(item => 
        item.tags_no.concat(item.genres_no)
    ).flat();

    const allTagsSet = new Set(itemTags);
    const allTags = Array.from(allTagsSet);

    function getChiTag(tagNo) {
        const targetTag = TAGS_DICT.find((element) => (
            element.genre_number === tagNo
        ));
        const theTag = targetTag.chi_tag;
        return theTag
    };

    const start = randomN % allTags.length;
    const newAllTags = allTags.slice(start, allTags.length);
    newAllTags.push(allTags.slice(0, start));

    // const [style, setStyle] = useState(styleObj);

    // const [color, setColor] = useState('red');
    // const [fontsize, setFontsize] = useState('1.5rem');

    // useEffect(() => {
    //     const randomSize = Math.round(Math.random() * 2 + 1.5);
    //     const randomColor = Math.floor( Math.random() * 155 + 90 )
    //     // return randomSize, randomColor
    //     setColor(`rgb(${randomColor}, 0, 0)`);
    //     setFontsize(`${randomSize}rem`);
    // }, [])


    return (
        <div className={classes.wrapper}>
            <div className={classes.tag}>
                {newAllTags.flat().map((tag) => (
                     <Link href={`/hashtag/${tag}`} key={tag} >
                        <span className={getClass(tag+randomN)} style={{cursor: 'pointer', overflowWrap: 'break-word'}}>
                        {/* <span style={{fontSize: `${fontsize}`, color: `${color}`}}> */}
                            #{getChiTag(tag)}&emsp;
                        </span>
                    </Link>   
                ))}
            </div>
        </div>   
    )
};

export default TagsBody;

