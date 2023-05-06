import styles from "../styles/listCourtPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const listCourtPage = () => {
  return (
    <div className={styles.container}>
      <h1>Fill out the court listing</h1>
      <form>
        <div className={styles.Field}>
          <label>Court Name: </label>
          <input class="text-field" type="text" name="title" required />
        </div>

        <div className={styles.Field}>
          <label>Price: </label>
          <input class="text-field" type="text" name="price" required />
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
            <option value="dammam">Dammam</option>
            <option value="khobar">Khobar</option>
            <option value="dhahran">Dhahran</option>
            <option value="alahasa">Al Ahsa</option>
            <option value="saihat">Saihat</option>
            <option value="qatif">Qatif</option>
            <option value="riyadh">Riyadh</option>
            <option value="jeddah">Jeddah</option>
            <option value="medina">Medina</option>
          </select>
        </div>

        <div className={styles.Field}>
          <select
            name="sport"
            id="sport"
            className={"form-select me-2"}
            defaultValue={""}
            required
          >
            <option value="" disabled hidden>
              Select the sport
            </option>
            <option value="football">Football</option>
            <option value="Tennis">Tennis</option>
            <option value="basketball">Basketball</option>
            <option value="paddle">Paddle</option>
            <option value="volleyball">Volleyball</option>
          </select>
        </div>

        <div className={styles.Field}>
          <label for="In-field-capacity">In-field capacity: </label>
          <input
            class="text-field"
            type="text"
            name="In-field-capacity"
            required
          />
        </div>

        <div className={styles.Field}>
          <label for="Out-field-capacity">Out-field capacity: </label>
          <input
            class="text-field"
            type="text"
            name="Out-field-capacity"
            required
          />
        </div>

        <div className={styles.Field}>
          <select
            name="Bathrooms"
            className={"form-select me-2"}
            defaultValue={""}
            required
          >
            <option value="" disabled hidden>
              Select bathrooms availability
            </option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <Button type="submit">List Court</Button>
      </form>
    </div>
  );
};

export default listCourtPage;
