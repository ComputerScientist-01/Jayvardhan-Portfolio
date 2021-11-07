import { InitiativeCard } from "../Components";
import initiativeLogo from "../Images/collaboration2.svg";
import "./pages.scss";

const Initiatives = () => {
	const initiativeValues = [
		{
			company: "Technocolabs",
			post: "Python Developer",
			duration: "JULY 2020 - AUGUST 2020",
			desc: "Built a full stack python project. Experienced hands on Data Visualisation and Manipulation using Matplotlib,Streamlit and other python libraries ",
		},
		{
			company: "Next Tech Lab",
			post: "Member",
			duration: "JULY 2020 - Present",
			desc: "Worked on Node.JS and Express JS , mentored 10+ new recruits and contributed to Open Source projects",
		},
		{
			company: "GenY",
			post: "Associate",
			duration: "JULY 2020 - AUGUST 2020",
			desc: "Worked on cutting edge Deep Learning and Machine Learning Projects. Built and tested Neural Networks from scratch and got state of the art results",
		},
	];

	return (
		<div style={{ display: "flex" }}>
			<div className="container my-auto">
				<div className="row">
					<div className="col-2"></div>
					<div className="col mt-5 mb-2">
						<p>
							A collection of initiatives I took on on my journey. Check out the
							Github repositories for further information.
						</p>
					</div>
					<div className="col-2"></div>
				</div>
				<div className="row">
					<div className="col-sm-12 col-lg-6 my-auto initiativeSVG">
						<img src={initiativeLogo} alt="initiative img not found" />
					</div>
					<div
						className="col-sm-12 col-lg-6 my-auto"
						style={{ paddingTop: "2em", paddingLeft: "4em" }}
					>
						{initiativeValues.map(({ company, post, duration, desc }) => (
							<InitiativeCard
								company={company}
								post={post}
								vertical={duration}
								desc={desc}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Initiatives;
