import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

function MenuIcon (props) {
    return (
        <Image
        loader={myLoader}
        src={props.images.image}
        alt={props.images.title}
        width={24}
        height={24}
        />
    )
};

export default MenuIcon;