async function getCharacter() {
  const res = await fetch("https://rickandmortyapi.com/api/character/2");
  return res.json();
}

const CharacterPage = async () => {
  const character = await getCharacter();

  return (
    <section>
      <h1 className="font-bold underline">{character.name}</h1>
    </section>
  );
};

export default CharacterPage;
