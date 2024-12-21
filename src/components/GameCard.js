import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star, Clock, BarChart, Calendar, Share2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';

export default function GameCard({ game, handleShare, showAnswer, setShowAnswer, textHeight }) {
    const contentVariants = {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: { duration: 0.3, ease: [0.4, 0, 1, 1] }
        }
    };
    return (
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-64 sm:h-80">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: `linear-gradient(135deg, ${game.gameColor || DEFAULT_GAME_COLOR} 0%, rgba(255,255,255,0) 100%)`,
                        opacity: 0.8
                    }}
                />
                {game.image && (
                    <Image
                        src={`/assets/${game.image}`}
                        alt={game.gameName || 'Game image'}
                        className="object-contain w-full h-full relative z-10"
                        layout="fill"
                        priority
                    />
                )}
            </div>
            <CardContent className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-6 gap-4">
                    <h1 className="text-lg sm:text-lg md:text-xl font-bold text-primary">{game.gameName}</h1>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleShare}
                        title="Share"
                        className="shrink-0 hover:scale-110 transition-transform"
                    >
                        <Share2 className="w-5 h-5" />
                    </Button>
                </div>

                <motion.div
                    className={`relative ${textHeight} rounded-xl overflow-hidden shadow-inner`}
                    animate={showAnswer ? "answer" : "question"}
                    variants={{
                        question: {
                            backgroundColor: '#f3f4f6',
                            transition: { duration: 0.5 }
                        },
                        answer: {
                            backgroundColor: '#1a1a1a',
                            transition: { duration: 0.5 }
                        }
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={showAnswer ? 'answer' : 'question'}
                                variants={contentVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full h-full flex items-center justify-center"
                            >
                                <p className={`text-xs sm:text-sm md:text-base lg:text-xl text-center max-h-full overflow-y-auto px-4 
                                            ${showAnswer ? 'text-white font-medium' : 'text-gray-700'}`}
                                >
                                    {showAnswer ? game.answer : game.question}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {game.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 my-6">
                        {game.tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs sm:text-sm font-medium px-3 py-1 hover:bg-primary/20 transition-colors"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-gray-600 mb-6">
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <BarChart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" />
                        <span>Zorluk: {game.difficulty || 'N/A'}/10</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-500" />
                        <span>Değerlendirme: {game.rating || 'N/A'}%</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" />
                        <span>Süre: {game.duration || 'N/A'} min</span>
                    </div>
                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" />
                        <span>{game.date ? new Date(game.date * 1000).toLocaleDateString('tr-TR', {
                            year: 'numeric',
                            month: 'long'
                        }) : 'N/A'}</span>
                    </div>
                </div>

                <Button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="w-full sm:w-auto text-base sm:text-lg font-medium transition-all hover:scale-105"
                    size="lg"
                >
                    {showAnswer ? 'Cevabı Gizle' : 'Cevabı Göster'}
                </Button>
            </CardContent>
        </Card>
    )
}
