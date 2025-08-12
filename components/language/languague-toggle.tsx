"use client"

import Image from "next/image"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"

const languages = {
  mk: {
    code: "mk",
    alias: "MK",
    flag: "/assets/flags/mk.svg",
  },
  en: {
    code: "en",
    alias: "EN",
    flag: "/assets/flags/en.svg",
  },
}

const LanguageToggle = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const newLocale = locale === "mk" ? "en" : "mk"

  const toggleLanguage = () => {
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${locale}`, "")
      const newPath = `/${newLocale}${pathWithoutLocale}`
      router.push(newPath)
    })
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      disabled={isPending}
      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-200 flex items-center gap-2"
    >
      <Image
        src={languages[newLocale].flag}
        alt={languages[newLocale].alias}
        width={20}
        height={20}
        className="rounded-sm"
      />
      <span className="font-medium">{languages[newLocale].alias}</span>
    </Button>
  )
}

export default LanguageToggle
