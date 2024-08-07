'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { i18n, Locale } from '@/lib/i18n/i18n-config'

export default function LanguageSelect() {
  const pathName = usePathname()
  const router = useRouter()

  function redirectedPathName(locale: Locale) {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <Select defaultValue={pathName.slice(1)} onValueChange={(value: Locale) => router.push(redirectedPathName(value))}>
      <SelectTrigger className="w-24 border-none shadow-none hover:bg-secondary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {i18n.locales.map((locale) => (
          <SelectItem key={locale} value={locale} defaultChecked>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
