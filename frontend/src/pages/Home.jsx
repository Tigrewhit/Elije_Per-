import React from 'react'

export default function Home(){
	return (
		<div style={{padding:'0 16px'}}>
			<section style={{maxWidth:1100,margin:'0 auto',display:'flex',gap:24,alignItems:'stretch',flexWrap:'wrap'}}>
				<div style={{flex:1,minWidth:'300px',background:'#003770',color:'#fff',padding:48,borderRadius:8,display:'flex',flexDirection:'column',justifyContent:'center'}}>
					<h1 style={{fontSize:48,margin:0,fontWeight:800}}>Elecciones Generales 2026</h1>
					<p style={{marginTop:16,color:'#e6f0fb',maxWidth:560}}>Todo lo que debes saber sobre las elecciones a realizarse el 12 de abril de 2026. Fechas oficiales, candidatos, propuestas y noticias verificadas.</p>
					<div style={{marginTop:24}}>
						<a href="/elector-info#video-tutorial" style={{display:'inline-block',background:'#d83a2a',color:'#fff',padding:'12px 20px',borderRadius:6,textDecoration:'none',fontWeight:700}}>Conoce la cédula</a>
						<a href="/elector-info" style={{display:'inline-block',marginLeft:12,background:'#fff',color:'#003770',padding:'12px 20px',borderRadius:6,textDecoration:'none',fontWeight:700}}>Cómo votar</a>
					</div>
				</div>
				<div style={{width:420,background:'#f3f4f6',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>
					<img src="/assets/logos/logo_elije_peru.jpg" alt="Elije Perú - Logo" style={{width:300,height:300,objectFit:'contain'}} />
				</div>
			</section>

			<main style={{maxWidth:1100,margin:'24px auto'}}>
				<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:16}}>
					<a href='/calendar' className="mobile-card mobile-btn touch-optimized" style={{background:'#fff',textDecoration:'none',color:'#2d3748',display:'flex',flexDirection:'column',alignItems:'center',padding:'24px',minHeight:'120px',justifyContent:'center'}}>
						<div style={{fontSize:'2rem',marginBottom:'8px'}}>📅</div>
						<div className="mobile-subtitle" style={{fontWeight:700,marginBottom:'4px',textAlign:'center'}}>Calendario</div>
						<div className="mobile-text" style={{textAlign:'center',fontSize:'0.85rem'}}>Fechas electorales</div>
					</a>
					<a href='/candidates' className="mobile-card mobile-btn touch-optimized" style={{background:'#fff',textDecoration:'none',color:'#2d3748',display:'flex',flexDirection:'column',alignItems:'center',padding:'24px',minHeight:'120px',justifyContent:'center'}}>
						<div style={{fontSize:'2rem',marginBottom:'8px'}}>👥</div>
						<div className="mobile-subtitle" style={{fontWeight:700,marginBottom:'4px',textAlign:'center'}}>Candidatos</div>
						<div className="mobile-text" style={{textAlign:'center',fontSize:'0.85rem'}}>Perfiles y propuestas</div>
					</a>
					<a href='/news' className="mobile-card mobile-btn touch-optimized" style={{background:'#fff',textDecoration:'none',color:'#2d3748',display:'flex',flexDirection:'column',alignItems:'center',padding:'24px',minHeight:'120px',justifyContent:'center'}}>
						<div style={{fontSize:'2rem',marginBottom:'8px'}}>📰</div>
						<div className="mobile-subtitle" style={{fontWeight:700,marginBottom:'4px',textAlign:'center'}}>Noticias</div>
						<div className="mobile-text" style={{textAlign:'center',fontSize:'0.85rem'}}>Fuentes verificadas</div>
					</a>
					<a href='/legal-framework' className="mobile-card mobile-btn touch-optimized" style={{background:'#fff',textDecoration:'none',color:'#2d3748',display:'flex',flexDirection:'column',alignItems:'center',padding:'24px',minHeight:'120px',justifyContent:'center'}}>
						<div style={{fontSize:'2rem',marginBottom:'8px'}}>⚖️</div>
						<div className="mobile-subtitle" style={{fontWeight:700,marginBottom:'4px',textAlign:'center'}}>Marco Legal</div>
						<div className="mobile-text" style={{textAlign:'center',fontSize:'0.85rem'}}>Normativa electoral</div>
					</a>
					<a href='/offline-status' className="mobile-card mobile-btn touch-optimized" style={{background:'#e8f4fd',textDecoration:'none',color:'#2d3748',display:'flex',flexDirection:'column',alignItems:'center',padding:'24px',minHeight:'120px',justifyContent:'center',border:'2px dashed #3b82f6'}}>
						<div style={{fontSize:'2rem',marginBottom:'8px'}}>📱</div>
						<div className="mobile-subtitle" style={{fontWeight:700,marginBottom:'4px',textAlign:'center',color:'#1e40af'}}>Prueba Offline</div>
						<div className="mobile-text" style={{textAlign:'center',fontSize:'0.75rem',color:'#3730a3'}}>Test funcionalidad PWA</div>
					</a>
				</div>
			</main>
		</div>
	)
}