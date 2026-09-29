import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo.svg'
import { ROUTES } from '../../config/routes'

interface LogoProps {
  /** `light` = cream logo for dark backgrounds, `dark` = ink logo for light backgrounds. */
  tone?: 'light' | 'dark'
  className?: string
  imageClassName?: string
  /** Plain image without the home link. */
  static?: boolean
}

export function Logo({ tone = 'light', className, imageClassName, static: isStatic }: LogoProps) {
  const { t } = useTranslation('common')
  const image = (
    <img src={tone === 'light' ? logoLight : logoDark} alt={t('brand.name')} className={imageClassName} />
  )

  if (isStatic) return image
  return (
    <Link to={ROUTES.home} aria-label={t('brand.homeLabel')} className={className}>
      {image}
    </Link>
  )
}
