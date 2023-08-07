import { FC, useState, useRef, useEffect, use } from "react";
import Icon from "../../../../components/icons/Icon";
import TIcon from "../../../../typings/types/TIcon";

interface Props {
  type?: string;
  placeholder?: string;
  id: string;
  label?: string;
  icon?: TIcon;
  pattern?: string;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const InputField: FC<Props> = ({
  type = "text",
  placeholder = "Platzhalter",
  id = "",
  label = "Beschriftung",
  icon = "informationCircle",
  pattern = "",
  inputValue,
  setInputValue,
}) => {
  const prefilledEmailValue = "@unternehmen.de";
  const [userStartedTyping, setUserStartedTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setUserStartedTyping(true);
  };

  const handleFocus = () => {
    if (id !== "email-adress") return;
    if (inputValue !== "") return;
    setInputValue(prefilledEmailValue);
  };

  const handleBlur = () => {
    if (id !== "email-adress") return;
    if (inputValue !== prefilledEmailValue) return;
    setInputValue("");
  };

  useEffect(() => {
    if (id !== "email-adress") return;
    if (inputValue !== prefilledEmailValue) return;
    inputRef.current?.setSelectionRange(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="flex w-full flex-col-reverse">
      <input
        className={`${
          type === "password" &&
          "placeholder:font-mono placeholder:tracking-wider"
        } text-slate-8 peer w-full rounded-lg border-4 border-slate-400 bg-slate-300 p-3 shadow-inner transition-all duration-200 placeholder:text-slate-600/50 focus:outline-none focus:ring-4 focus:ring-yellow-400/75`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required
        pattern={pattern}
      />
      <label
        htmlFor={id}
        className={`ml-2 flex w-3/5 items-center gap-2 rounded-t-lg  bg-slate-500 py-1 pl-3 text-lg tracking-widest text-slate-300 transition-all duration-200 ${
          inputValue.length > 0 &&
          userStartedTyping &&
          "peer-valid:bg-green-700/75 peer-valid:text-green-300"
        }`}
      >
        {icon && (
          <Icon icon={icon} className="inline-block h-4 w-4 opacity-50" />
        )}
        {label}
      </label>
    </div>
  );
};

export default InputField;
