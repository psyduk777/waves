import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from "./logo.svg";

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

	function authFunc() {
		const authData = { data: 'Auth on my site'};
	   
		if (WavesKeeper) {
			console.log("start")
			WavesKeeper.auth(authData)
			.then( auth => {
				alert(JSON.stringify(auth))
				console.log(JSON.stringify(auth));
			}).catch(error => {
				console.log(error);
			});
		} else {
			alert("To Auth Waveskeeper should be installed")
		}
	   }

	return (
		<main role="main">
			<div>
				<img className="logo" data-qa="logo" src={logo} alt="Just the React logo" />
				<h1 className="message" data-qa="message">{message}</h1>
				<Link to="/about/this/site">About</Link>
				<button onClick={authFunc}children="">Auth</button>
			</div>
		</main>
	);
}

export default Home;
