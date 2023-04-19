import React, { FC, useCallback, useState } from 'react'

// import { ExpandMore } from '@mui/icons-material'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps
} from '@mui/material'

// import useOptions, { OptionsProps } from '~/hooks/useOptions'

import ArrowIcon from '~/assets/icons/proffesional-account/arrow-down.svg'

// import { Option } from '../fields/SelectField'

type Props = {
  controlledValue?: string
  label?: string
  onChange?: any
  // options?: Option[]
  // optionSettings?: Partial<OptionsProps>
}

const SelectInput: FC<Props & Partial<SelectProps>> = ({
  // options: customOptions = [],
  // optionSettings = {},
  label,
  controlledValue,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState('')
  const isControlled = !!controlledValue
  const actualValue = controlledValue || value

  // const { options } = useOptions({
  //   ...optionSettings,
  //   key: optionSettings?.key,
  //   value: actualValue,
  //   options: customOptions
  // })

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

      {/* <Select
        labelId="user-label"
        label={label}
        value={actualValue}
        onChange={handleChange}
        IconComponent={ArrowIcon}
        {...rest}
      >
        {options.sort().map((option: Option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select> */}
    </FormControl>
  )
}

export default SelectInput
