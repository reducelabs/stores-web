import React from 'react';
import { Field, Label, Select } from './styles';

interface FieldSelectProps {
  id: string;
  label?: string;
  name?: string;
  value?: string;
}

const FieldSelect: React.FC<FieldSelectProps> = (props) => {
  return (
    <Field>
      <Label htmlFor={props.id}>{props.label}</Label>
      <Select name={props.name} id={props.id} value={props.value}>
        {props.children}
      </Select>
    </Field>
  );
};

export default FieldSelect;
