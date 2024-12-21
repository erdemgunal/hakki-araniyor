import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
      content: "- **Yenilikçilik**: Sürekli olarak yeni fikirler ve çözümler geliştirmeye çalışıyoruz.\n- **Topluluk**: Kullanıcılarımızla güçlü bir bağ kurarak onların ihtiyaçlarına ve geri bildirimlerine göre hizmetlerimizi şekillendiriyoruz.\n- **Erişilebilirlik**: Herkesin faydalanabileceği bir platform sunmayı hedefliyoruz."
    },
    {
      title: "Takımımız",
      content: "Projemiz, yaratıcı düşünce ve teknik becerilere sahip bir ekip tarafından geliştirilmektedir. Her bir takım üyemiz, farklı alanlarda uzmanlaşmış ve projeye benzersiz katkılar sağlamaktadır."
    },
    {
      title: "Bize Ulaşın",
      content: <>Bizimle iletişime geçmek için e-posta yoluyla bize ulaşabilirsiniz: <a href="mailto:hakkierdemgunal@gmail.com" className="text-blue-600 hover:text-blue-800">hakkierdemgunal@gmail.com</a></>
    }
  ];

  return (
    <>
      <Header />
      <div className="bg-black text-white w-full p-6 space-y-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Hakkımızda</h1>
          
          {sections.map((section, index) => (
            <section key={index} className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              <p className="text-gray-700 mt-2 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
