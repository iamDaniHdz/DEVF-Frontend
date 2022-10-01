import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../styles.scss"

const Pokemon = ({ id, name, src, number, abilities, key }) => {
  return (
    <Card key={id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {number} {
                abilities.map((a)=>{return a})
            }
        </Card.Text>
        <Button variant="primary">Gritar!</Button>
      </Card.Body>
    </Card>
  );
};

export {Pokemon};