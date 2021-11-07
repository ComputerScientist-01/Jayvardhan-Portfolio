import { ProjectCard } from "../Components";
import proj1 from "../Images/ProjectImgs/proj1.jpg";
import proj2 from "../Images/ProjectImgs/proj2.jpg";
import proj3 from "../Images/ProjectImgs/proj3.jpg";
import proj4 from "../Images/ProjectImgs/proj4.jpg";

const Projects = () => {
	const projectValues = [
		{
			title: "Weather App",
			gitHubLink: "https://github.com/ComputerScientist-01/Weather-app-heroku",
			siteLink: "https://jayvardhan-weather-app.herokuapp.com/",
			imgSrc: proj1,
		},

		{
			title: "Sorting Visualiser",
			gitHubLink: "https://github.com/ComputerScientist-01/Sorting-Visualizer",
			siteLink: "#",
			imgSrc: proj2,
		},
		{
			title: "Tile Matching Game",
			gitHubLink: "https://github.com/ComputerScientist-01/Tile-Matching-Game",
			siteLink: "#",
			imgSrc: proj3,
		},
		{
			title: "Telephone Directory System",
			gitHubLink:
				"https://github.com/ComputerScientist-01/Telephone_Directory_system",
			siteLink: "#",
			imgSrc: proj4,
		},
		{
			title: "Cryptocurrency Tracker",
			gitHubLink: "https://github.com/ComputerScientist-01/Crypto-Tracker",
			siteLink:
				"https://share.streamlit.io/computerscientist-01/crypto-tracker/main/main.py",
			imgSrc: proj1,
		},
		{
			title: "Task Manager Backend",
			gitHubLink:
				"https://github.com/ComputerScientist-01/Express-Task-Manager",
			siteLink: "#",
			imgSrc: proj1,
		},
	];

	return (
		<div style={{ display: "flex" }}>
			<div className="container my-auto">
				<div className="row">
					<div className="col-2"></div>
					<div className="col mt-5 mb-2">
						<p>
							A collection of Projects I made on on my journey. Check out the
							github repositories for further information.
						</p>
					</div>
					<div className="col-2"></div>
				</div>
				<div className="row" style={{ margin: "30px" }}>
					{projectValues.map(({ title, gitHubLink, siteLink, imgSrc }) => (
						<div className="col-xs-12 col-sm-12 col-md-6">
							<ProjectCard
								title={title}
								gitHubLink={gitHubLink}
								siteLink={siteLink}
								imgSrc={imgSrc}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
