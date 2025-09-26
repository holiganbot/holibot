import { Link } from 'react-router-dom'
import holibotIslemlerImg from '../assets/holibot-islemler.png'
import holibotOranfiltresiImg from '../assets/holibot-oranfiltresi.png'
import holibotKullaniciIslemleriImg from '../assets/holibot-kullanicislemleri.png'

const Home = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Holibot Tanıtımı</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">🤖 Holibot'a Hoş Geldiniz!</h2>
        <p className="text-blue-800">
          Holibot, otomatik bahis işlemleri ve oran takibi için tasarlanmış akıllı ve güçlü bir bottur.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Neler Yapabilir?</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-2xl mb-3">🎯</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Otomatik Özel Oranlara Oynama</h3>
          <p className="text-gray-600">7/24 özel oranları bekler ve geldiğinde otomatik olarak alır</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-2xl mb-3">⚙️</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Oran Filtresi</h3>
          <p className="text-gray-600">İstediğiniz orana istediğiniz miktarda basmanızı sağlar</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-2xl mb-3">🔐</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Otomatik Login</h3>
          <p className="text-gray-600">SMS kodunu otomatik olarak alır ve giriş yapar</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="text-2xl mb-3">📧</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta Bildirimi</h3>
          <p className="text-gray-600">Özel oran alındığında mail adresinize e-posta yollar</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hemen Başlayın</h2>

      <p className="text-gray-600 mb-6">
        Holibot'u kurmak ve kullanmaya başlamak için sol menüden "Hızlı Başlangıç" bölümünü ziyaret edin.
        Adım adım kılavuzlarla birkaç dakika içinde botunuz hazır olacak!
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <span className="text-green-500 text-xl mr-3">✅</span>
          <div>
            <h3 className="text-lg font-semibold text-green-900">Hazır mısınız?</h3>
            <p className="text-green-800">Kurulum bölümünden Holibot'u kurmaya başlayabilirsiniz!</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Holibot ile Neler Yapabilirsiniz?</h2>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3">⚙️</div>
            <h3 className="text-xl font-semibold text-gray-900">Holibot - İşlemler Arayüzü</h3>
          </div>
          <div className="mb-4">
            <img
              src={holibotIslemlerImg}
              alt="Holibot İşlemler Paneli"
              className="w-full h-auto rounded-lg border border-gray-200"
            />
          </div>
          <p className="text-gray-600 mb-3">
            Kullanıcılar botu istedikleri kullanıcı hesabına yönlendirebilir ve istedikleri parametrelerle başlatabilir.
            Her işlem özelleştirilebilir ayarlarla kontrol edilir.
          </p>
          <Link
            to="/installation"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm no-underline"
          >
            Kuruluma Git
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900">Holibot - Oran Filtresi Arayüzü</h3>
          </div>
          <div className="mb-4">
            <img
              src={holibotOranfiltresiImg}
              alt="Holibot Oran Filtresi Arayüzü"
              className="w-full h-auto rounded-lg border border-gray-200"
            />
          </div>
          <p className="text-gray-600 mb-3">
            Kullanıcılar oran filtreleri ekleyerek istedikleri aralıktaki oranlara istedikleri miktarı basabilir.
          </p>
          <ul className="text-gray-600 text-sm space-y-1 mb-4">
            <li>• Oran aralığı belirleme</li>
            <li>• Miktar kontrolü</li>
          </ul>
          <Link
            to="/installation"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm no-underline"
          >
            Kuruluma Git
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="text-2xl mr-3">🗄️</div>
            <h3 className="text-xl font-semibold text-gray-900">Hesap Yönetimi</h3>
          </div>
          <div className="mb-4">
            <img
              src={holibotKullaniciIslemleriImg}
              alt="Holibot Kullanıcı İşlemleri Paneli"
              className="w-full h-auto rounded-lg border border-gray-200"
            />
          </div>
          <p className="text-gray-600 mb-3">
            Kullanıcı işlemlerinde giriş yapılacak hesaplar önceden oluşturulup güvenli bir şekilde veritabanında tutulur.
          </p>
          <Link
            to="/installation"
            className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm no-underline"
          >
            Kuruluma Git
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home