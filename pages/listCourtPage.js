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
          <label for="In-field-capacity">In-field capacity: </label>
          <input
            class="text-field"
            type="text"
            name="In-field-capacity"
            required
          />
          <label for="Out-field-capacity">Out-field capacity: </label>
          <input
            class="text-field"
            type="text"
            name="Out-field-capacity"
            required
          />
          <label for="Bathrooms">Bathrooms: </label>
          <select name="Bathrooms">
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
