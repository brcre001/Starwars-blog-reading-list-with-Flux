import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export const Cards = props => {
	const [favorite, setFavorite] = useState(true);

	return (
		<Card style={{ width: "18rem" }} className="col-2 m-3 p-0">
			<Card.Img variant="top" src="holder.js/400px200" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.body}</Card.Text>
				<Button variant="outline-primary">Learn More!</Button>
				<Button variant="outline-warning" className="float-right" onClick={() => setFavorite(!favorite)}>
					{favorite ? <i className="far fa-heart" /> : <i className="fas fa-heart" />}
				</Button>
			</Card.Body>
		</Card>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string
};
