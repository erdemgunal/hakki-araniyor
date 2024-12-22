"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
return (
    <div className="min-h-screen bg-background">
        <main className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="relative w-96 h-96 mb-8">
                    <Image
                        src="/assets/not-found-404.jpeg"
                        alt="404"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="rounded-xl"
                    />
                </div>
                <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-xl font-semibold mb-6">Sayfa Bulunamadı</h2>
                <p className="text-muted-foreground mb-8">
                    Aradığınız sayfa uçup gitmiş gibi görünüyor...
                </p>
                <Link
                    href="/"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
                >
                    Ana Sayfaya Dön
                </Link>
            </div>
        </main>
    </div>
);
}
