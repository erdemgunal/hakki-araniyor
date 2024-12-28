import React from 'react'

export const metadata = {
  title: 'Hakkımızda - Evet Hayır Oyunu',
  description: 'Problem çözme becerilerini geliştiren interaktif bulmaca oyunları. Eğlenceli ve düşündürücü bir deneyim ile beyin egzersizi yapın.',
  openGraph: {
    title: 'Hakkımızda - Evet Hayır Oyunu',
    description: 'Problem çözme becerilerini geliştiren interaktif bulmaca oyunları.',
    type: 'website',
  }
}

export default function About() {
  const sections = [
    {
      title: "Proje Hedefi",
      content: "Bu proje, kullanıcıların günlük hayatlarında karşılaştıkları problem çözme becerilerini geliştirmek için tasarlanmış interaktif bulmaca oyunları sunuyor. Hedefimiz, eğlenceli ve düşündürücü bir deneyim ile beyin egzersizi yaparken kullanıcıları motive etmek."
    },
    {
      title: "Vizyon",
      content: "Vizyonumuz, dünya çapında insanları bir araya getirerek, her yaşa hitap eden beyin geliştirici oyunlar sunmak ve insanların düşünme yeteneklerini artırmalarına yardımcı olmaktır. Herkesin ulaşabileceği bir platform yaratmak istiyoruz."
    },
    {
      title: "Değerlerimiz",
      content: <ul className="list-disc pl-5 space-y-2">
        <li><strong>🚀 Yenilikçilik:</strong> Sürekli olarak yeni fikirler ve çözümler geliştirmeye çalışıyoruz.</li>
        <li><strong>👥 Topluluk:</strong> Kullanıcılarımızla güçlü bir bağ kurarak onların ihtiyaçlarına ve geri bildirimlerine göre hizmetlerimizi şekillendiriyoruz.</li>
        <li><strong>🌍 Erişilebilirlik:</strong> Herkesin faydalanabileceği bir platform sunmayı hedefliyoruz.</li>
      </ul>
    },
    {
      title: "Takımımız",
      content: "Projemiz, yaratıcı düşünce ve teknik becerilere sahip bir ekip tarafından geliştirilmektedir. Her bir takım üyemiz, farklı alanlarda uzmanlaşmış ve projeye benzersiz katkılar sağlamaktadır."
    },
    {
      title: "Bize Ulaşın",
      content: <div className="flex items-center space-x-2">
        <span>Bizimle iletişime geçmek için:</span>
        <a href="mailto:hakkierdemgunal@gmail.com" 
           className="text-blue-600 hover:text-blue-800 underline font-medium">
          hakkierdemgunal@gmail.com
        </a>
      </div>
    }
  ];

  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white w-full p-6 space-y-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-blue-500 mb-12 tracking-tight">
          Hakkımızda
        </h1>
        
        {sections.map((section, index) => (
          <section 
            key={index} 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-xl hover:bg-white/15 transition-all duration-300 mb-6 border border-white/10"
            itemScope 
            itemType="https://schema.org/WebPageElement"
          >
            <h2 
              className="text-2xl font-semibold text-blue-400 mb-4"
              itemProp="name"
            >{section.title}</h2>
            <div 
              className="text-gray-100 mt-2 leading-relaxed"
              itemProp="text"
            >{section.content}</div>
          </section>
        ))}
      </article>
    </main>
  )
}