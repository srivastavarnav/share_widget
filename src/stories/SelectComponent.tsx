import Select, { MenuPlacement, SingleValue, ActionMeta } from "react-select";

export type OptionType = {
  label: string;
  value: string;
};

type SelectProps = {
  className: string;
  options: OptionType[];
  onChange:
    | ((
        newValue: SingleValue<OptionType>,
        actionMeta: ActionMeta<OptionType>,
      ) => void)
    | undefined;
  value: SingleValue<OptionType>;
  placeholder: string;
  menuPlacement: MenuPlacement | undefined;
  isSearchable: boolean;
};

const SelectComponent = ({
  className = "",
  onChange,
  options,
  value,
  placeholder,
  menuPlacement,
  isSearchable,
}: SelectProps) => {
  return (
    <Select
      className={`react-select-container ${className}`}
      classNamePrefix="react-select"
      styles={{
        control: (base) => ({
          display: "flex",
          width: "max-content",
        }),

        option: (provided, state) => ({
          padding: "8px 24px",
          background: state.isFocused ? "#F3F4F6" : "transparent",
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: "white",
          color: 'black',
          width: "max-content",
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: "#6B7280",
          fontWeight: 400,
          fontSize: "12px",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
      }}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      menuPlacement={menuPlacement}
      isSearchable={isSearchable}
      options={options}
    />
  );
};

export default SelectComponent;
