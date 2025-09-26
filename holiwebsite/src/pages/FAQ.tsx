import { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqItems = [
    {
      question: "Bot nasıl kurulur?",
      answer: "Kurulum bölümünden adım adım talimatları takip edebilirsiniz. npm ile paket indirip, yapılandırma dosyasını oluşturduktan sonra npm start komutuyla başlatabilirsiniz."
    },
    {
      question: "Bot hangi platformlarda çalışır?",
      answer: "Botumuz Discord, Telegram, WhatsApp ve diğer popüler mesajlaşma platformlarında çalışabilir. Ayrıca web API'si üzerinden de erişilebilir."
    },
    {
      question: "Bot ücretsiz mi?",
      answer: "Bot temel özelliklerle ücretsiz olarak kullanılabilir. Premium özellikler için aylık abonelik planları mevcuttur."
    },
    {
      question: "Teknik destek nasıl alabilirim?",
      answer: "İletişim sayfasından bizimle iletişime geçebilir, GitHub issues üzerinden sorun bildirebilir veya Discord sunucumuza katılabilirsiniz."
    },
    {
      question: "Bot verilerimi güvende tutar mı?",
      answer: "Evet, tüm veriler şifreli olarak saklanır ve GDPR standartlarına uygun şekilde işlenir. Verileriniz hiçbir üçüncü tarafla paylaşılmaz."
    },
    {
      question: "Özel komutlar oluşturabilir miyim?",
      answer: "Evet, yapılandırma bölümünde anlatıldığı gibi özel komutlar oluşturabilir ve mevcut komutları düzenleyebilirsiniz."
    },
    {
      question: "Bot çökerse ne yapmalıyım?",
      answer: "Sorun Giderme bölümünde çözüm önerileri bulabilirsiniz. Sorun devam ederse log dosyalarını bizimle paylaşın."
    },
    {
      question: "Hangi Node.js versiyonu gerekli?",
      answer: "Bot Node.js 16 veya daha yeni versiyonlarda çalışır. En iyi performans için Node.js 18+ önerilir."
    },
    {
      question: "Database kurulumu gerekli mi?",
      answer: "Temel özellikler için database gerekmez. Ancak kullanıcı verilerini saklamak için PostgreSQL veya MongoDB kullanabilirsiniz."
    },
    {
      question: "Bot güncellemeleri otomatik mi?",
      answer: "Bot güncellemeleri manuel olarak yapılır. Yeni versiyonlar çıktığında size bildirilir ve güncelleme talimatları paylaşılır."
    }
  ]

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h1>

      <p className="text-gray-600 text-lg mb-8">
        En sık sorulan sorulara verdiğimiz cevapları burada bulabilirsiniz.
      </p>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openItems.includes(index) ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openItems.includes(index) && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">Sorunuz burada yok mu?</h2>
        <p className="text-blue-800 mb-4">
          Başka sorularınız varsa bizimle iletişime geçmekten çekinmeyin!
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          İletişime Geç
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default FAQ