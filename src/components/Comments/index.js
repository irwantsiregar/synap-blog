import Image from "next/image";

export default function Comments({ id, name, body, gender }) {
  return (
    <div className="card-image d-flex my-2" key={id}>
      <div className="p-2">
        <Image
          src={`/avatar/${gender === "male" ? "male.png" : "female.png"}`}
          alt={name}
          className="rounded-circle"
          width={65}
          height={60}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text">{body}</p>
      </div>
    </div>
  );
}
