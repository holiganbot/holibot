import forwardSms from '../assets/forward-sms.png'
const AndroidSetup = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Android SMS Kurulumu</h1>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Gerekli Uygulama</h2>
        <p className="text-green-800 mb-4">
          Android telefonunuzda SMS yönlendirme yapmak için <span className="font-bold">"Forward SMS"</span> uygulamasını kurmanız gerekiyor.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Forward SMS Uygulamasını İndirin</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Google Play Store'dan İndirin</h3>
              <p className="text-gray-600">Forward SMS uygulamasını resmi mağazadan indirin</p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.development.forwardsms&hl=en"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              İndir
            </a>
          </div>
          <img src={forwardSms} alt="Forward SMS Uygulaması" className="w-auto h-100 rounded-lg border border-gray-200" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uygulama Kurulumu</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Adım 1: İzinleri Verin</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Uygulamayı açın</li>
              <li>Karşınıza çıkan tüm izinleri <span className="font-semibold text-blue-600">ALLOW</span> veya <span className="font-semibold text-blue-600">İZİN VER</span> butonuna tıklayarak verin</li>
              <li>Bildirim izni verin</li>
              <li>Otomatik başlatma izni verin</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Adım 2: Webhook URL'sini Ayarlayın</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Holibot'tan alacağınız webhook URL'sini girin</li>
              <li>Yönlendirme formatını "JSON" olarak ayarlayın</li>
              <li>Test mesajı gönderin</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Adım 3: Filtreleri Ayarlayın</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Sadece doğrulama kodlarının yönlendirilmesi için filtre kurun</li>
              <li>Anahtar kelimeler: "kod", "doğrulama", "verification" ekleyin</li>
              <li>Gereksiz SMS'lerin yönlendirilmesini engelleyin</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Test ve Doğrulama</h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Kurulumu Test Edin</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Holibot'u başlatın</li>
            <li>Test bir giriş yapın</li>
            <li>SMS kodunun otomatik olarak alındığını kontrol edin</li>
            <li>Gerekirse ayarları düzenleyin</li>
          </ol>
        </div>
      </section>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Önemli Notlar</h3>
        <ul className="list-disc list-inside space-y-2 text-yellow-800">
          <li>Uygulamanın pil optimizasyonundan muaf tutulduğundan emin olun</li>
          <li>Telefonunuz uyku modundayken de çalışması için gerekli ayarları yapın</li>
          <li>Güvenlik nedeniyle sadece güvenilir kaynaklardan gelen SMS'leri yönlendirin</li>
        </ul>
      </div>
    </div>
  )
}

export default AndroidSetup