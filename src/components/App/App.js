import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HeaderDone from '../Header';
import NewsCardDone from '../NewsCard';
import UserCardDone from '../UserCard';


import { Container, Row } from 'react-bootstrap'
function App() {
  const cardInfoArr = [
    {
      id: 0,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/images/3.jpg',
    },
    {
      id: 1,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/images/3.jpg',

    },
    {
      id: 2,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/images/3.jpg',

    },
    {
      id: 3,
      title: "Card Title",
      text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
      picture: '/images/3.jpg',

    },
  ]


  return (
    <div className="App">
      <HeaderDone />


      <Container className='mb-5'>
        <h1>My Peronal blog</h1>
        <p>

          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

        <Row>
          {
            cardInfoArr.map((val) => {
              return <NewsCardDone info={val} />
            })

          }



        </Row>

      </Container>

      <Container className='mb-5'>
        <UserCardDone/>
      </Container>

      <Container fluid className='bg-dark text-white p-3 text-center'>
        <Container>
          &copy; 2023 News protal.All Rights Reserved.
        </Container>
      </Container>


    </div>

  )


};

export default App;