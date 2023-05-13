import styles from "../../../styles/dashboard.module.css";
import ReactStars from "../../../Comps/react-stars";
import Link from 'next/link'
import { useRouter } from 'next/router';
import Head from "next/head";




const Stadium = ({
    name = `Stadium Name`,
    type,
    price = 100,
    rating = 3,
    description,
    IFcapacity = 18,
    OFcapacity = 50,
    bathroom = "Yes",
}) => {

  const router = useRouter();
  const { courtId, id } = router.query;
  const onDelete = () => {
      if (confirm('Are you sure you want to delete this court?')){
          fetch("../../api/delete_court", {
              method: "Delete",
              body: JSON.stringify(parseInt(courtId)),
          });

          location.href = '/';

      }
    

}
  return (
    <>
    <Head>
        <title>MLAAEB | Manage Court</title>
    </Head>
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
            <Link className={styles.bookCourtBtn} href={`/${id}/${courtId}/edit`}>Edit</Link>
            

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
            <Button className="btn btn-danger" onClick={onDelete}>Delete</Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Stadium;

import sqlite3 from "sqlite3";
import { Button } from "react-bootstrap";

export async function getServerSideProps(context) {
  const { courtId } = context.query;

  const db = new sqlite3.Database("database.db3");

  const getData = () => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM Court WHERE id = ${courtId}`, (err, rows) => {
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

        id: courtId,
        name: data.name,
        type: data.type, 
        price: data.price,
        rating: data.rate,
        description: data.description,
        IFcapacity: data.IFcapacity,
        OFcapacity: data.OFcapacity,
        bathroom: data.bathroom == 1 ? "Yes" : "No",


    },
  };
}
