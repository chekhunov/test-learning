import React from 'react'

import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps
} from '@mui/material'

import CheckboxCheckIcon from '~/assets/icons/checkbox-check.svg'
import CheckboxIcon from '~/assets/icons/checkbox.svg'

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'defaultValue'> {}

const Checkbox = (props: CheckboxProps) => {
  return (
    <MuiCheckbox
      {...props}
      icon={<CheckboxIcon />}
      checkedIcon={<CheckboxCheckIcon />}
    />
  )
}

export default Checkbox
