import { useState } from "react";

function PetItem({ pet }) {
  const [image, setImage] = useState(pet.image);
  // note that image ^^ should be in the img that we want it to be changed, look down search to where 1st image is put
  // it was in <img className="image" alt={pet.name} src={pet.image} /> , we changed the src to {image} that is in the useState ^^^^
  const petThePet = () => {
    setImage(pet.image2);
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={petThePet} type="button" className="btn btn-info">
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
