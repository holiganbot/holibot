import Step from '../components/Step'
import fwsms0 from '../assets/fwsms/fwsms-0.png'
import fwsms1 from '../assets/fwsms/fwsms-1.jpg'
import fwsms2 from '../assets/fwsms/fwsms-2.jpg'
import fwsms3 from '../assets/fwsms/fwsms-3.jpg'
import fwsms4 from '../assets/fwsms/fwsms-4.jpg'
import fwsms5 from '../assets/fwsms/fwsms-5.jpg'
import fwsms6 from '../assets/fwsms/fwsms-6.jpg'
import fwsms7 from '../assets/fwsms/fwsms-7.jpg'
import fwsms8 from '../assets/fwsms/fwsms-8.jpg'
import fwsms9 from '../assets/fwsms/fwsms-9.jpg'
import fwsms10 from '../assets/fwsms/fwsms-10.jpg'
import fwsms11 from '../assets/fwsms/fwsms-11.jpg'
import fwsms12 from '../assets/fwsms/fwsms-12.jpg'
import fwsms13 from '../assets/fwsms/fwsms-13.jpg'
import fwsms14 from '../assets/fwsms/fwsms-14.jpg'
import fwsms15 from '../assets/fwsms/fwsms-15.jpg'
import fwsms16 from '../assets/fwsms/fwsms-16.jpg'
import fwsms17 from '../assets/fwsms/fwsms-17.jpg'
const AndroidSetup = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Android SMS Kurulumu</h1>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-green-900 mb-4">Gerekli Uygulama</h2>
        <p className="text-green-800 mb-4">
          Android telefonunuzda SMS yönlendirme yapmak için <span className="font-bold">"Forward SMS"</span> uygulamasını kurmanız gerekiyor.
        </p>
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
      </div>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-yellow-900 mb-3">⚠️ Önemli Notlar</h3>
        <ul className="list-disc list-inside space-y-2 text-yellow-800">
        <li>Uygulamanın çalışması için internet olması zorunludur. İnternet açık olmadığı durumda bot SMS kodu alamayacağı için hesabınıza giriş yapamaz.</li>
          <li>Telefonunuz uyku modundayken de çalışması için anlatılan tüm ayarları eksiksiz yapın</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Videolu Anlatım</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <p className="text-gray-600 mb-4">
            Aşağıdaki videoda Forward SMS kurulumunun tüm adımlarını detaylı olarak görebilirsiniz:
          </p>
          <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
            <video
              className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-300"
              controls
              preload="metadata"
            >
              <source src="/media/fwsms.mp4" type="video/mp4" />
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Forward SMS Kurulum Adımları</h2>

        <Step
          stepNumber={0}
          title="Play Store'dan Forward SMS'i indirin"
          description="Google Play Store'a giderek Forward SMS uygulamasını arayın ve indirin."
          imageSrc={fwsms0}
          imageAlt="Play Store'dan Forward SMS indirme"
        >
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4 mt-2 flex items-start">
            <svg
              className="w-6 h-6 text-yellow-400 mr-3 mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="white"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01"
              />
            </svg>
            <div className="text-yellow-900 text-sm">
              Uygulamayı açtıktan sonra karşınıza çıkan <b>tüm izinleri vermeniz gerekmektedir</b>. Aksi halde SMS yönlendirme düzgün çalışmaz.
            </div>
          </div>
        </Step>

<Step
          stepNumber={1}
          title="Kural oluşturma"
          description="Uygulamada izinleri verdikten sonra sağ altta bulunan 'Add Rule' butonuna tıklayın."
          imageSrc={fwsms5}
          imageAlt="Kural oluşturma"
        />

        <Step
          stepNumber={2}
          title="Basic Rule seçimi"
          description="Kural oluşturma ekranında 'Basic Rule' seçeneğini seçin."
          imageSrc={fwsms6}
          imageAlt="Forward SMS ana ekran"
        />

        <Step
          stepNumber={3}
          title="Kural ayarları"
          description="Kural ayarlarında telefon ikonuna tıklayıp çıkan menüden 'Email' seçeneğini seçin."
          imageSrc={fwsms7}
          imageAlt="Ayarlar menüsü"
        />

        <Step
          stepNumber={4}
          title="Email ayarları"
          description="- Email girme kutucuğuna size vermiş olduğumuz email adresini veya kendi başınıza Gmail Uygulama Şifresi oluşturduğunuz email adresini girin."
          imageSrc={fwsms8}
          imageAlt="Email ayarları"
        >
          <p className="text-gray-600 mb-4">
            - Daha sonra "Forward All Messages" yazısının sağındaki kutucuğa tıklayarak pasifize edin.
          </p>
        </Step>

        <Step
          stepNumber={5}
          title="Filtre ayarları"
          description="- Fotoğrafta görüldüğü gibi 'Filter based on sender of SMS' yazan yerdeki kutucuğa ONYTEK yazın."
          imageSrc={fwsms9}
          imageAlt="Filtre ayarları"
        >
          <p className="text-gray-600 mb-4">- Daha sonra "Save" butonuna tıklayın.</p>
        </Step>

        
        <Step
          stepNumber={6}
          title="Test etme"
          description="Kuralı oluşturduktan sonra test etmek için 'Sender' kısmına ONYTEK yazın ve 'Test' butonuna tıklayın. Eğer test başarılı olursa girmiş olduğunuz email adresine SMS yönlendirilecektir."
          imageSrc={fwsms12}
          imageAlt="Test etme"
        />
        

        <Step
          stepNumber={7}
          title="Pil Optimizasyonu Kısıtlamalarını Kapatma"
          description="Uygulamanın ikonuna sağ tıklayıp çıkan menüde soldaki 'Bilgi' ikonuna tıklayın."
          imageSrc={fwsms1}
          imageAlt="Pil Optimizasyonu Kısıtlamalarını Kapatma"
        />

        <Step
          stepNumber={8}
          title="Pil Optimizasyonu Kısıtlamalarını Kapatma"
          description="Kullanılmıyorsa uygulama etkinliğini duraklat vb. ayarları kapatın."
          imageSrc={fwsms2}
          imageAlt="Pil Optimizasyonu Kısıtlamalarını Kapatma 2"
        />

        <Step
          stepNumber={9}
          title="Pil Optimizasyonu Kısıtlamalarını Kapatma"
          description="Üstte 'Pil' yazan butona tıklayın."
          imageSrc={fwsms3}
          imageAlt="Pil Optimizasyonu Kısıtlamalarını Kapatma 3"
        />

        <Step
          stepNumber={10}
          title="Pil Optimizasyonu Kısıtlamalarını Kapatma"
          description="Uygulama pil optimizasyonu kısıtlamalarını kapatın."
          imageSrc={fwsms4}
          imageAlt="Pil Optimizasyonu Kısıtlamalarını Kapatma 4"
        />

        

        <Step
          stepNumber={11}
          title="Arka Planda Otomatik Çalıştırma Ayarı"
          description="Ayarları açtıktan sonra 'Uygulamalar' sekmesinde gidin."
          imageSrc={fwsms14}
          imageAlt="Arka Planda Otomatik Çalıştırma Ayarı"
        />

        <Step
          stepNumber={12}
          title="Arka Planda Otomatik Çalıştırma Ayarı"
          description="'Uygulamaları yönet' sekmesinde gidin."
          imageSrc={fwsms15}
          imageAlt="Arka Planda Otomatik Çalıştırma Ayarı 2"
        />

        <Step
          stepNumber={13}
          title="Arka Planda Otomatik Çalıştırma Ayarı"
          description="'Arka Planda Otomatik başlatma' butonuna tıklayın."
          imageSrc={fwsms16}
          imageAlt="Arka Planda Otomatik Çalıştırma Ayarı 3"
        />

        <Step
          stepNumber={14}
          title="Arka Planda Otomatik Çalıştırma Ayarı"
          description="Forward SMS uygulamasını bulun ve butona tıklayarak maviye çevirin."
          imageSrc={fwsms17}
          imageAlt="Arka Planda Otomatik Çalıştırma Ayarı 4"
        />

<Step
          stepNumber={15}
          title="(Opsiyonel) Premium seçeneği"
          description="Ücretsiz sürümde günlük 50 adet SMS yönlendirme limiti bulunmaktadır. Bu limiti aşarsanız SMS yönlendirme yapamazsınız ve bot çalışmaz hale gelebilir. Premium seçeneği ile bu durumu garantiye alabilirsiniz. Bunun için uygulamayı açın ve sol üstteki 'Ayarlar' ikonuna tıklayın."
          imageSrc={fwsms11}
          imageAlt="Premium seçeneği"
        />

        <Step
          stepNumber={16}
          title="(Opsiyonel) Premium seçeneği"
          description="Açılan menüde 'Premium' seçeneğine tıklayarak Premium abone olabilirsiniz."
          imageSrc={fwsms13}
          imageAlt="(Opsiyonel) Premium seçeneği"
        />

      </section>

      
    </div>
  )
}

export default AndroidSetup