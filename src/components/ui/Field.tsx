import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './Field.module.css'

type SharedProps = {
  id: string
  label: string
}

type InputFieldProps = SharedProps & { multiline?: false } & InputHTMLAttributes<HTMLInputElement>
type TextareaFieldProps = SharedProps & { multiline: true } & TextareaHTMLAttributes<HTMLTextAreaElement>

/** Underlined form field with a label and an animated focus line. */
export function Field(props: InputFieldProps | TextareaFieldProps) {
  const { id, label } = props
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        [ {label} ]
      </label>
      {props.multiline ? (
        <textarea {...omitFieldProps(props)} id={id} className={styles.textarea} rows={3} />
      ) : (
        <input {...omitFieldProps(props)} id={id} />
      )}
      <span className={styles.line} />
    </div>
  )
}

function omitFieldProps<T extends { label: string; multiline?: boolean }>(props: T) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, multiline, ...rest } = props
  return rest
}
