import { useRouter } from 'next/router';
// import classes from './GoBack.module.css';

function GoBack() {

    const router = useRouter();

    return (
        <div 
            onClick={() => router.back()}
            // className={classes.goback}
        >
            Go Back
        </div>
    )
};

export default GoBack;