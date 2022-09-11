import { SingleValue } from "react-select";
import { OptionType } from "../stories/SelectComponent";
import EntityType from "./entity.interface";

interface StateType {
    selectedEntities: EntityType[],
    allEntities: EntityType []
    removeFromSelected: (id:number) => void
    addSelected: (entity:EntityType) => void
    changeAccess: (access: SingleValue<OptionType>) => void
    changeIndividualAccess: (entity: EntityType,access: SingleValue<OptionType>) => void
  }
  
  export default StateType;