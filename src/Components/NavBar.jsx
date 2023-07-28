export default function NavBar({ data }) {
  return (
    <div className="container">
      {data.map((element, i) => (
        <div className="navbar">
          <p key={i}>{element.name}</p>
        </div>
      ))}
    </div>
  );
}
