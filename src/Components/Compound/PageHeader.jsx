import "./PageHeader.scss";

export const PageHeader = ({
  title,
  description,
  headerStyle,
  imageSource,
}) => {
  return (
    <div className="page-header" style={headerStyle}>
      <img
        src={imageSource}
        className="page-header-image"
        alt="Page header reperesentation"
      />
      <div className="page-header-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
