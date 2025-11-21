export default function PlaceholderImage({ icon, gradient }) {
  return (
    <div
      className="placeholder-visual"
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`
      }}
    >
      <div className="placeholder-visual__glow" />
      <i className={icon}></i>
    </div>
  );
}

