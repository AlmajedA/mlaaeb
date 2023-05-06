import styles from "../../styles/dashboard.module.css";
import ReactStars from "../../Comps/react-stars";

const Stadium = ({
  name = `Stadium Name`,
  price = 100,
  rating = 3,
  capacity = 18,
  audience = 50,
  bathrooms = "Yes",
}) => {
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
            <h1>{name}</h1>
            <ReactStars edit={false} value={rating} />
            <h4>{price} SAR</h4>
            <button className={styles.bookCourtBtn}>Book Court</button>
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
              <li>In-field capacity: {capacity} players</li>
              <li>Out-field capacity: {audience} audience</li>
              <li>Bathrooms: {bathrooms} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stadium;

import sqlite3 from "sqlite3";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const db = new sqlite3.Database("database.db3");

  const getData = () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM Court WHERE id = ${id}`, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  const data = await getData();

  return {
    props: {
      name: data[0].name,
      price: data[0].price,
      rating: data[0].rate,
    },
  };
}
