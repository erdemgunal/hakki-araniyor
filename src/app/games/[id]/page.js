"use client";
import { useState, useEffect } from 'react';
import { getGameById } from "@/lib/getGameById";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Star, Clock, BarChart, Calendar, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RelatedGames from "@/components/RelatedGames";
import { getRelatedGames } from "@/lib/getRelatedGames";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import TextureBackground from "@/components/ui/texture-background"

const DEFAULT_GAME_COLOR = "#f3f4f6";

export default function GamePage({ params }) {
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [id, setId] = useState(null);
    const [textHeight, setTextHeight] = useState('min-h-[200px]');
    const [relatedGamesList, setRelatedGamesList] = useState([]);
    const [vote, setVote] = useState(null);
    const [difficultyVote, setDifficultyVote] = useState(null);
    const [startTime] = useState(new Date());
    const [elapsedTime, setElapsedTime] = useState(0);

    const getContainerHeight = (text) => {
        if (!text) return 'min-h-[200px]';
        const wordCount = text.split(' ').length;
        if (wordCount > 100) return 'min-h-[400px]';
        if (wordCount > 50) return 'min-h-[300px]';
        return 'min-h-[200px]';
    };

    useEffect(() => {
        async function unwrapParams() {
            try {
                const unwrappedParams = await params;
                if (!unwrappedParams?.id) {
                    throw new Error("Invalid game ID");
                }
                setId(unwrappedParams.id);
            } catch (error) {
                setError("Failed to process game ID");
                setLoading(false);
            }
        }
        unwrapParams();
    }, [params]);

    useEffect(() => {
        if (id) {
            async function fetchGame() {
                try {
                    const fetchedGame = await getGameById(id);
                    if (!fetchedGame) {
                        throw new Error("Game not found");
                    }

                    // Validate required fields
                    if (!fetchedGame.gameName || !fetchedGame.question || !fetchedGame.answer) {
                        throw new Error("Invalid game data");
                    }

                    setGame(fetchedGame);
                    const questionHeight = getContainerHeight(fetchedGame.question);
                    const answerHeight = getContainerHeight(fetchedGame.answer);
                    setTextHeight(questionHeight > answerHeight ? questionHeight : answerHeight);
                } catch (error) {
                    setError(error.message || "Failed to load game data");
                } finally {
                    setLoading(false);
                }
            }
            fetchGame();
        }
    }, [id]);

    useEffect(() => {
        if (game?.tags?.length) {
            async function fetchRelatedGames() {
                try {
                    // This is a mock function - you'll need to implement the actual API
                    const related = await getRelatedGames(game.tags, game.id, 6);
                    setRelatedGamesList(related);
                } catch (error) {
                    console.error('Error fetching related games:', error);
                }
            }
            fetchRelatedGames();
        }
    }, [game]);

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime(Math.floor((new Date() - startTime) / 1000 / 60)); // Convert to minutes
        }, 1000);

        return () => clearInterval(timer);
    }, [startTime]);

    const handleShare = async () => {
        if (!game) return;

        try {
            if (navigator.share) {
                await navigator.share({
                    title: game.gameName,
                    text: game.question,
                    url: window.location.href
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                // You would want to add a toast notification here
                console.log('Link copied to clipboard!');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    const handleVoteSubmit = async (e) => {
        e.preventDefault();

        console.log({
            gameId: id,
            vote,
            difficultyVote,
            timeSpent: elapsedTime,
        });
    };

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

    const backgroundVariants = {
        question: {
            backgroundColor: '#f3f4f6',
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
        },
        answer: {
            backgroundColor: '#000000',
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="container mx-auto px-4 py-8 flex-grow">
                    <Card>
                        <Skeleton className="h-48 sm:h-64 w-full" />
                        <CardContent className="p-4 sm:p-6">
                            <Skeleton className="h-8 w-3/4 mb-4" />
                            <Skeleton className="h-48 w-full mb-4" />
                            <div className="flex gap-2 mb-4">
                                {[1, 2].map((i) => (
                                    <Skeleton key={i} className="h-6 w-20" />
                                ))}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <Skeleton key={i} className="h-6" />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !game) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
                    <Alert variant="destructive">
                        <AlertDescription>{error || "Game not found"}</AlertDescription>
                    </Alert>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <TextureBackground />
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
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
                            <h1 className="text-base sm:text-lg md:text-xl font-bold text-primary">{game.gameName}</h1>
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
                                <span>Difficulty: {game.difficulty || 'N/A'}/10</span>
                            </div>
                            <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-500" />
                                <span>Rating: {game.rating || 'N/A'}%</span>
                            </div>
                            <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-500" />
                                <span>Duration: {game.duration || 'N/A'} min</span>
                            </div>
                            <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" />
                                <span>{game.date ? new Date(game.date * 1000).toLocaleDateString('en-US', {
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
                            {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
                        </Button>
                    </CardContent>
                </Card>

                <Card className="mt-8 mb-8">
                    <CardContent className="p-4 sm:p-6">
                        <form onSubmit={handleVoteSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-base sm:text-lg font-semibold">Did you like this game?</h3>
                                <RadioGroup value={vote} onValueChange={setVote} className="flex gap-4">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="yes" />
                                        <Label htmlFor="yes">Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="no" />
                                        <Label htmlFor="no">No</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-base sm:text-lg font-semibold">How difficult was it?</h3>
                                <RadioGroup value={difficultyVote} onValueChange={setDifficultyVote} className="flex flex-wrap gap-4">
                                    {['easy', 'medium', 'hard', 'knew-answer'].map((level) => (
                                        <div key={level} className="flex items-center space-x-2">
                                            <RadioGroupItem value={level} id={level} />
                                            <Label htmlFor={level}>
                                                {level === 'knew-answer' ? 'Knew the answer' : level.charAt(0).toUpperCase() + level.slice(1)}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-base sm:text-lg font-semibold">Time spent on this puzzle</h3>
                                <div className="text-sm sm:text-base">
                                    {elapsedTime} {elapsedTime === 1 ? 'minute' : 'minutes'}
                                </div>
                            </div>

                            <Button type="submit" disabled={!vote || !difficultyVote}>
                                Submit Vote
                            </Button>
                        </form>
                    </CardContent>
                </Card>

                <RelatedGames
                    currentGame={game}
                    relatedGames={relatedGamesList}
                />
            </main>
            <Footer />
        </div>
    );
}