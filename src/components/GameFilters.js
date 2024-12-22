"use client"
import { useState } from 'react'
import { useGameContext } from './GameContext'
import { useRouter, useSearchParams } from 'next/navigation'
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
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleSearch = () => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))

        if (localSearchTerm) {
            current.set('search', localSearchTerm)
        } else {
            current.delete('search')
        }

        current.set('page', '1')

        const search = current.toString()
        const newURL = `${window.location.pathname}${search ? `?${search}` : ''}`
        router.push(newURL, { scroll: false })

        setSearchTerm(localSearchTerm)
    }

    const handleFilterChange = (filter) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()))
        const difficultyFilters = ['easy', 'medium', 'hard']
        let updatedFilters = [...activeFilters]

        if (difficultyFilters.includes(filter)) {
            updatedFilters = updatedFilters.filter(f => !difficultyFilters.includes(f))
            
            if (!activeFilters.includes(filter)) {
                updatedFilters.push(filter)
            }
        } else {
            if (updatedFilters.includes(filter)) {
                const index = updatedFilters.indexOf(filter)
                updatedFilters.splice(index, 1)
            } else {
                updatedFilters.push(filter)
            }
        }

        if (updatedFilters.length > 0) {
            current.set('filters', updatedFilters.join(','))
        } else {
            current.delete('filters')
        }

        current.set('page', '1')

        const search = current.toString()
        const newURL = `${window.location.pathname}${search ? `?${search}` : ''}`
        router.push(newURL, { scroll: false })

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

                    if (value) {
                        current.set('sort', value)
                    } else {
                        current.delete('sort')
                    }

                    current.set('page', '1')

                    const search = current.toString()
                    const newURL = `${window.location.pathname}${search ? `?${search}` : ''}`
                    router.push(newURL, { scroll: false })

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