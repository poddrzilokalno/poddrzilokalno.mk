"use client"

import Image from "next/image"
import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { Check, ChevronDown } from "lucide-react"
import { useTransition } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  {
    code: "mk",
    alias: "MK",
    name: "Македонски",
    flag: "/assets/flags/mk.svg",
  },
  {
    code: "en",
    alias: "EN",
    name: "English",
    flag: "/assets/flags/en.svg",
  },
]

const LanguageDropdown = () => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const currentLanguage = languages.find((lang) => lang.code === locale)

  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) return

    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${locale}`, "")
      const newPath = `/${newLocale}${pathWithoutLocale}`
      router.push(newPath)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        disabled={isPending}
        className="bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-200 flex items-center gap-2 p-2 rounded-md text-sm font-medium"
      >
        {currentLanguage && (
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            width={15}
            height={15}
            className="rounded-sm"
          />
        )}
        <span className="text-xs">{currentLanguage?.alias}</span>
        <ChevronDown className="h-3 w-3 opacity-70" />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="min-w-[140px] bg-white border border-gray-200 shadow-lg"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            {/* Flag */}
            <Image
              src={language.flag}
              alt={language.name}
              width={20}
              height={20}
              className="rounded-sm"
            />
            {/* Alias */}
            <span className="flex-1 text-gray-900">{language.alias}</span>
            {locale === language.code && (
              <Check className="h-4 w-4 text-blue-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageDropdown;