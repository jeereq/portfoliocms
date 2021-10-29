import React, { useEffect } from "react";
import { Form, Container } from "rsuite";
import Avatar from "../components/avatar";

export default function Home() {
	useEffect(() => {
		document.title = "page d'acceuille cms portfolio";
	}, []);
	return (
		<div>
			<div className="header degrade-white-purple display-flex justify-content-space-between text-white align-items-center">
				<div className="display-flex align-items-center">
					<div className="logo bg-white">
						<img
							src={require("../assets/image/indeghx.png").default}
							alt="notre logo"
						/>
					</div>
					<Form>
						<Form.Group>
							<Form.Control name="q" type="text" placeholder="recherche ..." />
						</Form.Group>
					</Form>
				</div>
				<div className="display-flex align-items-center">
					<div className="display-flex align-items-center"></div>
					<div className="display-flex align-items-center">
						<Avatar />
						<span>Minganda jeereq</span>
					</div>
				</div>
			</div>
			<Container className="padding bg-grey">
				<div className="resume">
					<div className="left text-white">
						<Avatar />
						<div style={{ marginLeft: 10 }} className="contenu">
							<h3>Bonjour Mj,</h3>
							<p>
								useEffect has missing dependencies: 'state.email' and
								'state.password'. Either include them or remove the dependency
								array react-hooks/exhaustive-deps useEffect has missing
								dependencies: 'state.email' and 'state.password'. Either include
								them or remove the dependency array react-hooks/exhaustive-deps
							</p>
						</div>
					</div>
					<div className="right display-flex justify-content-space-evenly align-items-center">
						<div className="statistique bg-grey ">
							<span>12</span>
							<h4>Projets</h4>
						</div>
						<div className="statistique bg-grey">
							{" "}
							<span>12</span>
							<h4>Competences</h4>
						</div>
						<div className="statistique bg-grey">
							{" "}
							<span>12</span>
							<h4>Messages</h4>
						</div>
					</div>
				</div>
				<h2 className="title-section">Projets</h2>
			</Container>
		</div>
	);
}
