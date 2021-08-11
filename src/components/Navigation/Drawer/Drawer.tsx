import React from "react";
import classNames from "classnames";
import iconInvestigation from "../../../assets/iconInvestigation/iconInvestigation.svg";
import iconStory from "../../../assets/iconStory/iconStory.svg";
import iconJob from "../../../assets/iconJob/iconJob.svg";
import logo from "../../../assets/logo/logo.svg";
import logoShort from "../../../assets/logo/logoShort.svg";
import { NavLink } from "react-router-dom";

interface LinkType {
	to: string;
	label: string;
	exact: boolean;
	src: string;
}

interface Props {
	isOpen: boolean;
}

export const Drawer: React.FC<Props> = (props) => {
	const renderLinks = (links: LinkType[]): React.ReactNodeArray => {
		return links.map((link, index) => {
			return (
				<li key={link.src} className="nav-header-li-item">
					<NavLink to={link.to} exact={link.exact} activeClassName="active">
						<img src={link.src} title={link.label} width="24" height="24" />
						<span>{link.label}</span>
					</NavLink>
				</li>
			);
		});
	};
	const links: LinkType[] = [];

	links.push({
		to: "/investigation",
		label: "Расследование",
		exact: false,
		src: iconInvestigation,
	});
	links.push({
		to: "/story",
		label: "История",
		exact: false,
		src: iconStory,
	});
	links.push({
		to: "/journal",
		label: "Журнал",
		exact: false,
		src: iconJob,
	});

	return (
		<React.Fragment>
			<nav className={classNames("drawer", { close: !props.isOpen })}>
				<div className={props.isOpen ? "nav-header" : "nav-header narrow"}>
					<img src={props.isOpen ? logo : logoShort} />
				</div>
				<span className="line-sub-logo"></span>
				<ul>{renderLinks(links)}</ul>
			</nav>
		</React.Fragment>
	);
};
