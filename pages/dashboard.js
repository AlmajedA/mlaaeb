import styles from "../styles/dashboard.module.css";
import ReactStars from "../Comps/react-stars";
import Link from 'next/link'
const dashboard = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.courtImages}>
            <div className={styles.ImgHolder}>
              <img src="/footballCourt.jpg" className={styles.activeImg} />
            </div>

            <div className={styles.unActiveImgs}>
              <div className={styles.ImgHolder}>
                <img src="/footballCourt2.jpg" className={styles.img2} />
              </div>
              <div className={styles.ImgHolder}>
                <img src="/footballCourt3.jpg" className={styles.img3} />
              </div>
              <div className={styles.ImgHolder}>
                <img src="/footballCourt4.jpg" className={styles.img4} />
              </div>
            </div>
          </div>

          <div className={styles.courtInfo}>
            <h1>Anfield Stadium</h1>
            <ReactStars edit={false} value={4}/>
            <h4>100 SAR</h4>
            <Link className={styles.bookCourtBtn} href={"/payment"}>Book Court</Link>
          </div>
          <div className={styles.details}>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
            <h5>Court features: </h5>
            <ul>
              <li>In-field capacity: 17 players</li>
              <li>Out-field capacity: 50 audience</li>
              <li>Bathrooms: Yes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
