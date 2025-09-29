import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import zipAyiklama from "../assets/ayikla.png";
import ekBilgi from "../assets/ekbilgi.png";
import yineDeCalistir from "../assets/yinedecalistir.png";
import lisansGirisi from "../assets/lisansgirisi.png";
import gmailAppPassword from "../assets/apppw.jpg";
import createAppPassword from "../assets/createapppw.png";
import createUser from "../assets/kullaniciolustur.png";
import createFilter from "../assets/holibot-oranfiltresi.png";
import autoLogin from "../assets/botubaslat.png";
const Installation = () => {
  const location = useLocation();
  const indirmeRef = useRef<HTMLElement>(null);
  const kurulumRef = useRef<HTMLElement>(null);
  const baslatmaRef = useRef<HTMLElement>(null);
  const smsIntegrationRef = useRef<HTMLElement>(null);
  const gmailAppPasswordRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash) return;

    const refs: { [key: string]: React.RefObject<HTMLElement | null> } = {
      indirme: indirmeRef,
      kurulum: kurulumRef,
      baslatma: baslatmaRef,
      smsIntegration: smsIntegrationRef,
      gmailAppPassword: gmailAppPasswordRef,
    };

    const targetRef = refs[hash];
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Bot Kurulumu</h1>

      <section ref={indirmeRef} className="mb-12">
        <h2 id="indirme" className="text-2xl font-semibold text-gray-900 mb-4">
          İndirme
        </h2>

        <p className="text-gray-600 mb-4">
          Holibot'u resmi GitHub deposundan indirebilirsiniz:
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-blue-900 mb-3">
            İndirme Seçenekleri
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded border">
              <span className="font-medium">Holibot v1.0</span>
              <a
                href="https://github.com/holiganbot/holibot-release/releases/tag/holibot_v1"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                target="_blank"
              >
                İndir
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={kurulumRef} className="mb-12">
        <h2 id="kurulum" className="text-2xl font-semibent text-gray-900 mb-4">
          Kurulum
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">
            <h3 className="font-semibold text-gray-900 mb-3">
              1. holibot.exe yi çalıştırma.
            </h3>
            <p className="text-gray-600 mb-4">
              - İndirdiğiniz .zip dosyasına sağ tıklayıp "Tümünü Ayıkla" 'ya
              tıklayın.
            </p>
            <img
              src={zipAyiklama}
              alt="Zip Dosyasını Ayıkla"
              className="w-auto h-100 rounded-lg border border-gray-200"
            />
            <p className="text-gray-600 mb-4">
              - Daha sonra tekrar "Ayıkla" butonuna tıklayarak ayıklama işlemini
              tamamlayın.
            </p>
            <p className="text-gray-600 mb-4">
              - Ayıkladıktan sonra açılan klasördeki holibot.exe dosyasını
              çalıştırın.
            </p>
            <p className="text-gray-600 mb-4">
              - Çalıştırdıktan sonra karşınıza aşağıdaki gibi bir uyarı gelirse
              "Ek Bilgi" butonuna tıklayın.
            </p>
            <img
              src={ekBilgi}
              alt="Ek Bilgi"
              className="w-auto h-100 rounded-lg border border-gray-200"
            />
            <p className="text-gray-600 mb-4">
              - Ek Bilgi butonuna tıkladıktan sonra aşağıdaki "Yine De Çalıştır"
              butonuna tıklayın.
            </p>
            <img
              src={yineDeCalistir}
              alt="Yine De Çalıştır"
              className="w-auto h-100 rounded-lg border border-gray-200"
            />
            <p className="text-gray-600 mb-4">
              - Yine De Çalıştır butonuna tıkladıktan sonra uygulama açıldıktan
              sonra karşınıza lisans anahtarı isteyen bir ekran açılacak burada
              size verilen lisans anahtarını girin.
            </p>
            <img
              src={lisansGirisi}
              alt="Lisans Girişi"
              className="w-auto h-100 rounded-lg border border-gray-200"
            />
            <p className="text-gray-600 mb-4">
              - Lisans anahtarını girdikten sonra "Devam" butonuna tıkladıktan
              sonra artık uygulamayı kullanabilirsiniz.
            </p>
          </div>
        </div>
      </section>
      <section ref={smsIntegrationRef} className="mb-12">
        <h2
          id="smsIntegration"
          className="text-2xl font-semibold text-gray-900 mb-4"
        >
          SMS Entegrasyonu
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-2">
          <p className="text-gray-600 mb-4">
            Holibot'un siteye giriş yaptığınızda gelen SMS kodlarını alabilmesi
            için telefona gelen doğrulama kodlarının yönlendirilmesi gerekir.
          </p>
          <p className="text-gray-600 mb-6">
            Telefonunuzun işletim sistemine göre aşağıdaki kurulum
            kılavuzlarından birini takip edin:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/android-setup"
              className="block p-6 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🤖</span>
                <h3 className="text-lg font-semibold text-green-900">
                  Android Kurulum
                </h3>
              </div>
              <p className="text-green-700">
                Android telefonlar için SMS yönlendirme kurulumu
              </p>
            </Link>
            <a
              href="/iphone-setup"
              className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">📱</span>
                <h3 className="text-lg font-semibold text-blue-900">
                  iPhone Kurulum
                </h3>
              </div>
              <p className="text-blue-700">
                iPhone telefonlar için SMS yönlendirme kurulumu
              </p>
            </a>
          </div>
        </div>
      </section>

      <section ref={gmailAppPasswordRef} className="mb-12">
        <h2
          id="gmailAppPassword"
          className="text-2xl font-semibold text-gray-900 mb-4"
        >
          Gmail Uygulama Şifresi Alma
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex items-start">
          <svg
            className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0"
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
          <div className="text-blue-900 text-sm">
            Eğer sunucu desteği aldıysanız{" "}
            <Link
              to="/installation#baslatma"
              className="text-blue-700 underline"
            >
              Başlatma
            </Link>{" "}
            adımına atlayabilirsiniz.
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-6 space-y-2">
          <p className="text-gray-600 mb-4">
            Gmail uygulama şifresi almak için aşağıdaki adımları takip edin:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>
              <a className="text-blue-700 underline" href="https://myaccount.google.com/security" target="_blank">
                https://myaccount.google.com/security 
              </a>
              <span className="ml-1">adresine giderek İki
                Faktörlü Doğrulamanın açık olup olmadığını kontrol edin eğer
                kapalıysa açın</span>
            </li>
            <li>
              <p>
              <a
                className="text-blue-700 underline"
                href="https://myaccount.google.com/apppasswords"
                target="_blank"
              >
                  https://myaccount.google.com/apppasswords 
              </a>
                <span className="ml-1">adresine girin ve kendinize bir uygulama şifresi oluşturun</span>
              </p>
              
              <img
                src={createAppPassword}
                alt="Gmail Uygulama Şifresi Oluşturma"
                className="w-auto h-100 rounded-lg border border-gray-200"
              />
            </li>
            <li>Oluşturduğunuz uygulama şifresini kopyalayın ve saklayın</li>
          </ol>
          <img
            src={gmailAppPassword}
            alt="Gmail Uygulama Şifresi"
            className="w-auto h-100 rounded-lg border border-gray-200"
          />
        </div>
      </section>

      <section ref={baslatmaRef} className="mb-12 space-y-4">
        <h2 id="baslatma" className="text-2xl font-semibold text-gray-900 mb-4">
          Başlatma
        </h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
          <p className="text-gray-600 mb-4">
            Holibot'u başlatmak için aşağıdaki adımları takip edin:
          </p>
          <h4 className="text-xl">1. holibot.exe dosyasını çalıştırın</h4>
          <h4 className="text-xl">2. Lisans anahtarınızı girin</h4>
          <div className="space-y-2">
            <h4 className="text-xl">3. Kullanıcı Oluşturma</h4>
            <img
              src={createUser}
              alt="Kullanıcı Oluşturma"
              className="w-auto h-100 rounded-lg border border-gray-200"
            />
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Açıklama
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Kullanıcı adı
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Holigan kullanıcı adınız
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Şifre
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Holigan şifreniz
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      E-Posta
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      SMS Yönlendirme mail adresiniz veya size verilen mail
                      adresi
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Uygulama Şifresi
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Gmail uygulama şifreniz veya size verilen şifre
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Bildirim E-Posta
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Bildirim yollanacak e-posta adresiniz
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg">
              Bilgileri doldurduktan sonra "Kullanıcı Ekle" butonuna tıklayın.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl">4. Oran Filtresi Oluştrma</h4>
            <img
              src={createFilter}
              alt="Oran Filtresi Oluşturma"
              className="w-auto h-100 rounded-lg border border-gray-200"
            />
            <p className="text-lg">
              İstediğiniz oran kurallarını oluşturarak kaç TL basacağınızı
              belirleyin.
            </p>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Alan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Açıklama
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Kural adı
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Kural adı
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Min Oran
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Minimum hangi orandan itibaren geçerli olsun
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Max Oran
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Maximum hangi oranda geçerli olsun
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Bahis Miktarı
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Kaç TL basacağınız
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Eylem
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <span className="font-semibold text-green-600">BET</span>{" "}
                      = bas,{" "}
                      <span className="font-semibold text-red-600">SKIP</span> =
                      orana basma
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Öncelik
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Öncelik sırası (iki kural çakışması durumunda)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg">
              Bilgileri doldurduktan sonra "Kural Ekle" butonuna tıklayın.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
              <span className="text-2xl">🧪</span>
              <div>
                <p className="text-yellow-900 font-semibold mb-1">
                  Test Özelliği
                </p>
                <p className="text-yellow-800 text-sm">
                  Test için <span className="font-bold">"Test Et"</span>{" "}
                  butonuna tıklayarak, kaç orana kaç TL basılacağını önceden
                  görebilirsiniz.
                </p>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center space-x-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <p className="text-orange-900 font-semibold mb-1">Dikkat!</p>
                <p className="text-orange-800 text-sm">
                  Oran değerleri ondalıklı olabileceği için, tam sayı yerine
                  aralık vermeniz önerilir. <br />
                  Örneğin, sadece <span className="font-bold">5</span> oranına
                  basacak bir kural için{" "}
                  <span className="font-bold">Min Oran: 4,9</span> ve{" "}
                  <span className="font-bold">Max Oran: 5,1</span> şeklinde
                  girin.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl">5. Botu Başlatma</h4>
            <img
              src={autoLogin}
              alt="Otomatik Giriş"
              className="w-auto h-100 rounded-lg border border-gray-200"
            />
            <p>
              {" "}
              <span className="font-bold">Botu Başlat</span> butonuna tıklayın
              ve botu başlatın.
            </p>
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Ayar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Açıklama
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Kullanıcı Seç
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Kullanıcı seçin.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Yerel Port
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Eğer aynı anda birden fazla bot başlatılacaksa yerel port
                      numarasını değiştirin. (İlk hesap 9911, ikinci hesap 9912,
                      üçüncü hesap 9913, vb.)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Sadece Giriş
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Aktif ederseniz bot sadece giriş yapacaktır.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Log mesajları gönder
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Aktif olursa e-posta adresinize özel oran alındığında mail
                      yollar.
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Otomatik yeniden başlatma aralığı
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Botun kaç dakika aralıkla yeniden başlatılacağını
                      belirleyin.{" "}
                      <span className="font-semibold text-blue-600">
                        Önerilen: 90 dakika
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      SMS Zaman Aşımı
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      SMS gelmezse kaç dakika sonra tekrar denesin{" "}
                      <span className="font-semibold text-blue-600">
                        (Önerilen: 30 dakika)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">🎉 Tebrikler!</h3>
          <p className="text-blue-800">
            Holibot başarıyla kuruldu ve çalışmaya hazır. Artık otomatik
            işlemlerinizi başlatabilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Installation;
