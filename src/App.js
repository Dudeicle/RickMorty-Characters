import React from "react";

// COMPONENTS //
import CharacterPage from "./components/CharacterPage";

// STYLES IMPORTS //
import { HeaderStyle } from "./styles/HeaderStyles.js";
import { OuterMostStyle } from "./styles/OuterMostStyles.js";

function App() {
	return (
		<div>
			<OuterMostStyle>
				<HeaderStyle>
					<h1>Rick and Morty Characters</h1>
				</HeaderStyle>
				<div>
					<CharacterPage />
				</div>
			</OuterMostStyle>
		</div>
	);
}

export default App;
