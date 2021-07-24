import "./App.css";
import RouterComp from "./config/router";
import { auth } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <div className="App">
      {/* {user ? <RouterComp user={user} />
        :
        <div className="loadingdivonAppjs">
          <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />

        </div>
      } */}

      <RouterComp user={user} />
    </div>
  );
}

export default App;
