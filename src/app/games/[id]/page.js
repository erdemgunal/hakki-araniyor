"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { getGameById } from "@/lib/getGameById";
import RelatedGames from "@/components/RelatedGames";
import { getRelatedGames } from "@/lib/getRelatedGames";
import VoteForm from '@/components/VoteForm';
import GameCard from "@/components/GameCard";
import ErrorAlert from "@/components/ui/error-alert";
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { addLastViewedGame } from '@/lib/lastViewedGames';
import LastViewedGames from '@/components/LastViewedGames'

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
                    addLastViewedGame(fetchedGame);
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

    if (loading) {
        return <LoadingSkeleton />;
    }

    if (error || !game) {
        return (
            <ErrorAlert error={error} />
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Head>
                <title>{game.gameName} | Hakkı Aranıyor</title>
                <meta name="description" content={`Bu evet/hayır bilmecesini çözebilir misiniz?: ${game.question}`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://hakki-araniyor.vercel.app/games/${id}`} />
                
                {/* OpenGraph metadata */}
                <meta property="og:title" content={`${game.gameName} | Hakkı Aranıyor`} />
                <meta property="og:description" content={`Bu evet/hayır bilmecesini çözebilir misiniz?: ${game.question}`} />
                <meta property="og:type" content="game" />
                <meta property="og:url" content={`https://hakki-araniyor.vercel.app/games/${id}`} />
                
                {/* Twitter metadata */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={`${game.gameName} | Hakkı Aranıyor`} />
                <meta name="twitter:description" content={`Bu evet/hayır bilmecesini çözebilir misiniz?: ${game.question}`} />
                
                {/* Structured data for search engines */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Game",
                        "name": game.gameName,
                        "description": game.question,
                        "genre": "Puzzle",
                        "keywords": game.tags?.join(", ")
                    })}
                </script>
            </Head>

            <main className="container mx-auto px-4 py-8 flex-grow">
                <GameCard game={game} handleShare={handleShare} showAnswer={showAnswer} setShowAnswer={setShowAnswer} textHeight={textHeight} />

                <VoteForm 
                    vote={vote}
                    setVote={setVote}
                    difficultyVote={difficultyVote}
                    setDifficultyVote={setDifficultyVote}
                    elapsedTime={elapsedTime}
                    onSubmit={handleVoteSubmit}
                />

                <RelatedGames
                    currentGame={game}
                    relatedGames={relatedGamesList}
                />
                <LastViewedGames />
            </main>
        </div>
    );
}