export const metadata = {
  title: 'Hizmet Şartları | Hakkı Aranıyor',
  description: 'Hakkı Aranıyor web sitesinin kullanım şartları ve koşulları. Kullanıcı hakları, sorumluluklar ve yasal bilgiler.',
  openGraph: {
    title: 'Hizmet Şartları | Hakkı Aranıyor',
    description: 'Hakkı Aranıyor web sitesinin kullanım şartları ve koşulları.',
  }
}

import React from 'react'

export default function TermsOfService() {
  const terms = [
    {
      title: "Kabul Edilen Şartlar",
      content:
        "Bu web sitesine erişerek, belirtilen şartları kabul etmiş olursunuz. Hizmetleri kullanmadan önce bu şartları dikkatlice okuduğunuzdan emin olun."
    },
    {
      title: "Hizmetlerin Kullanımı",
      content:
        "Bu web sitesi yalnızca kişisel kullanım için sağlanmaktadır. Hizmetleri kötüye kullanmak, yasal olmayan faaliyetlerde bulunmak yasaktır."
    },
    {
      title: "Fesih",
      content:
        "Kullanıcı, hizmeti herhangi bir zamanda sonlandırabilir. Biz de herhangi bir sebeple hizmeti askıya alabilir veya sonlandırabiliriz."
    },
    {
      title: "Sorumluluk Reddi",
      content:
        "Web sitesi, hizmetlerin kesintisiz olacağına dair hiçbir garanti vermez. Web sitesine erişim kullanıcı riskine ve sorumluluğuna bağlıdır."
    },
    {
      title: "Değişiklikler",
      content:
        "Şartlar zaman zaman güncellenebilir. Bu değişiklikleri web sitesinde yayınlayacağız ve kullanımınızı devam ettirmeniz, şartları kabul ettiğiniz anlamına gelir."
    }
  ]

  return (
    <main>
      <article className="max-w-4xl mx-auto px-8 py-6 space-y-8">
        <header>
          <h1 className="text-4xl font-bold text-center text-blue-600">Hizmet Şartları</h1>
        </header>

        <section>
          {terms.map((term, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg mb-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{term.title}</h2>
              <div className="text-gray-700 mt-2 leading-relaxed">{term.content}</div>
            </article>
          ))}
        </section>
      </article>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Hizmet Şartları",
          "description": "Hakkı Aranıyor web sitesinin kullanım şartları ve koşulları.",
          "publisher": {
            "@type": "Organization",
            "name": "Hakkı Aranıyor"
          }
        })}
      </script>
    </main>
  )
}
