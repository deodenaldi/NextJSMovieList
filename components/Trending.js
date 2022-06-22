import {Card, Col, Container, Row, Image} from "react-bootstrap";

const Trending = () => {
	return (
		<Container>
			<Row>
				<Col md={4} className='movieWrapper'>
					<Card className='bg-transparent text-white text-center movieImage'>
						<Image src='/x-men.jpeg' alt='card image' height='auto'></Image>
						<div className='bg-dark p-2 m-1'>
							<Card.Text> Xmen Days of Future Past </Card.Text>
							<Card.Text> Bagus 3.8 / 4.0 </Card.Text>
						</div>
					</Card>
				</Col>
				<Col md={4} className='movieWrapper'>
					<Card className='bg-transparent text-white text-center movieImage'>
						<Image src='/x-men.jpeg' alt='card image' height='auto'></Image>
						<div className='bg-dark p-2 m-1'>
							<Card.Text> Xmen Days of Future Past </Card.Text>
							<Card.Text> Bagus 3.8 / 4.0 </Card.Text>
						</div>
					</Card>
				</Col>
				<Col md={4} className='movieWrapper'>
					<Card className='bg-transparent text-white text-center movieImage'>
						<Image src='/x-men.jpeg' alt='card image' height='auto'></Image>
						<div className='bg-dark p-2 m-1'>
							<Card.Text> Xmen Days of Future Past </Card.Text>
							<Card.Text> Bagus 3.8 / 4.0 </Card.Text>
						</div>
					</Card>
				</Col>
				<Col md={4} className='movieWrapper'>
					<Card className='bg-transparent text-white text-center movieImage'>
						<Image src='/x-men.jpeg' alt='card image' height='auto'></Image>
						<div className='bg-dark p-2 m-1'>
							<Card.Text> Xmen Days of Future Past </Card.Text>
							<Card.Text> Bagus 3.8 / 4.0 </Card.Text>
						</div>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Trending;
