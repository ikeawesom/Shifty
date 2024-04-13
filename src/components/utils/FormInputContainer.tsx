import { FormInputContainerType } from "@/src/constants";

export default function FormInputContainer(config: FormInputContainerType) {
  const { id, text, children } = config;

  return (
    <div className="flex flex-col w-full items-start justify-start gap-1">
      <label htmlFor={id} className="text-sm text-start">
        {text}
      </label>
      {children}
    </div>
  );
}
