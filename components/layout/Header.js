import Link from 'next/link';
import Image from 'next/image';
import classes from './Header.module.css';


function Header() {

  return (
    <header className={classes.header}>
      <div  style={{height: "100%", width: '100vw'}}>
        <Image className={classes.film_roll} src="/film.png" alt="film-frame" objectFit='cover' layout='fill'/>
      </div>
      <div className={classes.film_container}>
        <div className={classes.left}>
          <img className={classes.film_img} id={classes.img0} src="/film_pic/DSC_13702.png" alt="header" />
          <img className={classes.film_img} id={classes.img1} src="/film_pic/DSC_00462.png" alt="header" />
          <img className={classes.film_img} id={classes.img2} src="/film_pic/DSC_19982.png" alt="header" />
          <img className={classes.film_img} id={classes.img3} src="/film_pic/DSC_38942.png" alt="header" />
        </div>

        <Link href='/' >
          <div className={classes.middle}>
            <img className={classes.header_img} src="/header.png" alt="icon" />
            <div className={classes.title}>
              <h1 className={classes.title_main}>17&ensp;WATCHING</h1>
            </div>
          </div>
        </Link>

        <div className={classes.right}>
          <img className={classes.film_img} id={classes.img4} src="/film_pic/DSC_02532.png" alt="header" />
          <img className={classes.film_img} id={classes.img5} src="/film_pic/DSC_35712.png" alt="header" />
          <img className={classes.film_img} id={classes.img6} src="/film_pic/DSC_40262.png" alt="header" />
          <img className={classes.film_img} id={classes.img7} src="/film_pic/DSC_05372.png" alt="header" />
        </div>
      </div>
    </header>
  );
}

export default Header;
