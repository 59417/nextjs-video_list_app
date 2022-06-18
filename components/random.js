import { ALL_LIST } from './data_all';

const itemTags = ALL_LIST.map(item => 
    item.tags_no.concat(item.genres_no)
).flat();

const allTagsSet = new Set(itemTags);
const allTags = Array.from(allTagsSet);

function getStyle() {
    const randomSize = Math.round(Math.random() * 2 + 1.5);
    const randomColor = Math.floor( Math.random() * 155 + 90 );
    return {'color': `rgb(${randomColor}, 0, 0)`, 'fontSize': `${randomSize}rem`};
}

const objects = {};
for (let i = 0; i < allTags.length; i++) {
    objects[allTags[i]] = getStyle();
    // arr.push(objects)
};

export const styleObj = objects;