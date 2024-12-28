import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import {
  Users,
  BookOpen,
  Target,
  Star,
  Lightbulb,
  MapPin,
  Info,
} from 'lucide-react';

export const metadata = {
  title: 'Hakkı Aranıyor Oyunu Kuralları | Durum Bulmacaları',
  description: 'Hakkı Aranıyor oyununun kurallarını öğrenin. 2 veya daha fazla kişiyle oynayabileceğiniz, eğlenceli ve zeka geliştiren bir durum bulmacası oyunu.',
  keywords: 'Hakkı Aranıyor oyunu, durum bulmacaları, mantık oyunları, beyin egzersizi, grup oyunları',
  openGraph: {
    title: 'Hakkı Aranıyor Oyunu Kuralları',
    description: 'Eğlenceli durum bulmacası oyununun kurallarını öğrenin',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hakkı Aranıyor Oyunu Kuralları',
    description: 'Eğlenceli durum bulmacası oyununun kurallarını öğrenin',
  },
  alternates: {
    canonical: 'https://hakki-araniyor.vercel.app/rules',
  }
};

export default function Rules() {
    const sections = [
        {
            title: "Oyuncular",
            content: "2 veya daha fazla kişiden oluşan herhangi bir grup bir durum bulmacası oynayabilir. İlk olarak, sunucuyu seçmelisiniz.",
            color: 'bg-indigo-100',
            titleColor: 'text-indigo-600',
            icon: <Users className="text-indigo-600 w-12 h-12" />,
        },
        {
            title: "Durumu okuyun",
            content: "Sunucu bir durum seçer ve problemi diğer oyunculara tanıtır. Sunucu cevabı kontrol eder, ancak diğerlerine okumaz.",
            color: 'bg-green-100',
            titleColor: 'text-green-600',
            icon: <BookOpen className="text-green-600 w-12 h-12" />,
        },
        {
            title: "Amaç",
            content: "Oyuncuların amacı tahmin etmek ve sunucuya ne olduğunu söylemektir. Bunu başarmak için sunucuya farklı sorular sormaları gerekir. Sunucunun sadece “Evet”, “Hayır” veya “Önemli değil/Bilmiyorum/Soruyu belirtin” şeklinde cevap vermesine izin verilir.",
            color: 'bg-yellow-100',
            titleColor: 'text-yellow-600',
            icon: <Target className="text-yellow-600 w-12 h-12" />,
        },
        {
            title: "Puanla",
            content: "Çözdünüz mü? Diğer kullanıcıların en ilginç durum bulmacalarını bulmalarına yardımcı olmak için bilmeceyi değerlendirin.",
            color: 'bg-purple-100',
            titleColor: 'text-purple-600',
            icon: <Star className="text-purple-600 w-12 h-12" />,
        },
        {
            title: "Örnek",
            content: "Sunucu diyor ki: Çıplak bir kişi bir tarlanın ortasında ölü bulundu. Elinde yanmış bir kibrit tutuyordu. Ne olmuştu ve oraya nasıl gelmişti?  Oyuncular sorular sormaya başlar:  - Yanında kimse var mıydı?  - Hayır.  - Çıplak mı öldü?  - Evet.  - Çıplaklığından utanıyor muydu? - Bu önemli değil. Ve böyle devam eder.",
            color: 'bg-teal-100',
            titleColor: 'text-teal-600',
            icon: <Lightbulb className="text-teal-600 w-12 h-12" />,
        },
        {
            title: "Avantaj",
            content: "Durum bulmacaları küçük bir beyin depremidir. Her iki yarımküreyi de harekete geçirir, analiz etmeyi, keşfetmeyi ve gizemli şeylerin gizli nedenlerini bulmayı öğretir.",
            color: 'bg-red-100',
            titleColor: 'text-red-600',
            icon: <Lightbulb className="text-red-600 w-12 h-12" />,
        },
        {
            title: "Nerede oynanır",
            content: "Durum bulmacalarının avantajlarından biri de herhangi bir özel ekipman gerektirmemesidir. Hareket halindeyken, seyahat ederken, bir partide, çiftler halinde veya büyük gruplar halinde oynayabilirsiniz.",
            color: 'bg-blue-100',
            titleColor: 'text-blue-600',
            icon: <MapPin className="text-blue-600 w-12 h-12" />,
        },
        {
            title: "Detaylar",
            content: "Deneyimli bir sunucu hikayeye istediği ayrıntıları ekleyebilir (bilmece, “Bilmiyorum” ve “Önemli değil” cevaplarının sayısını azaltarak çok daha karmaşık hale gelebilir).",
            color: 'bg-yellow-100',
            titleColor: 'text-yellow-600',
            icon: <Info className="text-yellow-600 w-12 h-12" />,
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Hakkı Aranıyor Oyunu Nasıl Oynanır",
        "description": "Hakkı Aranıyor durum bulmacası oyununun kuralları ve nasıl oynanacağı",
        "step": sections.map((section, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": section.title,
            "text": section.content
        }))
    };

    return (
        <>
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main role="main" itemScope itemType="https://schema.org/HowTo">
                <div className="max-w-4xl mx-auto p-6 space-y-8">
                    <header>
                        <h1 
                            className="text-5xl font-bold text-center text-blue-500 mb-12 tracking-tight"
                            itemProp="name">
                            Hakkı Aranıyor Oyunu Kuralları
                        </h1>
                        <meta itemProp="description" content="Hakkı Aranıyor oyununun resmi kuralları ve nasıl oynanacağı hakkında detaylı bilgi." />
                    </header>
                    
                    <article className="rules-content">
                        {sections.map((section, index) => (
                            <section 
                                key={index} 
                                className={`${section.color} p-6 rounded-lg shadow-md flex items-center space-x-4 hover:bg-opacity-80 hover:shadow-lg transition-all`}
                                aria-labelledby={`section-${index}`}
                                itemProp="step"
                                itemScope
                                itemType="https://schema.org/HowToStep">
                                <div className="icon-wrapper" aria-hidden="true">{section.icon}</div>
                                <div>
                                    <h2 
                                        id={`section-${index}`}
                                        className={`text-2xl font-semibold ${section.titleColor}`}
                                        itemProp="name">
                                        {section.title}
                                    </h2>
                                    <p 
                                        className="text-gray-700 mt-2 leading-relaxed"
                                        itemProp="text">
                                        {section.content}
                                    </p>
                                </div>
                            </section>
                        ))}
                    </article>
                </div>
            </main>
        </>
    )
}