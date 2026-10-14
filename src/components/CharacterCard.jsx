import { useId, useState } from "react";

function CharacterCard({ character }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const generatedId = useId();
  const profileId = `${character.id}-profile-${generatedId}`;

  return (
    <article
      className="character-card"
      style={{ "--accent-color": character.accent }}
    >
      <div className="card-accent" aria-hidden="true"></div>
      <img
        className="character-image"
        src={character.image}
        alt={`${character.name}, played by ${character.actor}`}
      />
      <div className="character-content">
        <h3>{character.name}</h3>
        <p className="actor-name">{character.actor}</p>
        <p className="role-pill">{character.role}</p>
        <p>{character.summary}</p>
        <button
          className="profile-toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={profileId}
          onClick={() => setIsExpanded((currentValue) => !currentValue)}
        >
          {isExpanded ? "Close profile" : "Open profile"}
        </button>
        <div className="character-profile" id={profileId} hidden={!isExpanded}>
          <h4>Personality</h4>
          <p>{character.personality}</p>
          <h4>Fun facts</h4>
          <ul>
            {character.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <figure>
            <blockquote>"{character.quote.text}"</blockquote>
            <figcaption>{character.quote.episode}</figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}

export default CharacterCard;
