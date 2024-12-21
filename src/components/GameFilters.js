"use client"
import { useState } from 'react'
import { useGameContext } from './GameContext'
import { useRouter, useSearchParams } from 'next/navigation' // Import for URL handling
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
    const router = useRouter() // Access router for URL updates
    const searchParams = useSearchParams() // Access current URL parameters

    const handleSearch = () => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))

        // Update the search term in the URL
        if (localSearchTerm) {
            current.set('search', localSearchTerm)
        } else {
            current.delete('search')
        }

        // Reset page to 1
        current.set('page', '1')

        // Push the updated URL
        const search = current.toString()
        const newURL = `${window.location.pathname}${search ? `?${search}` : ''}`
        router.push(newURL, { scroll: false })

        // Update the context
        setSearchTerm(localSearchTerm)
    }

    const handleFilterChange = (filter) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))
        const difficultyFilters = ['easy', 'medium', 'hard']
        let updatedFilters = [...activeFilters]

        // If clicking on a difficulty filter
        if (difficultyFilters.includes(filter)) {
            // Remove all existing difficulty filters
            updatedFilters = updatedFilters.filter(f => !difficultyFilters.includes(f))
            
            // Add new filter only if it's not the one we just removed
            if (!activeFilters.includes(filter)) {
                updatedFilters.push(filter)
            }
        } else {
            // Handle non-difficulty filters (if you have any) as before
            if (updatedFilters.includes(filter)) {
                const index = updatedFilters.indexOf(filter)
                updatedFilters.splice(index, 1)
            } else {
                updatedFilters.push(filter)
            }
        }

        // Update the filters in the URL
        if (updatedFilters.length > 0) {
            current.set('filters', updatedFilters.join(','))
        } else {
            current.delete('filters')
        }

        // Reset page to 1
        current.set('page', '1')

        const search = current.toString()
        const newURL = `${window.location.pathname}${search ? `?${search}` : ''}`
        router.push(newURL, { scroll: false })

        // Update the context
        setActiveFilters(updatedFilters)
    }

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
                    {[
                        { value: 'easy', label: 'Kolay' },
                        { value: 'medium', label: 'Orta' },
                        { value: 'hard', label: 'Zor' },
                    ].map(option => (
                        <Button
                            key={option.value}
                            variant={activeFilters.includes(option.value) ? "default" : "outline"}
                            onClick={() => handleFilterChange(option.value)}
                        >
                            {option.label}
                        </Button>
                    ))}
                </div>
                <Select value={sortOrder} onValueChange={(value) => {
                    const current = new URLSearchParams(Array.from(searchParams.entries()))

                    // Update sort order in the URL
                    if (value) {
                        current.set('sort', value)
                    } else {
                        current.delete('sort')
                    }

                    // Reset page to 1
                    current.set('page', '1')

                    // Push the updated URL
                    const search = current.toString()
                    const newURL = `${window.location.pathname}${search ? `?${search}` : ''}`
                    router.push(newURL, { scroll: false })

                    // Update the context
                    setSortOrder(value)
                }}>
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