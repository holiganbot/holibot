import telegramIcon from '../assets/telegram.png'
import discordIcon from '../assets/discord.png'

const Contact = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">İletişim</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
        <a
          href="https://t.me/holiganbot"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={telegramIcon}
              alt="Telegram"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Telegram
            </h3>
            <p className="text-blue-700 text-sm">
              Telegram kanalımıza katılarak duyuruları takip edin
            </p>
          </div>
        </a>

        <a
          href="https://discord.gg/holiganbot"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
        >
          <div className="flex flex-col items-center text-center">
            <img
              src={discordIcon}
              alt="Discord"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              Discord
            </h3>
            <p className="text-purple-700 text-sm">
              Discord sunucumuza katılarak toplulukla iletişim kurun
            </p>
          </div>
        </a>

        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 mb-4 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              E-posta
            </h3>
            <p className="text-gray-700 text-sm mb-3">
              Teknik destek için e-posta gönderin
            </p>
            <a
              href="mailto:support@holiganbot.com"
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              holibotinfo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact