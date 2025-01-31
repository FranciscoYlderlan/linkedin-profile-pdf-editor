'use client'

import { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Textarea } from '../ui/textarea'

type TextareaWithLabelProps<GenericSchema> = {
  fieldTitle: string
  nameInSchema: keyof GenericSchema & string
  className?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextareaWithLabel<GenericSchema>({
  fieldTitle,
  nameInSchema,
  className,
  ...props
}: TextareaWithLabelProps<GenericSchema>) {
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
            <Textarea
              id={nameInSchema}
              className={`p-4 disabled:opacity-75 ${className}`}
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
