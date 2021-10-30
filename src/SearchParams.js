import {useState, useEffect} from 'react';
import Results from './Results';

const locationList = [
    "Seattle",
    "Minneapolis",
    "Denver",
    "Carol Stream",
    "Charlotte",
    "Springfield",
    "Tucson",
  ];
  
function SearchParams() {
    const [location, setLocation] = useState("");
    const [animalList, setAnimalList] = useState([]);
    const [animal, setAnimal] = useState("");
  
    const [breedList, setBreedList] = useState([]);
    const [breed, setBreed] = useState("");
  
    const [petsList, setPetList] = useState([]);
  
    let callAnimalList = async () => {
      let response = await fetch(
        `https://pets-v2.dev-apis.com/pets?city=${location}`
      );
      response = await response.json();
  
      let pets = response.pets;
      let list = [];
      for (let i = 0; i < pets.length; i++) {
        list.indexOf(pets[i].animal) === -1 && list.push(pets[i].animal);
      }
      setAnimalList(list);
    };
  
    //   For Breed
  
    let callBreedList = async () => {
      let response = await fetch(
        `https://pets-v2.dev-apis.com/pets?city=${location}&animal=${animal}`
      );
      response = await response.json();
  
      let pets = response.pets;
      let list = [];
      for (let i = 0; i < pets.length; i++) {
        list.indexOf(pets[i].breed) === -1 && list.push(pets[i].breed);
      }
      setBreedList(list);
    };
  
    let CallPetList = async () => {
      let response = await fetch(
        `https://pets-v2.dev-apis.com/pets?city=${location}&animal=${animal}&breed=${breed}`
      );
      response = await response.json();
  
      setPetList(response.pets);
    };
  
    useEffect(() => {
      callAnimalList();
    }, [location]);
  
    useEffect(() => {
      callBreedList();
    }, [animal]);
  
    useEffect(() => {
      CallPetList();
    }, [breed]);
  
    return (
      <div className="search-params">
        <form>
          {/* This is for Location drop-dowm  */}
          <label htmlFor="location">
            Location
            <select
              id="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              value={location}
            >
              <option></option>
              {locationList.map((city) => {
                return <option key={city}>{city}</option>;
              })}
            </select>
          </label>
          {/* This is for Animal drop-dowm  */}
          <lable htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
              }}
              onBlur={(e) => {
                setAnimal(e.target.value);
              }}
            >
              <option />
              {animalList.map((animalItem) => {
                return (
                  <option key={animalItem} value={animalItem}>
                    {animalItem}
                  </option>
                );
              })}
            </select>
          </lable>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={breed}
              onChange={(e) => {
                setBreed(e.target.value);
              }}
              onBlur={(e) => setBreed(e.target.value)}
            >
              <option />
              {breedList.map((breedItem) => {
                return (
                  <option key={breedItem} value={breedItem}>
                    {breedItem}
                  </option>
                );
              })}
            </select>
          </label>
          <button class = "button" onClick={(e) => {
            e.preventDefault();
            CallPetList();
          }}>Submit</button>
          <button class = "button"  onClick="window.location.reload();">Refresh</button>
        </form>
        <Results pets={petsList} />
      </div>
    );
  };

export default SearchParams
