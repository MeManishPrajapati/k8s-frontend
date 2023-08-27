import React, { useState } from "react";
import Home from "./screens/Home";
import { SCREENS } from "./constants/screen.constants";
import NewUser from "./screens/NewUser";

const App = () => {
    const [screen, setScreen] = useState(SCREENS.HOME)

    let displayScreen = <Home />

    if (screen === SCREENS.NEW_USER)
        displayScreen = <NewUser />

    return <div>
        <button onClick={() => setScreen(SCREENS.HOME)}>Home</button>
        <button onClick={() => setScreen(SCREENS.NEW_USER)}>Add user</button>
        <br />
        {displayScreen}
    </div>

}

export default App