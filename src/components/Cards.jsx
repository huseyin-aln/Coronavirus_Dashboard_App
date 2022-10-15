import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function Cards({ state, totalConfirmed, totalDeaths, recovered }) {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center m-5">
      <Card className="text-center" style={{ width: "20rem" }}>
        <Card.Img className="w-25 d-block m-auto" variant="top" />

        <Card.Body className="fs-5">
          <Card.Title className="fs-2 text-danger">
            Country : {state[0].country}
          </Card.Title>
          <Card.Text>
            Total Confirmed :
            <span className="text-danger">{totalConfirmed}</span>
          </Card.Text>
          <Card.Text>
            Total Deaths : <span className="text-danger">{totalDeaths}</span>
          </Card.Text>
          <Card.Text>
            Recovered : <span className="text-danger">{recovered}</span>
          </Card.Text>
          <Card.Text>
            Last Updated :
            <span className="text-danger">
              {moment(state[0].lastUpdate).format("dddd Do, YYYY")}
            </span>
          </Card.Text>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
