import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

interface SidebarProps {
  onClose: () => void
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation()
  const [expandedSections, setExpandedSections] = useState<string[]>(['Kurulum'])

  const navigation = [
    {
      title: 'Başlangıç',
      items: [
        { name: 'Holibot Tanıtımı', href: '/', icon: '🤖' },
        { name: 'Özellikler', href: '/features', icon: '⚡' },
      ]
    },
    {
      title: 'Kurulum',
      items: [
        { name: 'Bot Kurulumu', href: '/installation', icon: '🚀' },
      ],
      subItems: [
        { name: 'İndirme', href: '/installation#indirme', icon: '💾', parent: '/installation' },
        { name: 'Kurulum', href: '/installation#kurulum', icon: '🔧', parent: '/installation' },
        { name: 'SMS Entegrasyonu', href: '/sms-integration', icon: '📱', parent: '/installation' },
        { name: 'Gmail Uygulama Şifresi', href: '/installation#gmailAppPassword', icon: '📧', parent: '/installation' },
        { name: 'Başlatma', href: '/installation#baslatma', icon: '▶️', parent: '/installation' },
        { name: 'Android Kurulum', href: '/android-setup', icon: '🤖', parent: '/sms-integration' },
        { name: 'iPhone Kurulum', href: '/iphone-setup', icon: '📱', parent: '/sms-integration' },
      ]
    },
    {
      title: 'Destek',
      items: [
        { name: 'Sık Sorulan Sorular', href: '/faq', icon: '❓' },
        { name: 'Sorun Giderme', href: '/troubleshooting', icon: '🔧' },
        { name: 'İletişim', href: '/contact', icon: '📧' },
      ]
    }
  ]

  const isActive = (href: string) => {
    if (href.includes('#')) {
      return location.pathname + location.hash === href
    }
    return location.pathname === href
  }

  const isParentActive = (parentPath: string) => {
    return location.pathname === parentPath
  }

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionTitle)
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    )
  }

  const isSectionExpanded = (sectionTitle: string) => {
    return expandedSections.includes(sectionTitle)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
            H
          </div>
          <span className="ml-3 text-lg font-semibold text-gray-900">
            Holibot
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <div className="space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center">
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className={`
                          group flex items-center flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors
                          ${isActive(item.href)
                            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }
                        `}
                      >
                        <span className="mr-3 text-base">{item.icon}</span>
                        {item.name}
                      </Link>

                      {/* Toggle button for sections with subItems */}
                      {section.subItems && (
                        <button
                          onClick={() => toggleSection(section.title)}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              isSectionExpanded(section.title) ? 'rotate-90' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Sub-navigation */}
                    {section.subItems && isSectionExpanded(section.title) && (
                      <div className="ml-6 mt-2 space-y-1">
                        {section.subItems.filter(subItem => subItem.parent === item.href).map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={onClose}
                            className={`
                              group flex items-center px-3 py-2 text-xs font-medium rounded-lg transition-colors
                              ${isActive(subItem.href)
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                              }
                            `}
                          >
                            <span className="mr-2 text-sm">{subItem.icon}</span>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t">
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          v1.0.0
        </div>
      </div>
    </div>
  )
}

export default Sidebar