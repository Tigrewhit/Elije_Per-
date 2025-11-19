import React from 'react'
import { useLocation } from 'react-router-dom'
import Tutorial from './Tutorial'
import { useTranslation } from 'react-i18next'

function Countdown({target}){
  const { t } = useTranslation()
  const [left, setLeft] = React.useState({})
  React.useEffect(()=>{
    function update(){
      const now = new Date()
      // Fecha objetivo: Domingo 12 de abril de 2026, 07:00 AM hora de Perú (UTC-5)
      const targetDate = new Date('2026-04-12T07:00:00-05:00')
      
      const diff = targetDate.getTime() - now.getTime()
      
      if (diff > 0) {
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24))
        const months = Math.floor(totalDays / 30)
        const days = totalDays % 30
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        
        setLeft({months, days, hours, minutes})
      } else {
        setLeft({months: 0, days: 0, hours: 0, minutes: 0})
      }
    }
    update()
    const t = setInterval(update, 1000)
    return ()=>clearInterval(t)
  },[target])
  return (
    <div style={{display:'flex',gap:8,alignItems:'center'}}>
      <div style={{display:'flex',gap:8}}>
        <div style={{background:'#fff',padding:8,borderRadius:8,color:'#003770',border:`2px solid #cfe8ff`,minWidth:56,textAlign:'center'}}>
          <div style={{fontSize:14,fontWeight:700}}>{String(left.months ?? 0).padStart(2, '0')}</div>
          <div style={{fontSize:10,color:'#6b7280'}}>Meses</div>
        </div>
        <div style={{background:'#fff',padding:8,borderRadius:8,color:'#003770',border:`2px solid #cfe8ff`,minWidth:56,textAlign:'center'}}>
          <div style={{fontSize:14,fontWeight:700}}>{String(left.days ?? 0).padStart(2, '0')}</div>
          <div style={{fontSize:10,color:'#6b7280'}}>{t('header.countdown.days')}</div>
        </div>
        <div style={{background:'#fff',padding:8,borderRadius:8,color:'#003770',border:`2px solid #cfe8ff`,minWidth:56,textAlign:'center'}}>
          <div style={{fontSize:14,fontWeight:700}}>{String(left.hours ?? 0).padStart(2, '0')}</div>
          <div style={{fontSize:10,color:'#6b7280'}}>{t('header.countdown.hours')}</div>
        </div>
        <div style={{background:'#fff',padding:8,borderRadius:8,color:'#003770',border:`2px solid #cfe8ff`,minWidth:56,textAlign:'center'}}>
          <div style={{fontSize:14,fontWeight:700}}>{String(left.minutes ?? 0).padStart(2, '0')}</div>
          <div style={{fontSize:10,color:'#6b7280'}}>{t('header.countdown.minutes')}</div>
        </div>
      </div>
    </div>
  )
}

export default function Header({online, serviceWorkerReady}){
  const target = React.useMemo(()=> new Date('2026-04-12T07:00:00-05:00'),[])
  const location = useLocation()
  const [showTutorial, setShowTutorial] = React.useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = React.useState(false)
  const { t, i18n } = useTranslation()

  const languages = [
    { code: 'es', name: t('header.languages.spanish'), flag: '' },
    { code: 'en', name: t('header.languages.english'), flag: '' },
    { code: 'qu', name: t('header.languages.quechua'), flag: '' },
    { code: 'ay', name: t('header.languages.aymara'), flag: '' }
  ]

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
    setShowLanguageDropdown(false)
  }


  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageDropdown && !event.target.closest('.language-selector')) {
        setShowLanguageDropdown(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showLanguageDropdown])
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  
  const navItems = [
    { path: '/', label: 'Inicio', dataTutorial: 'nav-inicio' },
    { path: '/calendar', label: 'Calendario', dataTutorial: 'nav-calendario' },
    { path: '/candidates', label: 'Candidatos', dataTutorial: 'nav-candidatos' },
    { path: '/parties', label: 'Agrupaciones', dataTutorial: 'nav-agrupaciones' },
    { path: '/elector-info', label: 'Info Electores', dataTutorial: 'nav-mi-info' },
    { path: '/members-info', label: 'Miembros Mesa', dataTutorial: 'nav-miembros' },
    { path: '/news', label: 'Noticias', dataTutorial: 'nav-noticias' },
    { path: '/tutorial', label: 'Tutorial', dataTutorial: 'nav-tutorial', isTutorialButton: true }
  ]
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }
  
  const handleTutorialClick = (e) => {
    e.preventDefault()
    setShowTutorial(true)
  }
  
  const getNavItemStyle = (path, isLast = false) => ({
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'all 0.2s',
    backgroundColor: isActive(path) ? '#ffffff20' : 'transparent',
    border: isActive(path) ? '2px solid #ffffff40' : '2px solid transparent',
    fontWeight: isActive(path) ? '600' : '400',
    marginLeft: isLast ? 'auto' : '0',
    cursor: 'pointer'
  })
  
  return (
    <header>
      <div className="header-gradient" style={{padding: '12px 16px'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:1100,margin:'0 auto',flexWrap:'wrap'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <img src="/assets/logos/logo_elije_peru.jpg" alt="Elije Perú - Logo" className="w-10 h-10 rounded"/>
            <div>
              <div style={{fontWeight:800,fontSize:20}}>Elije Perú</div>
              <div style={{fontSize:12,opacity:0.9}}>Elecciones Generales 2026</div>
            </div>
          </div>
          <div style={{display:'flex',alignItems:'flex-end',gap:12,flexWrap:'nowrap'}}>
            <Countdown target={target} />
            <div className="language-selector" style={{fontSize:12, display:'flex', flexDirection:'column', alignItems:'center', gap:8, flexShrink: 0, position: 'relative'}}>
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                style={{
                  display:'inline-block',
                  padding:'1px 12px',
                  borderRadius:6,
                  background: '#3b82f6',
                  color:'#fff',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  width: '80px',
                  height: '20px',
                  textAlign: 'center',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '11px'
                }}
              >
                {t('header.translate')}
              </button>
              
              {showLanguageDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '40px',
                  right: '0',
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  zIndex: 1000,
                  minWidth: '140px'
                }}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 12px',
                        width: '100%',
                        border: 'none',
                        background: i18n.language === lang.code ? '#f3f4f6' : 'transparent',
                        color: '#374151',
                        fontSize: '14px',
                        cursor: 'pointer',
                        borderRadius: '6px'
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#f9fafb'}
                      onMouseLeave={(e) => e.target.style.background = i18n.language === lang.code ? '#f3f4f6' : 'transparent'}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
              
              <span style={{
                display:'inline-block',
                padding:'6px 12px',
                borderRadius:6,
                background: online ? '#16a34a' : '#6b7280',
                color:'#fff',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                width: '80px',
                textAlign: 'center'
              }}>
                {online ? t('header.status.online') : t('header.status.offline')}
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav style={{background:'#003770',color:'#fff',padding:'8px 0'}}>
        <div style={{maxWidth:1100,margin:'0 auto',display:'flex',gap:8,alignItems:'center',fontSize:14,flexWrap:'wrap',padding:'0 16px'}}>
          {navItems.map((item, index) => (
            <a 
              key={item.path}
              href={item.path}
              data-tutorial={item.dataTutorial}
              style={getNavItemStyle(item.path, index === navItems.length - 1)}
              onClick={item.isTutorialButton ? handleTutorialClick : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <Tutorial 
        isActive={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
    </header>
  )
}
