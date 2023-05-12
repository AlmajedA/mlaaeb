import styles from "../../styles/listCourtPage.module.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const listCourtPage = () => {

  


  return (
    <div className={styles.container}>
      <h1>Fill out the court listing</h1>
      <form action="../api/new_court" method="post">
        <div className={styles.Field}>
          <label>Court Name: </label>
          <input class="text-field" type="text" name="name" required />
        </div>

        <div className={styles.Field}>
          <label>Price: </label>
          <input class="text-field" type="number" name="price" required />
        </div>

        <div className={styles.Field}>
          <label>Description: </label>
          <textarea
            class="text-field"
            type="text"
            name="description"
            cols={10}
            rows={10}
            required
          ></textarea>
        </div>

        <div className={styles.Field}>
          <select
            name="location"
            id="city"
            className={"form-select me-2"}
            defaultValue={""}
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
            defaultValue={""}
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
            required
          />
        </div>

        <div className={styles.Field}>
          <label for="OFcapacity">Out-field capacity: </label>
          <input
            class="text-field"
            type="text"
            name="OFcapacity"
            required
          />
        </div>

        <div className={styles.Field}>
          <select
            name="bathroom"
            className={"form-select me-2"}
            defaultValue={""}
            required
          >
            <option value="" disabled hidden>
              Select bathrooms availability
            </option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>

        <Button type="submit">List Court</Button>
      </form>
    </div>
  );
};

export default listCourtPage;
