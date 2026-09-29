import { useState, type CSSProperties, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { ChipGroup, Eyebrow, Field, PillButton } from '../../../components/ui'
import { OCCASIONS, type ContactRequest, type OccasionId } from '../data/contact'
import styles from './ContactForm.module.css'

interface ContactFormProps {
  onSubmit: (request: ContactRequest) => void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const { t } = useTranslation('contact')
  const [occasion, setOccasion] = useState<OccasionId>('gift')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSubmit({ name: String(data.get('name') ?? ''), occasion })
  }

  return (
    <form className={`fade ${styles.form}`} style={{ '--delay': '1.5s' } as CSSProperties} onSubmit={handleSubmit}>
      <div className={styles.occasion}>
        <Eyebrow>{t('form.occasionHeading')}</Eyebrow>
        <ChipGroup
          label={t('form.occasionGroup')}
          options={OCCASIONS.map((value) => ({ value, label: t(`form.occasions.${value}.label`) }))}
          value={occasion}
          onChange={setOccasion}
        />
      </div>

      <div className={styles.grid}>
        <Field id="contact-name" name="name" label={t('form.fields.name.label')} placeholder={t('form.fields.name.placeholder')} required />
        <Field
          id="contact-email"
          name="email"
          type="email"
          label={t('form.fields.email.label')}
          placeholder={t('form.fields.email.placeholder')}
          required
        />
        <Field id="contact-phone" name="phone" type="tel" label={t('form.fields.phone.label')} placeholder={t('form.fields.phone.placeholder')} />
        <Field id="contact-date" name="date" type="date" label={t('form.fields.date.label')} />
      </div>

      <Field
        id="contact-message"
        name="message"
        multiline
        label={t('form.fields.message.label')}
        placeholder={t('form.fields.message.placeholder')}
      />

      <div className={styles.footer}>
        <span>{t('form.reply')}</span>
        <PillButton type="submit" variant="dark">
          {t('form.submit')}
        </PillButton>
      </div>
    </form>
  )
}
