import Link from 'next/link';


function EditIcon(props) {

    const handleClick = props.isLovedFunc;
    const isLoved = props.is_loved;

    // const [isLoved, setIsLoved] = useState(false);
    // function handleClick() {
    //     if (isLoved) {
    //         setIsLoved(false);
    //         console.log(isLoved);
    //     } else {
    //         setIsLoved(true);
    //         console.log(isLoved);
    //     }
    // };

    return (
        <div>
            <i 
                className={`fa-${isLoved ? 'solid' : 'regular'} fa-heart fa-2xl`} 
                onClick={handleClick}
            />
            <span style={{paddingLeft: '1rem'}}>
                <Link href={`/backstage/edit-list/${props.data.videoid}`}>
                    <i className="fa-solid fa-pen-to-square fa-2xl" />
                </Link>
            </span>
        </div>
    )
};

export default EditIcon;