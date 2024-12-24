import Script from 'next/script';

export default function GoogleAdsense() {
    if (process.env.NODE_ENV !== "production"){
        return null;
    }

    return (
        <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8009627973833648"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    )
}