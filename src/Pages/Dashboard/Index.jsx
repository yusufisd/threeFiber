import React, { useState, useEffect } from 'react'
import Layout from '../Layout'
import Scene from '../../Components/Scene'
import './Dashboard.css'

export default function Index() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll fazlarını belirle
  const phase1 = 500
  const phase2 = 1500
  const phase3 = 2500

  // Mevcut fazı belirle
  const getPhaseClass = () => {
    if (scrollY < phase1) return 'phase-value'
    if (scrollY < phase2) return 'phase-value phase-right'
    if (scrollY < phase3) return 'phase-value phase-left'
    return 'phase-value phase-fixed'
  }

  const getPhaseText = () => {
    if (scrollY < phase1) return 'Orta'
    if (scrollY < phase2) return 'Sağa'
    if (scrollY < phase3) return 'Sola'
    return 'Sabit'
  }

  return (
    <Layout>
      <Scene scrollY={scrollY} />
      
      <div className="dashboard-container">
        {/* Hero Section - FAZ 1 */}
        <section className="hero-section">
          <div>
            <h1 className="hero-title">
              Shattered Dreams
            </h1>
            <p className="hero-subtitle">
              Cam parçacıkları arasında kaybolmuş anılar
            </p>
            <p className="hero-description">
              Scroll yaparak cam parçacıklarını keşfedin...
            </p>
          </div>
        </section>

        {/* Story Section 1 */}
        <section className="story-section">
          <div className="story-container">
            <h2 className="story-title">
              Kırılmanın Hikayesi
            </h2>
            <p className="story-text">
              Bir zamanlar bütün olan şey, artık parçalar halinde hayata devam ediyor. 
              Her bir fragment, kendi içinde bir evren barındırır. Işık bu parçacıklarda 
              kırılır, büküllür ve yeniden doğar.
            </p>
            <p className="story-quote">
              Kırılmak, bazen en güzel şekillenmedir...
            </p>
          </div>
        </section>

        {/* Zoom Section - FAZ 2 */}
        <section className="zoom-section">
          <div className="zoom-container">
            <h2 className="zoom-title">
              Yaklaşım
            </h2>
            <p className="zoom-text">
              Cam parçacıkları size yaklaşıyor. Her bir fragment, kendi hikayesini anlatır. 
              Işığın yansımasında geçmişin izleri görülür. Detaylar netleşmeye başlar.
            </p>
            <p className="zoom-quote">
              Cam sağa doğru dans ederken...
            </p>
          </div>
        </section>

        {/* Reflection Section */}
        <section className="reflection-section">
          <div className="reflection-container">
            <h2 className="reflection-title">
              Yansımaların Dansı
            </h2>
            <p className="reflection-text">
              Her cam parçası, sonsuz yansımalar içerir. Işık bu yüzeylerde oyun oynar, 
              gölgeler ve parıltılar yaratır. Sağa doğru hareket ederken, her açı yeni 
              bir manzara sunar.
            </p>
            <div className="reflection-grid">
              <div className="reflection-card">
                <h4 className="reflection-card-title">
                  Işık Oyunları
                </h4>
                <p className="reflection-card-text">
                  Cam yüzeylerinde kırılan ışığın büyüsü
                </p>
              </div>
              <div className="reflection-card">
                <h4 className="reflection-card-title">
                  Gölge Dansı
                </h4>
                <p className="reflection-card-text">
                  Karanlık ve aydınlık arasındaki uyum
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Left Movement Section - FAZ 3 */}
        <section className="left-section">
          <div className="left-container">
            <h2 className="left-title">
              Geçiş
            </h2>
            <p className="left-text">
              Şimdi cam parçacıkları sola doğru süzülüyor. Büyüleyici dans devam ediyor. 
              Her hareket, yeni bir perspektif açıyor. Görünüş açısı değişiyor.
            </p>
            <p className="left-quote">
              Sola doğru büyülü yolculuk...
            </p>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="transformation-section">
          <div className="transformation-container">
            <h2 className="transformation-title">
              Metamorfoz
            </h2>
            <p className="transformation-text">
              Cam parçacıkları şimdi sola doğru süzülürken bambaşka bir form alıyor. 
              Kırılma, aslında bir dönüşüm süreciydi. Eski şekil artık hatırlanmıyor, 
              yeni güzellik ortaya çıkıyor.
            </p>
            <blockquote className="transformation-blockquote">
              "Kırılmak, bazen en güzel şekillenmedir."
            </blockquote>
          </div>
        </section>

        {/* Gallery Section - FAZ 4 */}
        <section className="gallery-section">
          <div className="gallery-container">
            <h2 className="gallery-title">
              Işık ve Gölge Koleksiyonu
            </h2>
            <div className="gallery-grid">
              <div className="gallery-card">
                <h3 className="gallery-card-title">
                  Kırılma Anı
                </h3>
                <p className="gallery-card-text">
                  Cam kırıldığı anda, ses dalgaları hava moleküllerini titreştirir. 
                  Bu titreşim, sadece ses değil, aynı zamanda güzelliğin de doğduğu andır.
                </p>
              </div>
              <div className="gallery-card">
                <h3 className="gallery-card-title">
                  Yansıma
                </h3>
                <p className="gallery-card-text">
                  Her cam parçası, kendi içinde sonsuz yansımalar barındırır. 
                  Işık, bu yansımalarda dans ederek büyülü bir atmosfer yaratır.
                </p>
              </div>
              <div className="gallery-card">
                <h3 className="gallery-card-title">
                  Dönüşüm
                </h3>
                <p className="gallery-card-text">
                  Kırılmış cam, artık eski formunu hatırlamaz. 
                  Yeni bir varlık, yeni bir hikaye, yeni bir güzellik haline gelir.
                </p>
              </div>
            </div>
            
            {/* Yeni kartlar */}
            <div className="gallery-grid-new">
              <div className="gallery-card">
                <h3 className="gallery-card-title">
                  Kristal Harmoni
                </h3>
                <p className="gallery-card-text">
                  Parçacıklar arasındaki uyum, kendiliğinden ortaya çıkar. 
                  Kaos içinde düzen, kırılma içinde bütünlük bulunur.
                </p>
              </div>
              <div className="gallery-card">
                <h3 className="gallery-card-title">
                  Ruhun Yolculuğu
                </h3>
                <p className="gallery-card-text">
                  Her fragment, ruhun bir parçasını temsil eder. 
                  Kırılma, aslında ruhun özgürleşme sürecidir.
                </p>
              </div>
              <div className="gallery-card">
                <h3 className="gallery-card-title">
                  Sonsuz Döngü
                </h3>
                <p className="gallery-card-text">
                  Kırılma ve yeniden şekillenme, doğanın sonsuz döngüsüdür. 
                  Son aynı zamanda yeni bir başlangıçtır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <div className="philosophy-container">
            <h2 className="philosophy-title">
              Kırılmanın Felsefesi
            </h2>
            <p className="philosophy-text">
              Japon sanatında "Kintsugi" - kırık camı altınla tamir etme sanatı vardır. 
              Kırılma izleri gizlenmez, tersine vurgulanır. Çünkü kırılmak, nesnenin 
              hikayesinin en güzel parçasıdır.
            </p>
            
            <div className="philosophy-grid">
              <div className="philosophy-left">
                <h3 className="philosophy-section-title">
                  Geçmişin İzleri
                </h3>
                <p className="philosophy-section-text">
                  Her kırık çizgi, yaşanmış bir anıyı temsil eder. 
                  Acı da güzellik de aynı yüzeyde buluşur.
                </p>
              </div>
              <div className="philosophy-right">
                <h3 className="philosophy-section-title">
                  Geleceğin Vaadi
                </h3>
                <p className="philosophy-section-text">
                  Kırılan şey, yeniden şekillenme fırsatı yakalar. 
                  Daha güçlü, daha güzel, daha anlamlı olarak doğar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Section */}
        <section className="interactive-section">
          <h2 className="interactive-title">
            Etkileşimli Deneyim
          </h2>
          <p className="interactive-text">
            Scroll yaparak cam parçacıklarının fazlarını keşfedin
          </p>
          <div className="interactive-grid">
            <div className="interactive-card">
              <h4 className="interactive-card-title">
                Mevcut Faz
              </h4>
              <p className={`interactive-card-value ${getPhaseClass()}`}>
                {getPhaseText()}
              </p>
            </div>
            <div className="interactive-card">
              <h4 className="interactive-card-title">
                Scroll Pozisyonu
              </h4>
              <p className="interactive-card-value">
                {Math.round(scrollY)}px
              </p>
            </div>
            <div className="interactive-card">
              <h4 className="interactive-card-title">
                Toplam Bölüm
              </h4>
              <p className="interactive-card-value total-sections">
                8
              </p>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="final-section">
          <div className="final-container">
            <h2 className="final-title">
              Yolculuğun Sonu
            </h2>
            <p className="final-text">
              Cam parçacıklarının dansı sona erdi. Her fragment, yerini aldı. 
              Kırılma artık bir hikaye haline geldi. Güzellik, acıdan doğdu.
            </p>
            <p className="final-quote">
              "En güzel şeyler, kırılmanın ardından doğar..."
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <section className="footer-section">
          <p className="footer-text">
            © 2024 Shattered Dreams - Three.js Fiber ile geliştirilmiştir
          </p>
        </section>
      </div>
    </Layout>
  )
}
