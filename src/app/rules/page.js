import React from 'react'

export default function Rules() {
    const sections = [
        {
            title: "Oyuncular",
            content: "2 veya daha fazla kişiden oluşan herhangi bir grup bir durum bulmacası oynayabilir. İlk olarak, sunucuyu seçmelisiniz.",
            color: 'bg-indigo-100',
            titleColor: 'text-indigo-600',
        },
        {
            title: "Durumu okuyun",
            content: "Sunucu bir durum seçer ve problemi diğer oyunculara tanıtır. Sunucu cevabı kontrol eder, ancak diğerlerine okumaz.",
            color: 'bg-green-100',
            titleColor: 'text-green-600',
        },
        {
            title: "Amaç",
            content: "Oyuncuların amacı tahmin etmek ve sunucuya ne olduğunu söylemektir. Bunu başarmak için sunucuya farklı sorular sormaları gerekir. Sunucunun sadece “Evet”, “Hayır” veya “Önemli değil/Bilmiyorum/Soruyu belirtin” şeklinde cevap vermesine izin verilir.",
            color: 'bg-yellow-100',
            titleColor: 'text-yellow-600',
        },
        {
            title: "Puanla",
            content: "Have solved it? Rate the riddle to help other users to find the most interesting situation puzzles.",
            color: 'bg-purple-100',
            titleColor: 'text-purple-600',
        },
        {
            title: "Örnek",
            content: "Sunucu diyor ki: Çıplak bir kişi bir tarlanın ortasında ölü bulundu. Elinde yanmış bir kibrit tutuyordu. Ne olmuştu ve oraya nasıl gelmişti?  Oyuncular sorular sormaya başlar:  - Yanında kimse var mıydı?  - Hayır.  - Çıplak mı öldü?  - Evet.  - Çıplaklığından utanıyor muydu? - Bu önemli değil. Ve böyle devam eder.",
            color: 'bg-teal-100',
            titleColor: 'text-teal-600',
        },
        {
            "title": "Avantaj",
            "content": "Durum bulmacaları küçük bir beyin depremidir. Her iki yarımküreyi de harekete geçirir, analiz etmeyi, keşfetmeyi ve gizemli şeylerin gizli nedenlerini bulmayı öğretir. Birçok kuruluş, çalışanlarının düşünme yeteneklerini geliştirmek amacıyla beyin fırtınası yapmak için durum bulmacalarını seçmektedir.",
            "color": "bg-red-100",
            "titleColor": "text-red-600"
        },
        {
            "title":"Nerede oynanır",
            "content":"Durum bulmacalarının avantajlarından biri de herhangi bir özel ekipman gerektirmemesidir. Hareket halindeyken, seyahat ederken, bir partide, çiftler halinde veya büyük gruplar halinde oynayabilirsiniz.",
            "color":"bg-blue-100",
            "titleColor":"text-blue-600"
        },
        {
            "title":"Detaylar",
            "content":"Deneyimli bir sunucu hikayeye istediği ayrıntıları ekleyebilir (bilmece, “Bilmiyorum” ve “Önemli değil” cevaplarının sayısını azaltarak çok daha karmaşık hale gelebilir).",
            "color":"bg-yellow-100",
            "titleColor":"text-yellow-600"
        }
    ];

    return (
        <>
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
        </>
    )
}
