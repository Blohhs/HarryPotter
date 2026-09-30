import './Filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Hermione" />
      </div>
      <div className="filter-group">
        <label htmlFor="school">School</label>
        <select id="school">
          <option value="">Choose one</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;