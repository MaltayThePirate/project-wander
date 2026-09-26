export default function PageHeader({ eyebrow, title, eyebrowClickable, onEyebrowClick, children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "22px",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <div>
        <div
          onClick={onEyebrowClick}
          className="eyebrow-label"
          style={{
            marginBottom: "4px",
            cursor: eyebrowClickable ? "pointer" : "default",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
          }}
          title={eyebrowClickable ? "Click to edit trip dates" : undefined}
        >
          {eyebrow}
        </div>
        <h1 className="page-heading">{title}</h1>
      </div>

      {children}
    </div>
  );
}