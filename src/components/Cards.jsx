import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


function Cards({ state }) {
  // console.log(state);
  const navigate = useNavigate()

  const totalDeaths = state.reduce((sum, item) => (sum += item.deaths), 0);
  const totalConfirmed = state.reduce(
    (sum, item) => (sum += item.confirmed),
    0
  );
  return (
    <div className="d-flex justify-content-center m-5">
      <Card className="text-center" style={{ width: "80%" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className="fs-1 text-danger">Country : {state[0].country}</Card.Title>
          <Card.Text>Total Confirmed : <span className="text-danger">
          {totalConfirmed}</span></Card.Text>
          <Card.Text>Total Deaths : <span className="text-danger">{totalDeaths}</span></Card.Text>
          <Card.Text>Last Updated : <span className="text-danger">{state[0].lastUpdate}</span></Card.Text>
          <Button variant="success" onClick={() => navigate("/")}>Go Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
