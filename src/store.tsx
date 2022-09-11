import EntityType from "./interface/entity.interface";
import create from "zustand";
import StateType from "./interface/state.interface";
import { ACCESS_LIST } from "./enums/access.enum";
import { OptionType } from "./stories/SelectComponent";
import { SingleValue } from "react-select";

const useEntityStore = create<StateType>((set) => ({
  allEntities: [
    {
      id: 0,
      name: "Tom Cook",
      avatarUrl: "https://i.pravatar.cc/50??u=tom",
      email: "tom@email.com",
      isPerson: true,
      access: ACCESS_LIST.NO_ACCESS,
    },
    {
      id: 1,
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/50??u=john",
      email: "john@email.com",
      isPerson: true,
      access: ACCESS_LIST.NO_ACCESS,
    },
    {
      id: 2,
      avatarUrl: "https://i.pravatar.cc/50??u=product",
      name: "Product",
      email: "product@email.com",
      isPerson: false,
      access: ACCESS_LIST.NO_ACCESS,
    },
    {
      id: 3,
      name: "Engineering",
      avatarUrl: "https://i.pravatar.cc/50??u=engineering",
      email: "engineering@email.com",
      isPerson: false,
      access: ACCESS_LIST.NO_ACCESS,
    },
  ],
  selectedEntities: [],
  removeFromSelected: (id: number) =>
    set((state: StateType) => {
      const selectedEntities = state.selectedEntities.filter(
        (entity: EntityType) => entity.id !== id
      );
      return { selectedEntities };
    }),
  addSelected: (entity: EntityType) =>
    set((state: StateType) => {
      const selectedEntities = [...state.selectedEntities, entity];
      return { selectedEntities };
    }),
  changeAccess: (access: SingleValue<OptionType>) =>
    set((state: StateType) => {
      const selectedEntities = state.selectedEntities.map(
        (entity: EntityType) => {
          return { ...entity, access: access?.value || "" };
        }
      );
      return { selectedEntities };
    }),
    changeIndividualAccess: (individualEntity: EntityType,access: SingleValue<OptionType>) =>
    set((state: StateType) => {
      const selectedEntities = state.selectedEntities.map(
        (entity: EntityType) => {
          if(individualEntity.id === entity.id){
            return { ...entity, access: access?.value || "" };
          } else {
            return entity
          }
        }
      );
      return { selectedEntities };
    }),
}));

export default useEntityStore;
