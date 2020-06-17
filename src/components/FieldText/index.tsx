import React, { useState, ChangeEvent } from 'react';
import { Field, Label, Input } from './styles';

interface FieldTextProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FieldText: React.FC<FieldTextProps> = (props) => {
  return (
    <Field>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        type={props?.type ? props?.type : 'text'}
        id={props.id}
        name={props.name}
        value={props?.value}
        placeholder={props?.placeholder}
        required={props?.required}
        onChange={props?.onChange}
      />
    </Field>
  );
};

export default FieldText;
