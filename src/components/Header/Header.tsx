import React from "react";
import Avatar from "../../assets/avatar/avatar.svg";
import iconSetting from "../../assets/iconSetting/iconSetting.svg";
import { SubMenu } from "../SubMenu/SubMenu";

interface Props {}

export const Header: React.FC<Props> = (props) => {
	const routes = {
		story: "История расследований",
		investigation: "Расследование",
		journal: "Журнал",
	};

	return (
		<div className="main-header">
			{/*@ts-ignore*/}
			<div className="breadcrumb">{routes[window.location.pathname.slice(1)]}</div>
			<div className="avatar">
				{/*@ts-ignore*/}
				<span>{window.keycloak.idTokenParsed.preferred_username}</span>
				<img src={Avatar} alt="avatar" />
				<span className="settings">
					<img style={{ cursor: "pointer", marginLeft: "15px" }} src={iconSetting} />
					<SubMenu
						onExit={() => {
							/*@ts-ignore*/
							window.keycloak.logout();
						}}
					/>
				</span>
			</div>
		</div>
	);
};
