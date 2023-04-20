export default function Comments({ id, name, body }) {
  return (
    <div className="card-image d-flex my-2" key={id}>
      <div className="p-2">
        <img
          src="https://fakeimg.pl/100x100"
          alt="user"
          className="rounded-circle"
          width={55}
          height={55}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text">{body}</p>
      </div>
    </div>
  );
}
