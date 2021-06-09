import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";

import "./Auth";
import authFunc from "./Auth";

export function Home() {
	const [message, setMessage] = useState("Loading...");


	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	

	return (
		<main role="main">
			<div>
				<h1 className="message" data-qa="message">{message}</h1>
				<Link to="/about/this/site">About</Link>
				<button onClick={authFunc}children="">Auth with Waves Signer</button>
			</div>
		</main>
	);
}

export default Home;
