const Features = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Özellikler</h1>

      <p className="text-gray-600 text-lg mb-8">
        Botumuzun sunduğu tüm özellikler hakkında detaylı bilgi edinin.
      </p>

      <div className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-4">🚀</div>
            <h2 className="text-2xl font-semibold text-gray-900">Performans</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Yüksek hız ve düşük gecikme süresi</li>
            <li>• Çoklu platform desteği</li>
            <li>• Otomatik ölçeklendirme</li>
            <li>• 24/7 çalışma garantisi</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-4">🔐</div>
            <h2 className="text-2xl font-semibold text-gray-900">Güvenlik</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Gelişmiş şifreleme teknolojileri</li>
            <li>• Kullanıcı verilerinin korunması</li>
            <li>• Güvenli API bağlantıları</li>
            <li>• Düzenli güvenlik güncellemeleri</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-4">🎨</div>
            <h2 className="text-2xl font-semibold text-gray-900">Özelleştirme</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Kişiselleştirilebilir komutlar</li>
            <li>• Özel mesaj şablonları</li>
            <li>• Tema ve görünüm ayarları</li>
            <li>• Modüler yapı</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-4">📈</div>
            <h2 className="text-2xl font-semibold text-gray-900">Analitik</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Detaylı kullanım istatistikleri</li>
            <li>• Gerçek zamanlı raporlar</li>
            <li>• Performans metrikleri</li>
            <li>• Exportable veriler</li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="flex items-center mb-4">
            <div className="text-3xl mr-4">🔌</div>
            <h2 className="text-2xl font-semibold text-gray-900">Entegrasyon</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>• Discord, Telegram, WhatsApp desteği</li>
            <li>• RESTful API erişimi</li>
            <li>• Webhook desteği</li>
            <li>• Üçüncü parti servis entegrasyonları</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features