import data from './../../products.json';
import { Tile } from './Tile';

export const TileContainer = () => {
  return (
  <>
  {data.map(m => 
      <Tile
        key={Math.random()}
        image={m.image}
        label={m.label}
        name={m.name}
        price={m.price}
      />
    )
  }
  </>
  ) 
};