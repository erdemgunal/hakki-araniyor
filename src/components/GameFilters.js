"use client"
import { useState, useEffect } from 'react'
import { useGameContext } from './GameContext'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function GameFilters() {
    const { setSearchTerm, activeFilters, setActiveFilters, sortOrder, setSortOrder } = useGameContext()
    const [localSearchTerm, setLocalSearchTerm] = useState('')

    const handleSearch = () => {
        setSearchTerm(localSearchTerm)
    }

    const handleFilterChange = (value) => {
        setActiveFilters(prev => {
            // Allow only one difficulty filter at a time
            const difficultyFilters = ['easy', 'medium', 'hard']
            if (difficultyFilters.includes(value)) {
                return prev.includes(value) ? [] : [value]
            }
            return prev.includes(value)
                ? prev.filter(filter => filter !== value)
                : [...prev, value]
        })
    }

    // Difficulty options with their display names
    const difficultyOptions = [
        { value: 'easy', label: 'Kolay' },
        { value: 'medium', label: 'Orta' },
        { value: 'hard', label: 'Zor' }
    ]

    return (
        <div className="mb-8 space-y-4">
            <div className="flex space-x-2">
                <Input
                    type="text"
                    placeholder="Oyun arama..."
                    value={localSearchTerm}
                    onChange={(e) => setLocalSearchTerm(e.target.value)}
                    className="flex-grow"
                />
                <Button onClick={handleSearch}>Ara</Button>
            </div>
            <div className="flex space-x-2">
                <div className="flex gap-2">
                    {difficultyOptions.map(option => (
                        <Button
                            key={option.value}
                            variant={activeFilters.includes(option.value) ? "default" : "outline"}
                            onClick={() => handleFilterChange(option.value)}
                        >
                            {option.label}
                        </Button>
                    ))}
                </div>
                <Select value={sortOrder} onValueChange={(value) => setSortOrder(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Şuna göre sırala" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="popularity">Popülerlik</SelectItem>
                        <SelectItem value="newest">En Yeni</SelectItem>
                        <SelectItem value="oldest">En Eski</SelectItem>
                        <SelectItem value="rating">Değerlendirmeye göre</SelectItem>
                        <SelectItem value="easy-first">Önce Kolay</SelectItem>
                        <SelectItem value="hard-first">Önce Zor</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}