import React from "react";
import { MdClose } from "react-icons/md";

type pillType = {
  id: number;
  name: string;
  onCloseClick: (id: number) => void;
};

export default function Pill({ id, name, onCloseClick }: pillType) {
  const handleClick = () => {
    onCloseClick(id);
  };

  return (
    <div className="pill flex-items-center weight400 text-sm" key={id}>
      <div className="mr-3">{name}</div>
      <MdClose
        color="#6B7280"
        className="cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
}
