export default function Appartement(appartement) {
  return (
    <div className="gallery-appartement">
      <img src={appartement.cover} alt={appartement.title} />
      <h3>{appartement.title}</h3>
    </div>
  );
}
