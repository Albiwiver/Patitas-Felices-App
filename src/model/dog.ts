type Dog = {
  imageUrl: string;
  breed: string;
  subBreed: string;
};

type RandomDogs = {
  imageUrl: string;
  breed: string;
  subBreed: string;
};

export interface DogStore {
  breeds: string[];
  subBreeds: string[];
  selectedBreed: string;
  selectedSubBreed: string;
  dogs: Dog[];
  randomDogs: RandomDogs[];
  fetchBreeds: () => void;
  fetchSubBreeds: (breed: string) => void;
  fetchDogs: (breed: string, subBreed?: string) => void;
  fetchRandomDogs: () => void;
  removeDog: (imageUrl: string) => void;
  setBreed: (breed: string) => void;
  setSubBreed: (subBreed: string) => void;
}
