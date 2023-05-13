import Court from "../../Comps/Court";
import Head from "next/head";
import { useRouter } from 'next/router';


const myCourts = ({ data }) => {
    const router = useRouter();
    const { id } = router.query;


  const items = JSON.parse(data);
  return (
    <>
      <Head>
        <title>MLAAEB | My Courts</title>
      </Head>
      
      <h1 className="text-center my-5">My Courts</h1>

      <div>
        {items.map( (item) => (
            <div id={item.id}>
              <Court
                action="Manage Court"
                imageURL = ""
                page = {`/${id}/${item.id}/manageCourt`}
                name={item.name}
                type={item.type}
                price={item.price}
                rate={item.rate}
              />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default myCourts;

// retrive data from database
const sqlite3 = require("sqlite3").verbose();

export async function getServerSideProps(context) {

    const { id } = context.query;
    // open database
    const db = new sqlite3.Database("database.db3");
    // get data
    const getData = () => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Court WHERE court.ownerId = ${id}`, (err, rows) => {
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
      data: JSON.stringify(data),
    },
  };
}
