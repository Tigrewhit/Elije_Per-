import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useOnlineStatus } from './hooks/useOnlineStatus'
import OfflineLoader from './components/OfflineLoader'
import OfflineForcer from './components/OfflineForcer'
import PredictiveCacheProvider from './hooks/usePredictiveCache'
import './responsive.css'
import './styles/mobile-optimized.css'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Candidates from './pages/Candidates'
import News from './pages/News'
import Tutorial from './pages/Tutorial'
import Header from './components/Header'
import Candidate from './pages/Candidate.jsx'
import Estaciones from './pages/Estaciones'
import Estacion from './pages/Estacion'
import Parties from './pages/Parties'
import Party from './pages/Party'
import Comparator from './components/Comparator'
import Incidents from './pages/Incidents'
import ElectorInfo from './pages/ElectorInfo'
import MembersInfo from './pages/MembersInfo'
import LegalFramework from './pages/LegalFramework'
import OfflineStatus from './pages/OfflineStatus'

export default function App(){
  const { 
    isOnline, 
    serviceWorkerReady 
  } = useOnlineStatus()
  
  const [showLoader, setShowLoader] = React.useState(true)
  const [isFirstVisit, setIsFirstVisit] = React.useState(false)

  React.useEffect(() => {
    // Verificar si es la primera visita
    const hasVisited = localStorage.getItem('elige-peru-visited')
    if (!hasVisited) {
      setIsFirstVisit(true)
      localStorage.setItem('elige-peru-visited', 'true')
    } else {
      // Si ya visitó antes, no mostrar loader de precarga
      setShowLoader(false)
    }
  }, [])

  // Detectar dispositivos móviles y mostrar PWA install prompt
  React.useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasShownPWA = localStorage.getItem('elige-peru-pwa-shown');
    
    let deferredPrompt;
    
    // Escuchar evento beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });
    
    if (isMobile && !hasShownPWA) {
      // Mostrar notificación PWA después de 3 segundos
      setTimeout(() => {
        const showPWANotification = () => {
          const notification = document.createElement('div');
          notification.innerHTML = `
            <div id="pwa-install-banner" style="
              position: fixed;
              top: 80px;
              left: 50%;
              transform: translateX(-50%);
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 20px;
              border-radius: 12px;
              box-shadow: 0 10px 25px rgba(0,0,0,0.2);
              z-index: 1000;
              text-align: center;
              font-weight: bold;
              animation: slideDown 0.5s ease-out;
              max-width: 320px;
              width: 90%;
            ">
              <div style="margin-bottom: 12px; font-size: 18px;">📱 ¡Instala Elige Perú!</div>
              <div style="font-size: 14px; margin-bottom: 15px; opacity: 0.9;">
                Añade la app a tu pantalla de inicio para acceso rápido
              </div>
              <div style="display: flex; gap: 10px; justify-content: center;">
                <button id="pwa-install-btn" style="
                  background: white;
                  color: #667eea;
                  border: none;
                  padding: 8px 16px;
                  border-radius: 6px;
                  font-weight: bold;
                  cursor: pointer;
                ">Instalar</button>
                <button id="pwa-close-btn" style="
                  background: rgba(255,255,255,0.2);
                  color: white;
                  border: none;
                  padding: 8px 16px;
                  border-radius: 6px;
                  cursor: pointer;
                ">Ahora no</button>
              </div>
            </div>
            <style>
              @keyframes slideDown {
                from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
                to { transform: translateX(-50%) translateY(0); opacity: 1; }
              }
            </style>
          `;
          
          document.body.appendChild(notification);
          
          // Botón instalar
          document.getElementById('pwa-install-btn').addEventListener('click', async () => {
            if (deferredPrompt) {
              deferredPrompt.prompt();
              const { outcome } = await deferredPrompt.userChoice;
              deferredPrompt = null;
            } else {
              // Mostrar instrucciones manuales
              alert('Para instalar: Toca el menú del navegador (⋮) → "Añadir a la pantalla de inicio"');
            }
            notification.remove();
            localStorage.setItem('elige-peru-pwa-shown', 'true');
          });
          
          // Botón cerrar
          document.getElementById('pwa-close-btn').addEventListener('click', () => {
            notification.remove();
            localStorage.setItem('elige-peru-pwa-shown', 'true');
          });
          
          // Auto-remover después de 10 segundos
          setTimeout(() => {
            if (notification.parentNode) {
              notification.remove();
              localStorage.setItem('elige-peru-pwa-shown', 'true');
            }
          }, 10000);
        };
        
        showPWANotification();
      }, 3000);
    }
  }, []);

  return (
    <PredictiveCacheProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Loader de Precarga para Primera Visita */}
        {isFirstVisit && showLoader && (
          <OfflineLoader 
            onComplete={() => setShowLoader(false)}
          />
        )}
        
        <Header 
          online={isOnline} 
          serviceWorkerReady={serviceWorkerReady}
        />
        <OfflineForcer />
        <main className="flex-1 container-mobile" style={{padding: '16px 0', maxWidth: '100%', width: '100%'}}>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/candidates" element={<Candidates/>}/>
          <Route path="/candidates/:id" element={<Candidate/>}/>
          <Route path="/estaciones" element={<Estaciones/>}/>
          <Route path="/estaciones/:id" element={<Estacion/>}/>
          <Route path="/parties" element={<Parties/>}/>
          <Route path="/parties/:id" element={<Party/>}/>
          <Route path="/compare" element={<Comparator/>}/>
          <Route path="/incidents" element={<Incidents/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/tutorial" element={<Tutorial/>}/>
          <Route path="/elector-info" element={<ElectorInfo/>}/>
          <Route path="/members-info" element={<MembersInfo/>}/>
          <Route path="/legal-framework" element={<LegalFramework/>}/>
          <Route path="/offline-status" element={<OfflineStatus/>}/>
        </Routes>
      </main>
      </div>
    </PredictiveCacheProvider>
  )
}
