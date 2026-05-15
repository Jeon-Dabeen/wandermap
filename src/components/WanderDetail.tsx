import InfosContext from "../contexts/InfosContext";
import MapDetail from "./MapDetail";

export default function WanderDetail() {
  return (
    <div>
      <header>Wandermap</header>
      <main>
        <InfosContext.Provider value={null}>
          <MapDetail />
        </InfosContext.Provider>
      </main>
      <footer>&copy;다빈</footer>
    </div>
  );
}
