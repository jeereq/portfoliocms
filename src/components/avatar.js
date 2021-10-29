import React from "react";

export default function Avatar() {
	return (
		<div className="avatar bg-white">
			<img
				src={require("../assets/image/IMG_20210908_113203.jpg").default}
				alt="profile image"
			/>
		</div>
	);
}
