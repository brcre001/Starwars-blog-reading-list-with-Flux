import React from "react";
import { Cards } from "../component/Cards";
import "../../styles/home.scss";

export const Home = () => (
	<div className="p-3">
		<div className="">
			<h2>Characters</h2>
			<div className="d-flex">
				<Cards title="Luke Skywalker" />
				<Cards title="R2-D2" />
				<Cards title="C3-P0" />
			</div>
		</div>
		<div>
			<h2>Planets</h2>
		</div>
		<div>
			<h2>Vehicles</h2>
		</div>
	</div>
);
