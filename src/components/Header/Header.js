import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HeaderDone() {
    return (
        <>
            
            <Navbar expand="lg" className="bg-body-tertiary mb-5">
                <Container fluid>
                    
                    <Navbar.Brand href="#">News</Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className='me-2' as="input" type="button" value="Input" />
                            <Button className='me-2' variant="outline-success">Search</Button>
                            <Button className='me-2'variant="outline-danger">Danger</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default HeaderDone;