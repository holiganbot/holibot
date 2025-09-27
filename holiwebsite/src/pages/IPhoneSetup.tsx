const IPhoneSetup = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">iPhone SMS Kurulumu</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Shortcuts Uygulaması</h2>
        <p className="text-blue-800 mb-4">
          iPhone'da SMS yönlendirme yapmak için Apple'ın yerleşik <span className="font-bold">"Shortcuts"</span> uygulamasını kullanacağız.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Shortcuts Uygulamasını Açın</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="space-y-4">
            <p className="text-gray-600">
              Shortcuts uygulaması iPhone'unuzda önceden yüklenmiş olarak gelir. Eğer bulamıyorsanız App Store'dan ücretsiz indirebilirsiniz.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">App Store'dan İndirin (Gerekirse)</h3>
                <p className="text-gray-600">Shortcuts - Apple'ın resmi uygulaması</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/shortcuts/id915249334"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. SMS Yönlendirme Kısayolu Oluşturun</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Adım 1: Yeni Kısayol Oluşturun</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Shortcuts uygulamasını açın</li>
              <li>Sağ üst köşedeki "+" butonuna tıklayın</li>
              <li>"Add Action" butonuna tıklayın</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Adım 2: HTTP İsteği Ekleyin</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Arama çubuğuna "Get Contents of URL" yazın</li>
              <li>Bu aksiyonu seçin</li>
              <li>Method'u "POST" olarak değiştirin</li>
              <li>Holibot'tan aldığınız webhook URL'sini girin</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Adım 3: SMS İçeriği Gönderimi</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>"Request Body" bölümünü "JSON" olarak ayarlayın</li>
              <li>SMS içeriğini JSON formatında göndermek için gerekli kodu ekleyin</li>
              <li>Headers'a "Content-Type: application/json" ekleyin</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Otomatik Çalıştırma Ayarı</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Automation Oluşturun</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Shortcuts uygulamasında "Automation" sekmesine gidin</li>
              <li>"Create Personal Automation" butonuna tıklayın</li>
              <li>"Message" trigger'ını seçin</li>
              <li>"Received" seçeneğini işaretleyin</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Filtre Ayarları</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>"Sender" kısmında doğrulama SMS'i gönderen numaraları ekleyin</li>
              <li>"Contains" filtresinde "kod", "doğrulama" gibi anahtar kelimeler ekleyin</li>
              <li>Oluşturduğunuz kısayolu bu automation'a bağlayın</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Test ve Doğrulama</h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">Kurulumu Test Edin</h3>
          <ol className="list-decimal list-inside space-y-2 text-green-800">
            <li>Holibot'u başlatın</li>
            <li>Test bir doğrulama SMS'i alın</li>
            <li>SMS'in otomatik olarak yönlendirildiğini kontrol edin</li>
            <li>Gerekirse filtre ayarlarını düzenleyin</li>
          </ol>
        </div>
      </section>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Önemli Notlar</h3>
        <ul className="list-disc list-inside space-y-2 text-yellow-800">
          <li>iOS sürümünüzün Shortcuts automation'ları desteklediğinden emin olun (iOS 13+)</li>
          <li>Automation'ların çalışması için "Ask Before Running" seçeneğini kapatın</li>
          <li>Gizlilik ayarlarından Shortcuts'un gerekli izinlere sahip olduğunu kontrol edin</li>
          <li>Sadece güvenilir kaynaklardan gelen SMS'leri yönlendirin</li>
        </ul>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="font-semibold text-red-900 mb-3">🔒 Güvenlik Uyarısı</h3>
        <p className="text-red-800">
          SMS yönlendirme hassas bilgiler içerebilir. Webhook URL'nizi güvenli tutun ve sadece güvendiğiniz servislere yönlendirme yapın.
        </p>
      </div>
    </div>
  )
}

export default IPhoneSetup