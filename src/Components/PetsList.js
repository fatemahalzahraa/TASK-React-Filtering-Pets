import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";

function PetsList() {
  //we used a useState because we want the changes that we apply to be tracked always!
  // searchQuery is a variable and setSearchQuery is a FUNCTION that changes the value of the variable.
  const [searchQuery, setSearchQuery] = useState("");

  //

  const [type, setType] = useState("");

  //NOTE!!
  //because we want to filter the names we will choose pets.name in the if statement
  //if we want to filter anything else we will use pet.thething instead!!
  //NOTE THAT we want to give filteredPets a value >> its value is declared through something below (FIND IT OUT!!)
  const filteredPets = pets.filter((pet) => {
    if (pet.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  });

  //
  //we put filteredPets.filter instead of pets.filter because if the user didn't give us anything
  //it will already iterate through PETS ^^ which is already in function above
  //WE did that because we want if we choose the type Dog and the name of that dog, THAT dog is filtered!
  //we basically chained both of them together! (this is done if we were asked for both names and types of pets to be filtered together to give a unique dog/cat/rabbit)
  const filteredTypes = filteredPets.filter((pet) => {
    if (pet.type.includes(type)) {
      return true;
    } else {
      return false;
    }
  });

  //!!!the function below was already included in the code YOU didn't write it!!!
  //HOWEVER we don't want the whole pets to be mapped, we just want to map the FILTERED PETS which
  //basically includes the NAME of the pet that we will write in the search bar!
  // THAT IS WHY we changed the mapping from (pets.map) to (filteredPets.map)
  //CHANGED!!!!!!!!!!!!!!>> we changed filteredPets.map to filteredTypes.map because we combined both together
  const petList = filteredTypes.map((pet) => (
    <PetItem pet={pet} key={pet.id} />
  ));

  //we used this function because we want to give the setSearchQuery a value "which is what we write in the search bar"
  //but why we used setSearchQuery and not searchQuery? ASK!
  //
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //

  const PetSelector = (event) => {
    setType(event.target.value);
  };

  //NOTE : we used onChange property on our target (search bar) which is included in <input/>
  //and we declared it by a function "^^^written above this comment^^^"

  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={handleChange}
                />
              </div>
              <br />
              Type:
              <select className="form-select" onChange={PetSelector}>
                <option value="" selected>
                  All
                </option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
