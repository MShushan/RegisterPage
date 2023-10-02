import { CardBody, CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa6'

function UserCardDone() {
  return (
    <Card className='d-flex rounded-6' style={{height: '33em' , width: '18rem'}}>
        <Card.Body className= 'rounded-5' style={{background: 'linear-gradient(red,brown)', padding:'5em'}}>

        </Card.Body>
     
      <Card.Body style = {{transform:'translateY(-5em)' , padding: '2em' , display: 'flex', justifyContent:'center', alignItems:'center' , flexDirection:'column'}}>
      <Card.Img variant="top" src="image/5.jpg" style={{width: '50%', marginBottom:'1em', borderRadius: '50%'}} />
        <Card.Title>Card Title</Card.Title>
        <CardText>Product design</CardText>
        <CardBody style={{borderBottom: '3px solid red', width:'70%', marginTop:'-1em'}}></CardBody>
        <Card.Text className='text-center mt-2'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Body>
        <Button className='m-2 bg-transparent text-success border-0'variant="primary"><FaTwitter/></Button>
        <Button className='m-2 bg-transparent text-success border-0 'variant="primary"><FaFacebook/></Button>
        <Button className='m-2 bg-transparent text-success border-0'variant="primary"><FaInstagram/></Button>
        </Card.Body>
      </Card.Body>
    </Card>
  );
}

export default UserCardDone;