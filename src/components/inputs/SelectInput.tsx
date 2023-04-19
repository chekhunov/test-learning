import React, { FC, useCallback, useState } from 'react'

import {
  FormControl,
  InputLabel,
  SelectChangeEvent,
  SelectProps
} from '@mui/material'

type Props = {
  controlledValue?: string
  label?: string
  onChange?: any
}

const SelectInput: FC<Props & Partial<SelectProps>> = ({
  label,
  controlledValue,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState('')
  const isControlled = !!controlledValue

  const controlledOnChange = useCallback((_e, value) => {
    setValue(value?.props.value)
  }, [])

  const handleChange = (e: SelectChangeEvent<any>, value) => {
    if (isControlled) {
      onChange(e, value)
    } else {
      controlledOnChange(e, value)
      onChange(e, value)
    }
  }

  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{
        '& .MuiSelect-icon': {
          right: 12,
          top: 'calc(50% - 0.2em)'
        }
      }}
    >
      <InputLabel
        id="user-label"
        sx={{
          fontWeight: 600,
          fontSize: 16,
          color: 'text.primary',
          '&.MuiInputLabel-sizeSmall': {
            transform: 'translate(14px, 9px) scale(1)'
          },
          '&.MuiInputLabel-shrink': {
            fontWeight: 400,
            fontSize: 12,
            transform: 'translate(14px, -9px) scale(1)'
          }
        }}
      >
        {label}
      </InputLabel>
    </FormControl>
  )
}

export default SelectInput
