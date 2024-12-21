import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function PrivacyPolicy() {
  const privacySections = [
    {
      title: "Topladığımız Bilgiler",
      content: "Kullanıcılarımızdan kişisel bilgiler toplayabiliriz. Bu bilgiler, kullanıcı deneyimini geliştirmek ve hizmetlerimizi sunmak için kullanılacaktır."
    },
    {
      title: "Bilgilerin Kullanımı",
      content: "Topladığımız bilgileri, kullanıcı deneyimini iyileştirmek, hizmetlerimizi sunmak ve kullanıcılarımızla iletişim kurmak için kullanırız."
    },
    {
      title: "Bilgilerin Paylaşılması",
      content: "Kişisel bilgilerinizi üçüncü şahıslarla paylaşmayacağız, ancak yasal zorunluluklar ve hizmet sağlayıcılarımız ile bazı durumlar olabilir."
    },
    {
      title: "Veri Güvenliği",
      content: "Kullanıcı bilgilerinin güvenliğini sağlamak için çeşitli güvenlik önlemleri alıyoruz. Ancak internet üzerinden yapılan işlemlerin güvenliği garanti edilemez."
    },
    {
      title: "İletişim",
      content: "Gizlilik politikamız hakkında sorularınız varsa, bizimle iletişime geçmekten çekinmeyin."
    }
  ];

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">Gizlilik Politikası</h1>
        
        {privacySections.map((section, index) => (
          <section key={index} className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
            <p className="text-gray-700 mt-2 leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
      <Footer />
    </>
  )
}
