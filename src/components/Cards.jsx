import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(state) {
  // const totalDeaths = state.reduce((sum, item) => (sum += item.deaths), 0);
  // const totalConfirmed = state.reduce(
  //   (sum, item) => (sum += item.confirmed),
  //   0
  // );
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
