export default function Pillow({ imgSrc, pillowName }) {
  return (
    <div className="pillow-section">
      <img className="pillow-image" src={imgSrc} />

      {pillowName ? (
        <p>
          This Pillow's name is <span>{pillowName}</span>
        </p>
      ) : (
        <p>This Pillow does not have name yet!</p>
      )}
    </div>
  );
}
