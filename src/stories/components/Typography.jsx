import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ListGroupExample = ({}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
      <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

// export default ListGroupExample;

// export const ListGroupExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <ListGroup variant="flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//     </Card>
//   );
// }

// export default ListGroupExample;