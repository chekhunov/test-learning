import { memo } from "react";

import { get } from "object-path";

export const getFormErrorByName = (errors: any, name: string): string | null =>
  get(errors, name)?.message || null;

export interface TransformSchema {
  input: (string: any) => any;
  output: (string: any) => any;
}

export const getTransformHandler = (
  transform?: TransformSchema
): TransformSchema => {
  const defaultSchema = {
    input: (v: any) => v,
    output: (v: any) => v,
  };

  return { ...defaultSchema, ...transform };
};

export const transformFieldInEmail: TransformSchema = {
  input: (value) => value?.toLowerCase() ?? "",
  output: (e) => e.target.value.toLowerCase() ?? "",
};
export const transformFieldReplaceSpaces: TransformSchema = {
  input: (value) => value ?? "",
  output: (e) => e.target.value.split(/ +/).join(" ") ?? "",
};

export const transformFieldFileDeletion: TransformSchema = {
  input: (value) => value,
  output: (value) => {
    if (Array.isArray(value)) {
      return value.map((data) =>
        data.destroy ? { ...data, _destroy: true } : { ...data }
      );
    }

    return value;
  },
};

export const formatOption = ({
  option,
  optionValue,
  optionLabel,
}: {
  option: any;
  optionValue: string;
  optionLabel: string;
}): { value: any; label: any } => {
  if (
    typeof option === "object" &&
    optionValue in option &&
    optionLabel in option
  ) {
    const { [optionValue]: value, [optionLabel]: label, ...rest } = option;
    return { value, label, ...rest };
  }
  if (typeof option === "object") {
    return option;
  }

  return { value: option, label: option };
};

export const formFieldMemo = (component) =>
  memo(
    component,
    (prevProps, nextProps) => prevProps.value === nextProps.value
  );

export const transformFieldInPhoneWithCode: TransformSchema = {
  input: (value) => value?.slice(3) ?? "",
  output: (e) => (e.target.value ? `+61${e.target.value}` : ""),
};
