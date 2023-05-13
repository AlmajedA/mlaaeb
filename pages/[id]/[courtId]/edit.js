import { json } from "react-router-dom";
import Head from "next/head";
import styles from "../../../styles/listCourtPage.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";



const listCourtPage = ({
    courtId,
    name,
    price,
    rate,
    description,
    location,
    type,
    IFcapacity,
    OFcapacity,
    bathroom
}

) => {





    const onFormSubmit = async (e) =>{
       
        
        const form = document.getElementById("form");
        const formData = new FormData(form);

        const courtData = {
            courtId: courtId,
            name: formData.get("name"),
            type: formData.get("type"),
            location: formData.get("location"),
            price: formData.get("price"),
            rate: rate,
            description: formData.get("description"),
            IFcapacity: formData.get("IFcapacity"),
            OFcapacity: formData.get("OFcapacity"),
            bathroom: formData.get("bathroom"),
        };
        
        const response = await fetch("../../api/update_court", {
            method: "POST",
            body: JSON.stringify(courtData),
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.ok)
          window.location.href = '/'

    }



  


  return (
    <>
    <Head>
        <title>MLAAEB | Edit Court</title>
    </Head>
    <div className={styles.container} >
      <h1>Fill out the court listing</h1>
      <form onSubmit={onFormSubmit} id="form">
        <div className={styles.Field}>
          <label>Court Name: </label>
          <input class="text-field" type="text" name="name" defaultValue={name} required />
        </div>

        <div className={styles.Field}>
          <label>Price: </label>
          <input class="text-field" type="number" name="price" defaultValue={price} required />
        </div>

        <div className={styles.Field}>
          <label>Description: </label>
          <textarea
            class="text-field"
            type="text"
            name="description"
            cols={10}
            rows={10}
            defaultValue = {description}
            required
          ></textarea>
        </div>

        <div className={styles.Field}>
          <select
            name="location"
            id="city"
            className={"form-select me-2"}
            defaultValue={location}
            required
          >
            <option value="" disabled hidden>
              Select court location
            </option>
            <option value="Dammam">Dammam</option>
            <option value="Khobar">Khobar</option>
            <option value="Dhahran">Dhahran</option>
            <option value="Alahasa">Al Ahsa</option>
            <option value="Saihat">Saihat</option>
            <option value="Qatif">Qatif</option>
            <option value="Riyadh">Riyadh</option>
            <option value="Jeddah">Jeddah</option>
            <option value="Medina">Medina</option>
          </select>
        </div>

        <div className={styles.Field}>
          <select
            name="type"
            id="sport"
            className={"form-select me-2"}
            defaultValue={type}
            required
          >
            <option value="" disabled hidden>
              Select the sport
            </option>
            <option value="Football">Football</option>
            <option value="Tennis">Tennis</option>
            <option value="Basketball">Basketball</option>
            <option value="Paddle">Paddle</option>
            <option value="Volleyball">Volleyball</option>
          </select>
        </div>

        <div className={styles.Field}>
          <label for="IFcapacity">In-field capacity: </label>
          <input
            class="text-field"
            type="text"
            name="IFcapacity"
            defaultValue={IFcapacity}
            required
          />
        </div>

        <div className={styles.Field}>
          <label for="OFcapacity">Out-field capacity: </label>
          <input
            class="text-field"
            type="text"
            name="OFcapacity"
            defaultValue={OFcapacity}
            required
          />
        </div>

        <div className={styles.Field}>
          <select
            name="bathroom"
            className={"form-select me-2"}
            defaultValue={bathroom}
            required
          >
            <option value="" disabled hidden>
              Select bathrooms availability
            </option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>

        <Button type="submit">Update</Button>
      </form>
    </div>
    </>
  );
};

export default listCourtPage;

// retrive data from database
const sqlite3 = require("sqlite3").verbose();

export async function getServerSideProps(context) {
  const { courtId } = context.query;
  // open database
  const db = new sqlite3.Database("database.db3");
  // get data
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
        courtId: courtId,
        name: data.name,
        type: data.type,
        location: data.location,
        price: data.price,
        rate: data.rate,
        description: data.description,
        IFcapacity: data.IFcapacity,
        OFcapacity: data.OFcapacity,
        bathroom: data.bathroom,
    },
  };
}
