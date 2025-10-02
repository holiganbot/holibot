import fwios0 from '../assets/fwios/fwios-0.png'
import fwios1 from '../assets/fwios/fwios-1.png'
import fwios2 from '../assets/fwios/fwios-2.png'
import fwios3 from '../assets/fwios/fwios-3.png'
import fwios4 from '../assets/fwios/fwios-4.png'
import fwios5 from '../assets/fwios/fwios-5.png'

const IPhoneSetup = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">iPhone SMS Kurulumu</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">İki Adımda Kurulum</h2>
        <p className="text-blue-800 mb-2">
          iPhone'da SMS yönlendirme yapmak için iki ana adım:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-blue-800 ml-4">
          <li className="font-semibold">Forward SMS Uygulaması Kurulumu</li>
          <li className="font-semibold">Kestirmeler (Shortcuts) Kurulumu </li>
        </ol>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adım 1: Forward SMS Uygulamasını İndirin</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={fwios0}
              alt="Forward SMS App Store"
              className="w-full max-w-2xl rounded-lg shadow-md"
            />
            <div className="w-full">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">Forward SMS: SMS Forwarder</h3>
              <p className="text-gray-600 mb-4">Parveen Kapoor tarafından geliştirilen ücretsiz uygulama</p>
              <a
                href="https://apps.apple.com/tr/app/forward-sms-sms-forwarder/id6740165005?l=tr"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store'dan İndir
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adım 2: Yeni Kural Oluşturun</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Forward SMS Uygulamasını Açın</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Uygulamayı ilk kez açtığınızda "No Rules Created" ekranını göreceksiniz</li>
              <li><span className="font-semibold text-green-700">"Create Rule"</span> butonuna tıklayın</li>
              <li>SMS yönlendirme kuralınızı oluşturmaya başlayın</li>
            </ul>
            <img
              src={fwios1}
              alt="Create Rule"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Alıcı Ekleyin</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Kural adını girin (örn: "holi")</li>
              <li><span className="font-semibold text-blue-700">"Add Receiver"</span> butonuna tıklayın</li>
              <li>Açılan listeden <span className="font-semibold">Email</span> seçeneğini seçin</li>
              <li>Sunucu desteği aldıysanız size verilen e-posta adresinizi veya uygulama şifresi ile oluşturdurduğunuz e-posta adresini girin</li>
            </ul>
            <img
              src={fwios2}
              alt="Add Receiver"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Filtre Ayarlarını Yapın</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>E-posta adresinizi girdikten sonra <span className="font-semibold text-green-700">"Apply Filter"</span> açın</li>
              <li><span className="font-semibold">"Sender Condition"</span> bölümünden <span className="font-semibold text-blue-700">"Contains"</span> seçin</li>
              <li>Bu sayede sadece belirli gönderici içeren SMS'ler yönlendirilir</li>
            </ul>
            <img
              src={fwios3}
              alt="Filter Settings"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Gönderici Filtresi Ekleyin</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>"Sender Condition" alanına filtrelemek istediğiniz metni girin</li>
              <li>Örnek: <span className="font-mono bg-gray-200 px-2 py-1 rounded">ONYTEK</span> (veya yönlendirmek istediğiniz gönderici adı)</li>
              <li>Bu filtre sayesinde sadece ONYTEK içeren gönderenlerin SMS'leri yönlendirilir</li>
            </ul>
            <img
              src={fwios4}
              alt="Sender Filter"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Kuralı Kaydedin</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
              <li>Tüm ayarları yaptıktan sonra sağ üst köşedeki <span className="font-semibold text-blue-700">"Save"</span> butonuna tıklayın</li>
              <li>Kuralınız aktif hale gelecek ve artık SMS'ler yönlendirilmeye başlayacak</li>
              <li>İsterseniz "Send Test Message" ile test edebilirsiniz</li>
            </ul>
            <img
              src={fwios5}
              alt="Save Rule"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Adım 3: Kestirmeler (Shortcuts) Kurulumu</h2>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-bold text-orange-900 text-lg mb-2">Önemli: Video İzlerken Dikkat!</h3>
              <p className="text-orange-800 mb-2">
                Videonun <span className="font-bold">20. saniyesinde</span> <span className="font-semibold">Sender (Gönderici)</span> yazan yere mutlaka <span className="font-mono bg-orange-200 px-2 py-1 rounded font-bold">ONYTEK</span> yazın.
              </p>
              <p className="text-orange-700 text-sm">
                Message Contains kısmına bir şey yazmayın ve "Run Immediately" (Anında Çalıştır) seçeneğini aktif edin.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Video Rehber</h3>
          <p className="text-gray-600 mb-4">
            Aşağıdaki videoyu izleyerek Shortcuts (Kestirmeler) uygulamasında SMS yönlendirme otomasyonu kurabilirsiniz:
          </p>

          <div className="aspect-w-9 aspect-h-16 mb-4">
            <iframe
              src="https://www.youtube.com/embed/CBLdzNcNBaU"
              title="iPhone Shortcuts SMS Yönlendirme Kurulumu"
              className="w-full h-96 rounded-lg shadow-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Önemli Notlar</h3>
        <ul className="list-disc list-inside space-y-2 text-yellow-800">
          <li>Uygulamanın bildirim izinlerini açık tutun</li>
          <li>Filtreleri doğru ayarladığınızdan emin olun</li>
          <li>Yönlendirme yapmadan önce test mesajı gönderin</li>
        </ul>
      </div>


    </div>
  )
}

export default IPhoneSetup