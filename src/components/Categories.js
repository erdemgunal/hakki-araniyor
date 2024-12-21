"use client"
import { useGameContext } from './GameContext'
import { Badge } from "@/components/ui/badge"

export default function Categories() {
    const { games, activeFilters, setActiveFilters } = useGameContext()

    // Get unique tags from all games
    const allTags = Array.from(new Set(games.flatMap(game => game.tags)))

    const handleTagClick = (tag) => {
        setActiveFilters(prev => {
            // If tag already exists, remove it; otherwise, add it
            return prev.includes(tag)
                ? prev.filter(filter => filter !== tag)
                : [...prev, tag]
        })
    }

    return (
        <div className="w-full rounded-md border p-2 sm:p-4">
            <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                    <Badge
                        key={tag}
                        variant={activeFilters.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer flex items-center justify-center ${
                            activeFilters.includes(tag)
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-primary/10"
                        }`}
                        onClick={() => handleTagClick(tag)}
                    >
                        <span className="px-2">{tag}</span>
                    </Badge>
                ))}
            </div>
        </div>
    )
}