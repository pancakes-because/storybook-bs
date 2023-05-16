import Card from 'react-bootstrap/Card';
import './Colors.css';

export const ColorsExample = ({success, wcag, number, hex, ...props}) => {
  const mode = success ? 'storybook-color--success' : 'storybook-color--warning';
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>wcag</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text>number</Card.Text>
        <Card.Text>hexcode</Card.Text>
      </Card.Body>
    </Card>
  );
}; 

export default ColorsExample;


// original card component from 

// import Card from 'react-bootstrap/Card';

// function BasicExample() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;
