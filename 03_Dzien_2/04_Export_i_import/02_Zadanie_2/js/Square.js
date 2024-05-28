import { Polygon } from "./Polygon.js";
export { Square };

class Square extends Polygon {
  constructor(dim = 5) {
    super(dim, dim);
    this.name = 'Square';
  }
}
