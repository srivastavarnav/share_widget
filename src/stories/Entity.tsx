import EntityType from "../interface/entity.interface";
import React from "react";

export default function Entity({
  onEntityClick,
  entity,
  showEmail = false,
}: {
  onEntityClick?: (item: EntityType) => void;
  entity: EntityType;
  showEmail?: boolean;
}) {
  const handleClick = () => {
    if (onEntityClick) {
      onEntityClick(entity);
    }
  };

  return (
    <div
      onClick={handleClick}
      key={entity.id}
      className="flex-items-center mb-4 cursor-pointer w-max"
    >
      <div className="logo mr-3">
        <img src={entity.avatarUrl} alt={entity.name}/>
      </div>
      <div>
        <div className="text-sm weight400">{entity.name}</div>
        {showEmail && (
          <div className="text-gray1 text-sm weight400">{entity.email}</div>
        )}
      </div>
    </div>
  );
}
