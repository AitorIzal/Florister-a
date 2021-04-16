export class Producto {
  id: string;
  name: string;
  binomialName: string;
  price: number;
  imgUrl: string;
  wateringPerWeek: number;
  fertilizerType: string;
  heightInCm: number;
  constructor(
    id: string,
    name: string,
    binomialName: string,
    price: number,
    imgUrl: string,
    wateringPerWeek: number,
    fertilizerType: string,
    heightInCm: number
  ) {
    this.id = id;
    this.name = name;
    this.binomialName = binomialName;
    this.price = price;
    this.imgUrl = imgUrl;
    this.wateringPerWeek = wateringPerWeek;
    this.fertilizerType = fertilizerType;
    this.heightInCm = heightInCm;
  }
}
