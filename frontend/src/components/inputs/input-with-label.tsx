'use client'

import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

type InputWithLabelProps<GenericSchema> = {
  fieldTitle: string
  nameInSchema: keyof GenericSchema & string
  className?: string
} & InputHTMLAttributes<HTMLInputElement>

export function InputWithLabel<GenericSchema>({
  fieldTitle,
  nameInSchema,
  className,
  ...props
}: InputWithLabelProps<GenericSchema>) {
  const form = useFormContext()
  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="text-base" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>
          <FormControl>
            <Input
              id={nameInSchema}
              className={`disabled:opacity-75 ${className}`}
              {...props}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
