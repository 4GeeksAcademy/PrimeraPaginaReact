import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotrom } from "./Jumbotrom";
import { Card } from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar></Navbar>

			<div className="container mb-5">
				<Jumbotrom></Jumbotrom>
				<Card></Card>
			
				
			</div>

			<div class="container my-5">
				<hr size="1px" color="black" />
			</div>

			<div className="">
				Copyright©
			</div>



		</div>
	);
};

export default Home;	