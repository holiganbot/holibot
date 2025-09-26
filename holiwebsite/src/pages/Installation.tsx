import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import zipAyiklama from '../assets/ayikla.png'
import ekBilgi from '../assets/ekbilgi.png'
import yineDeCalistir from '../assets/yinedecalistir.png'
import lisansGirisi from '../assets/lisansgirisi.png'
const Installation = () => {
  const location = useLocation()
  const indirmeRef = useRef<HTMLElement>(null)
  const kurulumRef = useRef<HTMLElement>(null)
  const yapilandirmaRef = useRef<HTMLElement>(null)
  const baslatmaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (!hash) return

    const refs: { [key: string]: React.RefObject<HTMLElement> } = {
      'indirme': indirmeRef,
      'kurulum': kurulumRef,
      'yapilandirma': yapilandirmaRef,
      'baslatma': baslatmaRef,
    }

    const targetRef = refs[hash]
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [location.hash])

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Bot Kurulumu</h1>



      <section ref={indirmeRef} className="mb-12">
        <h2 id="indirme" className="text-2xl font-semibold text-gray-900 mb-4">İndirme</h2>

        <p className="text-gray-600 mb-4">
          Holibot'u resmi GitHub deposundan indirebilirsiniz:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-blue-900 mb-3">İndirme Seçenekleri</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded border">
              <span className="font-medium">Holibot v1.0</span>
              <a href="https://github.com/holiganbot/holibot-release/releases/tag/holibot_v1" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" target='_blank'>
                İndir
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={kurulumRef} className="mb-12">
        <h2 id="kurulum" className="text-2xl font-semibent text-gray-900 mb-4">Kurulum</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-gray-900 mb-3">1. holibot.exe yi çalıştırma.</h3>
            <p className="text-gray-600 mb-4">- İndirdiğiniz .zip dosyasına sağ tıklayıp "Tümünü Ayıkla" 'ya tıklayın.</p>
            <img src={zipAyiklama} alt="Zip Dosyasını Ayıkla" className="w-auto h-100 rounded-lg border border-gray-200" />
            <p className="text-gray-600 mb-4">- Daha sonra tekrar "Ayıkla" butonuna tıklayarak ayıklama işlemini tamamlayın.</p>
            <p className="text-gray-600 mb-4">- Ayıkladıktan sonra açılan klasördeki holibot.exe dosyasını çalıştırın.</p>
            <p className="text-gray-600 mb-4">- Çalıştırdıktan sonra karşınıza aşağıdaki gibi bir uyarı gelirse "Ek Bilgi" butonuna tıklayın.</p>
            <img src={ekBilgi} alt="Ek Bilgi" className="w-auto h-100 rounded-lg border border-gray-200" />
            <p className="text-gray-600 mb-4">- Ek Bilgi butonuna tıkladıktan sonra aşağıdaki "Yine De Çalıştır" butonuna tıklayın.</p>
            <img src={yineDeCalistir} alt="Yine De Çalıştır" className="w-auto h-100 rounded-lg border border-gray-200" />
            <p className="text-gray-600 mb-4">- Yine De Çalıştır butonuna tıkladıktan sonra uygulama açıldıktan sonra karşınıza lisans anahtarı isteyen bir ekran açılacak burada size verilen lisans anahtarını girin.</p>
            <img src={lisansGirisi} alt="Lisans Girişi" className="w-auto h-100 rounded-lg border border-gray-200" />
            <p className="text-gray-600 mb-4">- Lisans anahtarını girdikten sonra "Devam" butonuna tıkladıktan sonra artık uygulamayı kullanabilirsiniz.</p>
          </div>

        </div>
      </section>

      <section ref={yapilandirmaRef} className="mb-12">
        <h2 id="yapilandirma" className="text-2xl font-semibold text-gray-900 mb-4">SMS Uygulaması Entegrasyonu</h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-2">
            <p className="text-gray-600 mb-4">- Holibot'un siteye giriş yaptığınızda gelen SMS kodlarını alabilmesi için telefona gelen doğrulama kodlarının yönlendirilmesi gerekir. Bunun için <span className='font-bold'>"Forward SMS"</span> isimli uygulamanın telefona kurulması gerekiyor.</p>
          </div>

        </div>
      </section>

      <section ref={baslatmaRef} className="mb-12">
        <h2 id="baslatma" className="text-2xl font-semibold text-gray-900 mb-4">Başlatma</h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-green-900 mb-3">İlk Çalıştırma</h3>
          <ol className="list-decimal list-inside space-y-2 text-green-800">
            <li>Masaüstündeki Holibot kısayoluna çift tıklayın</li>
            <li>Giriş bilgilerinizi kontrol edin</li>
            <li>Ayarlarınızı test edin</li>
            <li>Botu başlatın ve izlemeye başlayın</li>
          </ol>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">🎉 Tebrikler!</h3>
          <p className="text-blue-800">
            Holibot başarıyla kuruldu ve çalışmaya hazır. Artık otomatik işlemlerinizi başlatabilirsiniz.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Installation