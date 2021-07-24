import React from "react";
import { Cards } from "../component/Cards";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="mt-5">
		<div className="p-2">
			<h2>Characters</h2>
			<Cards item="Luke Skywalker" />
		</div>
		<div>
			<h2>Planets</h2>
		</div>
		<div>
			<h2>Vehicles</h2>
		</div>
	</div>
);
