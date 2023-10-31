import React from "react";
import MesaVerde from "./parks/MesaVerde";
import { Trees, Wildlife } from "./parks/RockyMountain";
import HowManyParks from "./parks/HowManyParks";


function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <Wildlife />
      <HowManyParks />
    </div>
    )
}
export default ColoradoStateParks;
