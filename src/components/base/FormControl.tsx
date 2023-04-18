import { FC, ReactElement, ReactNode, ReactText } from 'react'

import {
  FormHelperText,
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps,
  FormLabel
} from '@mui/material'

type CustomProps = {
  helperText?: ReactText | ReactElement | ReactNode | null
  hideHelper?: boolean
  label?: string | ReactNode
  errorMessage?: string | null
  classNames?: {
    label?: string
    error?: string
    helperText?: string
  }
}

export type FormControlProps = CustomProps & MuiFormControlProps

const FormControl: FC<FormControlProps> = ({
  helperText,
  hideHelper,
  label,
  required,
  children,
  errorMessage,
  error,
  classNames,
  ...rest
}) => {
  const isError = !!errorMessage || error

  return (
    <MuiFormControl fullWidth {...rest} required={required}>
      {!!label && (
        <FormLabel
          focused={false}
          filled
          required={required}
          error={isError}
          className={classNames?.label}
        >
          {label}
        </FormLabel>
      )}

      {children}

      {!!errorMessage && (
        <FormHelperText error={isError} className={classNames?.error}>
          {errorMessage}
        </FormHelperText>
      )}

      {!hideHelper && helperText && (
        <FormHelperText
          variant="filled"
          style={{ margin: 0 }}
          className={classNames?.helperText}
        >
          {helperText}
        </FormHelperText>
      )}
    </MuiFormControl>
  )
}

export default FormControl
