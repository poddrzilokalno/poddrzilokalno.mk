"use client"

import type React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import { navbarLinks } from "@/const"

const Footer = () => {
  const t = useTranslations("home.footer")

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-neutral-950 text-white py-16">
      <div className="container mx-auto md:px-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                width={120}
                height={120}
                src="/assets/logos/poddrzilokalno.png"
                alt="Poddrzi Lokalno Logo"
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">{t("description")}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-neutral-800 rounded-xl hover:bg-blue-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {navbarLinks.map((link) => {
                const handleFooterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()

                  const targetId = link.href.replace("#", "")
                  const targetElement = document.getElementById(targetId)

                  if (targetElement) {
                    const headerOffset = 80
                    const elementPosition = targetElement.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    })
                  }
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={handleFooterClick}
                      className="text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {t(`links.${link.content}`)}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">{t("contact")}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-neutral-400">info@poddrzilokalno.mk</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-neutral-400">+389 70 123 456</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <span className="text-neutral-400">{t("address")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">© 2024 {t("copyright")}</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                {t("privacy")}
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
