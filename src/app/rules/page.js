import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Rules() {
    const sections = [
        {
            title: "Oyuncular",
            content: "Herhangi bir grup (2 veya daha fazla kişi) durum bulmacası oynayabilir. İlk olarak, bir sunucu seçmelisiniz.",
            color: 'bg-indigo-100', // Example color
            titleColor: 'text-indigo-600', // Example title color
        },
        {
            title: "Derecelendirme",
            content: "Bulmacayı çözdünüz mü? Durum bulmacalarının en ilginç olanlarını bulmalarına yardımcı olmak için diğer kullanıcılara bu bulmacayı puanlayın.",
            color: 'bg-green-100',
            titleColor: 'text-green-600',
        },
        {
            title: "Faydası",
            content: "Durum bulmacaları küçük bir beyin egzersizidir. Beynin iki yarım küresini de çalıştırır, analiz etmeyi, keşfetmeyi ve gizemli şeylerin gizli nedenlerini bulmayı öğretir.",
            color: 'bg-yellow-100',
            titleColor: 'text-yellow-600',
        },
        {
            title: "Nerede Oynanır",
            content: "Durum bulmacalarının avantajlarından biri, özel bir ekipman gerektirmemeleridir. Seyahat ederken, bir partide, çift olarak ya da büyük gruplar halinde oynayabilirsiniz.",
            color: 'bg-purple-100',
            titleColor: 'text-purple-600',
        },
        {
            title: "Detaylar",
            content: "Deneyimli bir sunucu, hikayeye istediği gibi detaylar ekleyebilir (bulmacayı \"Bilmiyorum\" ve \"Önemli değil\" cevaplarının sayısını azaltarak çok daha karmaşık hale getirebilir).",
            color: 'bg-teal-100',
            titleColor: 'text-teal-600',
        }
    ];

    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto p-6 space-y-8">
                <h1 className="text-4xl font-bold text-center text-blue-600">Oyun Kuralları</h1>
                
                {sections.map((section, index) => (
                    <section 
                        key={index} 
                        className={`${section.color} p-6 rounded-lg shadow-md hover:bg-opacity-80 hover:shadow-lg`}>
                        <h2 className={`text-2xl font-semibold ${section.titleColor}`}>{section.title}</h2>
                        <p className="text-gray-700 mt-2 leading-relaxed">{section.content}</p>
                    </section>
                ))}
            </div>
            <Footer />
        </>
    )
}
