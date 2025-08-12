"use client"

import { useTranslations } from "next-intl"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Magnet from "@/components/animated/magnet"

const ContactInfo = () => {
  const t = useTranslations("home.contact.info")

  const contactItems = [
    {
      icon: Mail,
      label: t("email.label"),
      value: "info@poddrzilokalno.mk",
      href: "mailto:info@poddrzilokalno.mk",
    },
    {
      icon: Phone,
      label: t("phone.label"),
      value: "+389 70 123 456",
      href: "tel:+38970123456",
    },
    {
      icon: MapPin,
      label: t("address.label"),
      value: t("address.value"),
      href: "#",
    },
    {
      icon: Clock,
      label: t("hours.label"),
      value: t("hours.value"),
      href: "#",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">{t("title")}</h3>
        <p className="text-white/70 leading-relaxed">{t("description")}</p>
      </div>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <Magnet key={index} padding={15} magnetStrength={3}>
            <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-xl">
                <item.icon className="w-6 h-6 text-neutral-950" />
              </div>
              <div>
                <div className="text-sm text-white/70">{item.label}</div>
                <div className="text-white font-medium">{item.value}</div>
              </div>
            </div>
          </Magnet>
        ))}
      </div>
    </div>
  )
}

export default ContactInfo
