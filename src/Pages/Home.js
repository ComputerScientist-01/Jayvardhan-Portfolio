import { LightBtn } from "../Components";
import heroLogo from "../Images/virtual-reality.svg";
import "./pages.scss";

const Home = () => {
	return (
		<div style={{ display: "flex", height: "80vh" }}>
			<div className="container my-auto">
				<div className="row">
					<div
						className="col-sm-12 col-md-6 col-lg-6 my-auto"
						style={{ paddingTop: "2em", paddingLeft: "4em" }}
					>
						<h3>This is</h3>
						<h1>JAYVARDHAN RATHI</h1>
						<p>
							I define myself not by the work I’ve done, but by the work I want
							to do. I am motivated by challenges, and I am inspired by
							innovations. I am an avid programmer who enjoys writing code from
							scratch and bringing ideas to life. As a lifelong learner, I
							believe that constantly honing my craft and exploring new ideas is
							essential.I’m naturally inquisitive, self‑assuredly perseverant,
							and constantly striving to improve my skill‑set one project at a
							time.
						</p>
						<br />
						<a
							href="https://github.com/ComputerScientist-01"
							className="myworkLink"
						>
							<LightBtn>My works</LightBtn>
						</a>
					</div>
					<div
						className="col-sm-12 col-md-6 col-lg-6 my-auto"
						style={{
							paddingTop: "2em",
							paddingLeft: "4em",
							paddingRight: "4em",
						}}
					>
						<img src={heroLogo} alt="hero img not found" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
