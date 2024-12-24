export const metadata = {
  title: 'Hakkı Erdem - Eğlenceli Karar Verme Oyunu',
  description: 'Eğlenceli Hakkı Aranıyor karar verme oyununu oynayın. Sorularınızın cevaplarını bulun ve interaktif oyun platformumuz ile seçimler yapın.',
  keywords: 'evet hayır oyunu, karar verme oyunu, interaktif oyun, soru cevaplama',
  openGraph: {
    title: 'Hakkı Erdem - Eğlenceli Karar Verme Oyunu',
    description: 'Eğlenceli Hakkı Aranıyor karar verme oyununu oynayın.',
    type: 'website',
  },
}

import GameFilters from '@/components/GameFilters'
import GameGrid from '@/components/GameGrid'
import Categories from '@/components/Categories'
import { GameProvider } from '@/components/GameContext'
import LastViewedGames from '@/components/LastViewedGames'

export default function Home() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-background text-foreground">
        <main className="container mx-auto px-4 py-8" role="main">
          <h1 className="sr-only">Hakkı Erdem - Interactive Decision Making</h1>
          <section aria-label="Game Controls">
            <GameFilters />
          </section>
          <section aria-label="Game Board">
            <GameGrid />
          </section>
          <section aria-label="Game Categories">
            <Categories />
          </section>
          <section aria-label="Recently Viewed">
            <LastViewedGames />
          </section>
        </main>
      </div>
    </GameProvider>
  )
}

