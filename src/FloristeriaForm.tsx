import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Producto } from "./Clases/Producto";

export const FloristeriaForm = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const [inputSearch, setInputSearch] = useState("");
  const [id, setID] = useState("");
  const productos: Producto[] = [];
  const productosName: Producto[] = [];
  let productoDetails: Producto;

  function handleChange(event: any) {
    setInputSearch(event.target.value);
  }

  function handleClick(event: any) {
    setID(event.currentTarget.id);
    console.log(id);
  }

  useEffect(() => {
    fetch("https://dulces-petalos.herokuapp.com/api/product")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function resetId() {
    setID("");
  }

  function addProductos() {
    items.map((item) => {
      const producto = new Producto(
        item.id,
        item.name,
        item.binomialName,
        item.price,
        item.imgUrl,
        item.wateringsPerWeek,
        item.fertilizerType,
        item.heightInCm
      );
      productos.push(producto);
    });
  }
  function HomeView() {
    productos.map((producto) => {
      if (
        producto.name.includes(inputSearch) ||
        producto.binomialName.includes(inputSearch)
      ) {
        productosName.push(producto);
      }
    });

    return (
      <div>
        <div>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" onChange={handleChange} />
        </div>
        <div className="row">
          {productosName.map((resul) => (
            <div id={resul.id} onClick={handleClick} className="col-3 flower">
              <img
                src={resul.imgUrl}
                alt="flower image"
                className="flower_img"
              />
              <p>{resul.name}</p>
              <p>{resul.binomialName}</p>
              <p>{resul.price + "€"}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function vistaProductos() {
    productos.map((producto) => {
      if (producto.id === id) {
        productoDetails = producto;
        console.log(productoDetails);
      }
    });
    console.log(productoDetails.wateringsPerWeek);

    return (
      <div>
        <div>
          <button onClick={resetId}>BACK</button>
        </div>
        <div>
          <img src={productoDetails.imgUrl} alt="" />
        </div>
        <div>
          <p>{"Name: " + productoDetails.name}</p>
          <p>{"Binomial name: " + productoDetails.binomialName}</p>
          <p>{"Price: " + productoDetails.price + "€"}</p>
          <p>{"Watering per week: " + productoDetails.wateringsPerWeek}</p>
          <p>{"Fertilizer type: " + productoDetails.fertilizerType}</p>
          <p>{"Height: " + productoDetails.heightInCm + "cm"}</p>
        </div>
      </div>
    );
  }

  addProductos();
  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (!id) {
    return <div id="Container">{HomeView()}</div>;
  } else {
    return <div>{vistaProductos()}</div>;
  }
};
