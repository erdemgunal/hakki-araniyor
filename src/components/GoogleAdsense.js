import Script from 'next/script';

export default function GoogleAdsense({ pId }) {
    // Use more specific environment check
    if (process.env.NODE_ENV !== "production") {
        return null;
    }

    return (
        <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}