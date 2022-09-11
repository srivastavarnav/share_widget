import React from "react";
import { RiQuestionLine } from "react-icons/ri";
import { BiLink } from "react-icons/bi";

export default function HelpSection({
  showCopyBtn = false,
}: {
  showCopyBtn?: boolean;
}) {
  return (
    <div className="modal-end-container">
      <div className="flex-between-center">
        <div className="flex-items-center cursor-pointer">
          <RiQuestionLine color="#6B7280" className="help" />
          <div className="text-gray1 text-sm weight400">
            learn about sharing
          </div>
        </div>
        {showCopyBtn && (
          <div className="flex-items-center cursor-pointer">
            <BiLink color="#111827" className="mr-2" />
            <div className="text-black text-sm">Copy</div>
          </div>
        )}
      </div>
    </div>
  );
}
