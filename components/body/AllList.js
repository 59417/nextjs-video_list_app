import { Fragment, useState } from 'react';
import VideoList from './blocks/VideoList';
import EditList from './backstage/EditList';


function AllList (props) {

    const lists = props.data;

    // const total = favorite_list.length;
    // const getNumber = props.get_number;
    // getNumber(total);

    const listState = props.list_state;
    function isEdit(listState) {
        if (listState === 'Edit') {
            return true;
        } else {
            return false;
        }
    };

    return (
        <Fragment>
            {isEdit(listState) ? <EditList data={lists}/> : <VideoList data={lists}/>}
        </Fragment>
    )
};

export default AllList;