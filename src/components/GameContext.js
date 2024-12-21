"use client"
import React, { createContext, useState, useContext, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import gamesData from '@/data/games.json'

const ITEMS_PER_PAGE = 12 

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Initialize state from URL parameters or defaults
  const [games] = useState(gamesData)
  const [filteredGames, setFilteredGames] = useState(gamesData) // Initialize with all games
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [activeFilters, setActiveFilters] = useState(searchParams.get('filters')?.split(',').filter(Boolean) || [])
  const [sortOrder, setSortOrder] = useState(searchParams.get('sort') || 'popularity')
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1)

  // Map difficulty levels to game difficulty ranges
  const getDifficultyRange = (difficultyLevel) => {
    switch(difficultyLevel) {
      case 'easy': return [1, 3];
      case 'medium': return [4, 7];
      case 'hard': return [8, 10];
      default: return null;
    }
  }

  // Filter and sort games
  useEffect(() => {
    let filtered = [...games]

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(game => 
        game.gameName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.question.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply tag and difficulty filters
    if (activeFilters.length > 0) {
      filtered = filtered.filter(game => {
        return activeFilters.every(filter => {
          // Check if it's a difficulty filter
          const difficultyRange = getDifficultyRange(filter)
          if (difficultyRange) {
            const gameDifficulty = game.difficuly || game.difficulty
            return gameDifficulty >= difficultyRange[0] && gameDifficulty <= difficultyRange[1]
          }
          // Otherwise, treat it as a tag filter
          return game.tags.includes(filter)
        })
      })
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'newest':
          return b.date - a.date
        case 'oldest':
          return a.date - b.date
        case 'rating':
          return b.rating - a.rating
        case 'easy-first':
          return (a.difficuly || a.difficulty) - (b.difficuly || b.difficulty)
        case 'hard-first':
          return (b.difficuly || b.difficulty) - (a.difficuly || a.difficulty)
        default: // popularity
          return b.rating - a.rating
      }
    })

    setFilteredGames(filtered)
  }, [games, searchTerm, activeFilters, sortOrder])

  // Update URL when filters change
  useEffect(() => {
    updateURL({
      search: searchTerm,
      filters: activeFilters.join(','),
      sort: sortOrder,
      page: currentPage
    })
  }, [searchTerm, activeFilters, sortOrder, currentPage])

  const updateURL = (updates) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value.length > 0) {
        current.set(key, value)
      } else {
        current.delete(key)
      }
    })
    
    const search = current.toString()
    const newURL = `${window.location.pathname}${search ? `?${search}` : ''}`
    router.push(newURL, { scroll: false })
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE)
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <GameContext.Provider value={{
      games,
      filteredGames: paginatedGames,
      totalGames: filteredGames.length,
      searchTerm,
      setSearchTerm,
      activeFilters,
      setActiveFilters,
      sortOrder,
      setSortOrder,
      currentPage,
      setCurrentPage,
      totalPages,
      ITEMS_PER_PAGE
    }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameProvider')
  }
  return context
}