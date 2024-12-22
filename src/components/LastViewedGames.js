'use client';
import { useState, useEffect } from 'react';
import { getLastViewedGames } from '@/lib/lastViewedGames';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Calendar, BarChart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function LastViewedGames() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        setGames(getLastViewedGames());
    }, []);

    if (games.length === 0) return null;

    return (
        <section className="mt-8 py-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center">Son Görüntülenen Oyunlar</h2>
            <div className="relative px-4 max-w-5xl mx-auto">
                <ScrollArea className="w-full whitespace-nowrap rounded-md">
                    <div className="flex space-x-8 pb-4 pr-16">
                        {games.map((game) => (
                            <Link href={`/games/${game.id}`} key={game.id} className='flex-none'>
                                <Card className="hover:shadow-lg transition-shadow duration-300 w-48 h-48">
                                    <div className="relative h-36 overflow-hidden rounded-t-lg">
                                        <div
                                            className="absolute inset-0 z-0"
                                            style={{
                                                background: `linear-gradient(135deg, ${game.gameColor || '#f3f4f6'} 0%, rgba(255,255,255,0) 100%)`,
                                                opacity: 0.8
                                            }}
                                        />
                                        {game.image && (
                                            <Image
                                                src={`/assets/${game.image}`}
                                                alt={game.gameName || 'Game image'}
                                                className="object-contain w-full h-full relative z-10"
                                                layout="fill"
                                            />
                                        )}
                                    </div>
                                    <CardContent className="p-2">
                                        <h3 className="font-bold text-sm line-clamp-1">{game.gameName}</h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </section>
    );
}