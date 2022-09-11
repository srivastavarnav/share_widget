import { LABEL_SIZE } from "../enums/button.enum";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../stories/Button";
import SelectComponent, { OptionType } from "../stories/SelectComponent";
import { ACCESS_LIST } from "../enums/access.enum";
import { ACCESS } from "../constants/constants";
import useEntityStore from "../store";
import StateType from "../interface/state.interface";
import EntityType from "interface/entity.interface";
import { SingleValue } from "react-select";
import { useNavigate } from "react-router-dom";
import HelpSection from "../stories/HelpSection";
import Pill from "../stories/Pill";
import Entity from "../stories/Entity";

function Search() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [access, setAccess] = useState<SingleValue<OptionType>>({
    label: ACCESS_LIST.NO_ACCESS,
    value: ACCESS_LIST.NO_ACCESS,
  });

  const [filteredList, setFilteredList] = useState<{
    people: EntityType[];
    group: EntityType[];
  }>({ group: [], people: [] });

  const selectedEntities = useEntityStore(
    (state: StateType) => state.selectedEntities
  );
  const allEntities = useEntityStore((state: StateType) => state.allEntities);
  const removeFromSelected = useEntityStore(
    (state: StateType) => state.removeFromSelected
  );
  const addSelected = useEntityStore((state: StateType) => state.addSelected);
  const changeAccess = useEntityStore((state: StateType) => state.changeAccess);

  const filterAndGroup = useCallback(
    (search: string = "") => {
      const group: EntityType[] = [];
      const people: EntityType[] = [];
      allEntities.forEach((item: EntityType) => {
        const index = selectedEntities.findIndex(
          (selected: EntityType) => item.id === selected.id
        );
        if (index === -1) {
          if (
            search &&
            item.name.toLowerCase().includes(search.toLowerCase())
          ) {
            if (item.isPerson) {
              people.push(item);
            } else {
              group.push(item);
            }
          } else if (!search) {
            if (item.isPerson) {
              people.push(item);
            } else {
              group.push(item);
            }
          }
        }
      });
      setFilteredList({
        group,
        people,
      });
    },
    [allEntities, selectedEntities]
  );

  useEffect(() => {
    filterAndGroup(searchText);
  }, [filterAndGroup, searchText]);

  const onPillRemove = (id: number) => {
    removeFromSelected(id);
  };

  const onEntityClick = (entity: EntityType) => {
    addSelected({ ...entity, access: access?.value || "" });
    setSearchText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onAccessChange = (value: SingleValue<OptionType>) => {
    setAccess(value);
    changeAccess(value);
  };

  const onInvite = () => {
    navigate("/");
  };

  return (
    <div className="search-container center-div">
      <div className="search-start-container flex-between-center">
        <div className="flex-row search-pill-container">
          {selectedEntities.map((entity) => {
            return (
              <Pill
                key={entity.name}
                id={entity.id}
                name={entity.name}
                onCloseClick={onPillRemove}
              />
            );
          })}
          <div>
            <input
              type="text"
              name="search"
              className="input-box text-base search-input"
              placeholder="People, emails, groups"
              onChange={handleChange}
              value={searchText}
            />
          </div>
        </div>
        <div className="flex-items-center">
          <div className="mr-4">
            <SelectComponent
              className="cursor-pointer"
              options={ACCESS}
              onChange={onAccessChange}
              value={access}
              placeholder="Months"
              menuPlacement="bottom"
              isSearchable={false}
            />
          </div>
          <div>
            <Button
              label="Invite"
              variant="secondary"
              labelSize={LABEL_SIZE.SMALL}
              style={{
                border: "1px solid #D1D5DB",
                padding: "9px 13px",
                borderRadius: "6px",
              }}
              disabled={selectedEntities.length === 0}
              onClick={onInvite}
            />
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="entity-list">
        <div className="mb-6">
          {filteredList.people.length > 0 && (
            <div className="mb-4 entity">Select a Person</div>
          )}
          {filteredList.people.map((person) => {
            return (
              <Entity
                entity={person}
                onEntityClick={onEntityClick}
                key={person.name}
              />
            );
          })}
        </div>
        <div className="">
          {filteredList.group.length > 0 && (
            <div className="mb-4 entity">Select a Group</div>
          )}
          {filteredList.group.map((item) => {
            return (
              <Entity
                entity={item}
                onEntityClick={onEntityClick}
                key={item.name}
              />
            );
          })}
        </div>
        {filteredList.people.length === 0 &&
          filteredList.group.length === 0 && (
            <div className="txt-center">No items found</div>
          )}
      </div>
      <HelpSection />
    </div>
  );
}

export default Search;
