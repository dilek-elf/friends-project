import CharacterCard from "./CharacterCard.jsx";

function CharacterGrid({ characters }) {
  return (
    <section
      className="characters-section"
      id="characters"
      aria-labelledby="characters-heading"
    >
      <div className="section-heading">
        <p className="eyebrow">The regulars</p>
        <h2 id="characters-heading">Meet the regulars</h2>
        <p>
          Six friends. Six personalities. There's always room at their table.
        </p>
      </div>

      <ul className="character-grid" aria-label="Friends character cards">
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CharacterGrid;
