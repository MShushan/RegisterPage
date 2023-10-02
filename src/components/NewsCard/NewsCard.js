import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function NewsCardDone({ info }) {
    return (
        
            <Col lg={3} md={4} sm={6} xs={12}>
                <Card className='mb-4'>
                    
                    <Card.Img variant="top" src={info.picture} />
                    <Card.Body>
                        
                        <Card.Title>{info.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            {info.text}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
    
    )
}
export default NewsCardDone;