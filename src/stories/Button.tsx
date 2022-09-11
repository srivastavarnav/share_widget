import { BUTTON_ICONS, BUTTON_VARIANTS, LABEL_SIZE } from '../enums/button.enum';
import React from "react";
import { MdShare } from "react-icons/md";
/**
 * Primary UI component for user interaction
 */
type ButtonProps = {
  label: string;
  variant: string;
  icon?: string;
  style?: {};
  labelSize?: string;
  onClick?: () => void;
  disabled?:boolean
};

const getIcon = (name?: string, variant?: string) => {
  switch (name) {
    case BUTTON_ICONS.NONE:
      return <></>;
    case BUTTON_ICONS.SHARE:
      return (
        <div className="btn-icon-container">
          <MdShare
            size={14}
            color={variant === BUTTON_VARIANTS.PRIMARY ? "white" : "black"}
          />
        </div>
      );
    default:
      return <></>;
  }
};

export const Button = ({
  label,
  variant,
  icon,
  onClick,
  style = {},
  labelSize,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`base ${variant}`}
      {...props}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      <div className="flex-between-center">
        <div className={`weight500 ${labelSize === LABEL_SIZE.BIG ? 'text-base' : 'text-sm'}`}>{label}</div>
        {getIcon(icon, variant)}
      </div>
    </button>
  );
};
