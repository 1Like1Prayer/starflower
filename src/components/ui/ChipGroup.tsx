import { cx } from '../../utils/classNames'
import styles from './ChipGroup.module.css'

interface ChipOption<T extends string> {
  value: T
  label: string
}

interface ChipGroupProps<T extends string> {
  /** Accessible name of the group. */
  label: string
  options: readonly ChipOption<T>[]
  value: T
  onChange: (value: T) => void
  /** Phones: one horizontally scrolling row instead of wrapping. */
  scrollOnPhone?: boolean
  className?: string
}

export function ChipGroup<T extends string>({ label, options, value, onChange, scrollOnPhone, className }: ChipGroupProps<T>) {
  return (
    <div role="group" aria-label={label} className={cx(styles.group, scrollOnPhone && styles.scroll, className)}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={cx(styles.chip, option.value === value && styles.active)}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
