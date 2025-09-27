const SMSIntegration = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">SMS Uygulaması Entegrasyonu</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">SMS Yönlendirme Neden Gerekli?</h2>
        <p className="text-blue-800 mb-4">
          Holibot'un siteye giriş yaptığınızda gelen SMS kodlarını otomatik olarak alabilmesi için telefona gelen doğrulama kodlarının bot'a yönlendirilmesi gerekir.
        </p>
        <p className="text-blue-800">
          Bu işlem için telefonunuzun işletim sistemine uygun bir SMS yönlendirme uygulaması kurmanız gerekmektedir.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">İşletim Sisteminizi Seçin</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/android-setup" className="block p-8 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">🤖</span>
              <div>
                <h3 className="text-xl font-semibold text-green-900">Android Kurulum</h3>
                <p className="text-green-600 text-sm">Google Play Store</p>
              </div>
            </div>
            <p className="text-green-700 mb-4">
              Android telefonunuzda Forward SMS uygulamasını kullanarak SMS yönlendirme kurulumu yapın.
            </p>
            <div className="flex items-center text-green-600 font-medium">
              <span>Kurulum Rehberini Görüntüle</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          <a href="/iphone-setup" className="block p-8 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors group">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4 group-hover:scale-110 transition-transform">📱</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-900">iPhone Kurulum</h3>
                <p className="text-blue-600 text-sm">iOS Shortcuts</p>
              </div>
            </div>
            <p className="text-blue-700 mb-4">
              iPhone'unuzda Shortcuts uygulamasını kullanarak SMS yönlendirme kurulumu yapın.
            </p>
            <div className="flex items-center text-blue-600 font-medium">
              <span>Kurulum Rehberini Görüntüle</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </section>


      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Önemli Uyarılar</h3>
        <ul className="list-disc list-inside space-y-2 text-yellow-800">
          <li>Sadece doğrulama kodlarının yönlendirilmesi için filtre ayarlarını doğru yaptığınızdan emin olun</li>
          <li>Android telefonlarda pil optimizasyonu ayarlarını yapılmazsa Forward SMS uygulaması devre dışı kalabilir ve bot SMS kodu alamadığı için giriş yapamaz.</li>
          <li>Forward SMS uygulaması ücretsiz sürümünde günde maksimum <span className="font-semibold text-blue-600">50</span> adet SMS yönlendirmeye izin veriyor. Bu limiti aşarsanız bot SMS kodu alamadığı için giriş yapamayabilir. Garantiye almak için ücretli sürüme geçebilirsiniz veya yeniden başlatma sıklığını <span className="font-semibold text-blue-600">90 dakikadan daha düşük</span> yapmayın</li>
        </ul>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-900 mb-3">✅ Başarılı Kurulum İçin</h3>
        <p className="text-green-800">
          Her iki platform için de detaylı adım adım rehberler hazırlanmıştır. İşletim sisteminize uygun rehberi takip ederek kolayca kurulum yapabilirsiniz.
        </p>
      </div>
    </div>
  )
}

export default SMSIntegration