import { Button } from "../stories/Button";
import Switch from "react-switch";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BUTTON_ICONS, LABEL_SIZE } from "../enums/button.enum";
import useEntityStore from "../store";
import StateType from "../interface/state.interface";
import EntityType from "interface/entity.interface";
import SelectComponent, { OptionType } from "../stories/SelectComponent";
import { ACCESS } from "../constants/constants";
import { SingleValue } from "react-select";
import HelpSection from "../stories/HelpSection";
import Entity from "../stories/Entity";
import { useKeyPressEvent } from "react-use";

function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [canShareToWeb, setCanShareToWeb] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const selectedEntities = useEntityStore(
    (state: StateType) => state.selectedEntities
  );

  useKeyPressEvent("Escape", () => {
    setShowModal(false);
  });

  useEffect(() => {
    if (selectedEntities.length > 0) {
      setShowModal(true);
    }
  }, [selectedEntities]);

  const onInputFocus = () => {
    navigate("/search");
  };

  const changeIndividualAccess = useEntityStore(
    (state: StateType) => state.changeIndividualAccess
  );

  const onAccessChange = (
    entity: EntityType,
    access: SingleValue<OptionType>
  ) => {
    changeIndividualAccess(entity, access);
  };

  const onInviteClick = () => {
    console.log("Invited");
  };

  return (
    <div className="App">
      <div className="relative">
        <Button
          label="Share"
          variant="primary"
          icon={BUTTON_ICONS.SHARE}
          onClick={toggleModal}
        />
        {showModal && (
          <div className="modal-container">
            <div className="flex-between-center modal-section">
              <div className="flex-items-center">
                <img
                  className="mr-4"
                  src="/images/Icon_share.png"
                  alt="share"
                  width={32}
                />
                <div className="share-text">
                  <div className="text-black text-base weight400">
                    Share to web
                  </div>
                  <div className="text-gray1 text-sm weight400">
                    Publish and share link with anyone
                  </div>
                </div>
              </div>
              <Switch
                onChange={() => setCanShareToWeb(!canShareToWeb)}
                checked={canShareToWeb}
                uncheckedIcon={false}
                checkedIcon={false}
                offColor="#E5E7EB"
              />
            </div>
            <hr className="divider" />
            <div className="modal-center-section">
              <input
                onFocus={onInputFocus}
                type="text"
                name="search"
                className="input-box text-base"
                placeholder="People, emails, groups"
              />
              <Button
                onClick={onInviteClick}
                label="Invite"
                variant="secondary"
                labelSize={LABEL_SIZE.BIG}
                style={{
                  border: "1px solid #6366F1",
                  borderLeft: "1px solid #D1D5DB",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              />
            </div>
            {selectedEntities.map((entity: EntityType) => {
              return (
                <div
                  key={entity.id}
                  className="flex-between-center modal-section"
                >
                  <Entity entity={entity} key={entity.name} showEmail={true} />
                  <SelectComponent
                    className="cursor-pointer"
                    options={ACCESS}
                    onChange={onAccessChange.bind(null, entity)}
                    value={{ label: entity.access, value: entity.access }}
                    placeholder="Months"
                    menuPlacement="bottom"
                    isSearchable={false}
                  />
                </div>
              );
            })}
            <hr className="divider" />
            <HelpSection showCopyBtn={true} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
