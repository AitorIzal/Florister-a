import { Producto } from "../Clases/Producto";
import { useEffect, useState } from "react";

export function homeView(item: Producto[]) {
  console.log(item);
  const [inputSearch, setInputSearch] = useState("");
  const p: Producto[] = [];

  function handleChange(event: any) {
    setInputSearch(event.target.value);
  }

  item.map((i) => {
    if (i.name.includes(inputSearch)) {
      p.push(i);
    }

    console.log(p);
  });

  return (
    <div className="container-fluid">
      <div>
        <div>
          <label htmlFor="">search</label>
          <input type="text" onChange={handleChange} />
        </div>

        {p.map((resul) => (
          <div>
            <div id={resul.id}>
              <img src={resul.imgUrl} alt="" />
              <br />
              <p>{resul.name}</p>
              <p>{resul.binomialName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
