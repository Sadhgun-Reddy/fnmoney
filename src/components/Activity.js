import './Activity.css'; // Note the change to .css

const Activity = ({ title, desc }) => {
  return (
    <div className="box">
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="cta">
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default Activity;
