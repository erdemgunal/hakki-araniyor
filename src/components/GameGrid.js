"use client"
import { useGameContext } from './GameContext'
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, BarChart, Calendar } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function GameGrid() {
  const {
    filteredGames,
    totalGames,
    currentPage,
    setCurrentPage,
    totalPages,
    ITEMS_PER_PAGE
  } = useGameContext()

  const pathname = usePathname() || '/';  // Get current pathname
  const searchParams = useSearchParams()  // Get query params
  const router = useRouter()  // Use router for navigation

  // Ensure pathname is a string
  const handlePageChange = (page) => {
    setCurrentPage(page)
    // Update the URL with the new page number
    router.push({
      pathname: '/',  // Default to '/' if pathname is undefined
      query: { ...Object.fromEntries(searchParams), page: page } // Update page query parameter
    })
  }

  if (!filteredGames.length) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">Kriterlerinize uygun oyun bulunamadı.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-6">
        {filteredGames.map(game => (
          <Link href={`/games/${game.id}`} key={game.id} passHref>
            <Card key={game.id} className="flex flex-col h-full overflow-hidden shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative flex flex-col h-full" style={{ background: `linear-gradient(135deg, ${game.gameColor} 0%, rgba(255,255,255,0) 100%)` }}>
                <div className="flex flex-row h-64">
                  <div className="w-1/3 relative">
                    <Image
                      src={`/assets/${game.image}`}
                      alt={game.gameName}
                      className="object-contain w-full h-full p-4"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="w-2/3 flex flex-col bg-white bg-opacity-75">
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 line-clamp-1">{game.gameName}</h3>
                      <p className="text-gray-700 mb-3 text-sm line-clamp-4">{game.question}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {game.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    </div>
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
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 mb-6 px-4 sm:px-6 space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-600 text-center sm:text-left w-full sm:w-auto">
            Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, totalGames)} of {totalGames} games
          </div>

          <div className="flex justify-center gap-2 flex-wrap w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm w-24 sm:w-auto"
            >
              Previous
            </Button>

            <div className="flex gap-2 flex-wrap justify-center">
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1
                const isCurrentPage = currentPage === page

                const shouldShowPage =
                  page === 1 ||
                  page === totalPages ||
                  page === currentPage ||
                  page === currentPage - 1 ||
                  page === currentPage + 1

                const isEllipsisBefore =
                  page === currentPage - 2 && page > 1
                const isEllipsisAfter =
                  page === currentPage + 2 && page < totalPages

                if (shouldShowPage) {
                  return (
                    <Button
                      key={page}
                      variant={isCurrentPage ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className="px-3 py-1 text-sm"
                    >
                      {page}
                    </Button>
                  )
                }

                if (isEllipsisBefore || isEllipsisAfter) {
                  return <span key={page} className="text-gray-500 px-2">...</span>
                }

                return null
              })}
            </div>

            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm w-24 sm:w-auto"
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  )
}