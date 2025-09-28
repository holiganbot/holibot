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
      answer: "Eğer sunucu desteği alırsanız tek yapmanız gereken kurulum SMS Entegrasyonunu yapmak. Geri kalan kurulumları biz sizin yerinize yapıyoruz."
    },
    {
      question: "Şifremi size mi vereceğim?",
      answer: "Eğer kendi bilgisayarınızda kurulum yaparsanız şifrenizi bize vermenize gerek kalmadan kurabilirsiniz. Sunucu desteği alırsanız ise sunucu bağlantı bilgileri size verilecek ve şifrenizi yine siz girerek botu başlatacaksınız"
    },
    {
      question: "Bot çalışırken hesabıma girersem ne olur?",
      answer: "Bot çalışırken hesaba giriş yaparsanız bot bir dahaki giriş yapma süresine kadar çalışmaz. Daha sonra tekrar giriş yapacağı için bir problem olmadan devam eder"
    },
    {
      question: "Bot ücretsiz mi?",
      answer: "Bot ücreti aylık lisanslama ücreti ile sunulmaktadır. Ekstra olarak sunucu desteği için ekstra ücret alınmaktadır."
    },
    
    {
      question: "Teknik destek nasıl alabilirim?",
      answer: "İletişim sayfasından bizimle Telegram, Discord veya E-posta ile iletişime geçebilirsiniz."
    },
    {
      question: "Özel oran alındığında bildirim alabilir miyim?",
      answer: "Evet, özel oran alındığında e-posta adresinize bildirim gönderilir."
    },
    {
      question: "Bot güncellemeleri otomatik mi?",
      answer: "Hayır, bot güncellemeleri manuel olarak yapılır. Yeni versiyonlar çıktığında size bildirilir ve güncelleme talimatları paylaşılır."
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