import styles from "../../styles/dashboard.module.css";
import ReactStars from "../../Comps/react-stars";
import Link from 'next/link'


const Stadium = ({
    id,
    name = `Stadium Name`,
    type,
    price = 100,
    rating = 3,
    description,
    IFcapacity = 18,
    OFcapacity = 50,
    bathroom = "Yes",
}) => {

const onDelete = () => {

}
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
            <h1>{name}, {type} Court</h1>
            <ReactStars edit={false} value={rating} />
            <h4>{price} SAR</h4>
            <Link className={styles.bookCourtBtn} href={`/${id}/new`}>Edit</Link>
            

          </div>
          <div className={styles.details}>
            <h5>Court Description</h5>
            <p className={styles.description}>
              {description}
            </p>
            <h5>Court features: </h5>
            <ul>
              <li>In-field capacity: {IFcapacity} players</li>
              <li>Out-field capacity: {OFcapacity} audience</li>
              <li>Bathrooms: {bathroom} </li>
            </ul>
            <Button className="btn btn-danger">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stadium;

import sqlite3 from "sqlite3";
import { Button } from "react-bootstrap";

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

        id: data[0].id,
        name: data[0].name,
        type: data[0].type, 
        price: data[0].price,
        rating: data[0].rate,
        description: data[0].description,
        IFcapacity: data[0].IFcapacity,
        OFcapacity: data[0].OFcapacity,
        bathroom: data[0].bathroom == 1 ? "Yes" : "No",


    },
  };
}
