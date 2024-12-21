import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Calendar, BarChart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const RelatedGames = ({ currentGame, relatedGames }) => {
    if (!relatedGames?.length) return null;

    return (
        <div className="mt-8">
            <h2 className="text-4xl font-bold mb-4">Related Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedGames
                    .filter((game) => game.id !== currentGame.id)
                    .map((game) => (
                        <Link href={`/games/${game.id}`} key={game.id}>
                            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                                <div className="relative h-32 overflow-hidden rounded-t-lg">
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
                                <CardContent className="p-4">
                                    <h3 className="font-bold mb-2 line-clamp-1">{game.gameName}</h3>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{game.question}</p>

                                    {game.tags && game.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {game.tags.slice(0, 2).map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-auto border-t border-gray-200 bg-gray-50 p-3">
                                        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                                            <span className="flex items-center">
                                                <BarChart className="w-3 h-3 mr-1" />
                                                {game.difficuly || game.difficulty} / 10
                                            </span>
                                            <span className="flex items-center">
                                                <Star className="w-3 h-3 mr-1" />
                                                {game.rating} %
                                            </span>
                                            <span className="flex items-center">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {game.duration} dk
                                            </span>
                                            <span className="flex items-center whitespace-nowrap">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {new Date(game.date * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default RelatedGames;