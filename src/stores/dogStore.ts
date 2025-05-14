import { create } from "zustand";
import { DogStore } from "../model/dog";

const extractBreedInfo = (
  imageUrl: string
): { breed: string; subBreed: string } => {
  const match = imageUrl.match(/breeds\/([^/]+)\/([^/]+)\.(jpg|jpeg|png)/);

  if (match) {
    const [, breedFolder] = match;
    const parts = breedFolder.split("-");

    if (parts.length === 2) {
      return { breed: parts[1], subBreed: parts[0] };
    } else {
      return { breed: breedFolder, subBreed: "" };
    }
  }

  return { breed: "", subBreed: "" };
};

export const useDogStore = create<DogStore>((set) => ({
  breeds: [],
  subBreeds: [],
  selectedBreed: "",
  selectedSubBreed: "",
  dogs: [],
  randomDogs: [],
  fetchBreeds: async () => {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await res.json();
    const breedList = Object.keys(data.message);
    set({ breeds: breedList });
  },
  fetchSubBreeds: async (breed: string) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/list`);
    const data = await res.json();
    set({ subBreeds: data.message });
  },
  fetchDogs: async (breed: string, subBreed?: string) => {
    const breedUrl = subBreed
      ? `https://dog.ceo/api/breed/${breed}/${subBreed}/images`
      : `https://dog.ceo/api/breed/${breed}/images`;
    const res = await fetch(breedUrl);
    const data = await res.json();
    const dogs = data.message.map((imageUrl: string) => ({
      imageUrl,
      breed,
      subBreed: subBreed || "",
    }));

    set({ dogs });
  },
  fetchRandomDogs: async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/12");
    const data = await res.json();
    const randomDogs = data.message.map((imageUrl: string) => {
      const { breed, subBreed } = extractBreedInfo(imageUrl);
      return { imageUrl, breed, subBreed };
    });

    set({ randomDogs });
  },
  removeDog: (imageUrl: string) => {
    set((state) => ({
      dogs: state.dogs.filter((dog) => dog.imageUrl !== imageUrl),
      randomDogs: state.randomDogs.filter((dog) => dog.imageUrl !== imageUrl),
    }));
  },

  setBreed: (breed: string) => set({ selectedBreed: breed, subBreeds: [] }),
  setSubBreed: (subBreed: string) => set({ selectedSubBreed: subBreed }),
}));
