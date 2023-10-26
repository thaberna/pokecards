import CardList from "./components/CardList";

function App() {
  return (
    <main className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 py-6 h-screen overflow-auto">
      <h1 className="text-6xl font-bold text-center tracking-tight text-amber-950">
        PokeCards
      </h1>
      <CardList />
    </main>
  );
}

export default App;
