// import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import './typography.css';

export const DefaultExample = ({ heading, textName, textSize }) => {
  return (
    <ListGroup style={{ width: '11rem', variant: "flush"}}>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">{heading}</div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className={[`storybook-listItem--${textSize}`]}>{textName}</div>
          <div className={[`storybook-listItem--${textSize}`]}>{textSize}</div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}; 

export default DefaultExample;

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// export const ListGroupExample = ({ heading, textName, textSize }) => {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <ListGroup variant="flush">
//         <ListGroup.Item>{heading}</ListGroup.Item>
//         <Card.Text>{textName}</Card.Text>
//         <Card.Text>{textSize}</Card.Text>
//       </ListGroup>
//     </Card>
//   );
// }

// export default ListGroupExample;

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