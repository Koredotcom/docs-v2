import { useEffect, useRef } from 'react'

export const HeroSection = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const hero = canvas.parentElement

    const NODE_COUNT = 90
    const CONNECT_DIST = 160
    const MOUSE_RADIUS = 140
    const MOUSE_FORCE = 1.2
    const MAX_SPEED = 4
    let nodes = []
    let raf = null
    let paused = false
    const mouse = { x: -9999, y: -9999, over: false }

    function resize() {
      canvas.width = hero.offsetWidth
      canvas.height = hero.offsetHeight
    }

    function initNodes() {
      nodes = Array.from({ length: NODE_COUNT }, () => {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        return { x, y, ox: x, oy: y, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5 }
      })
    }

    function isDark() {
      return document.documentElement.classList.contains('dark')
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const dark = isDark()
      const nodeRgb = '92,200,58'
      const lineRgb = '92,200,58'
      const nodeAlpha = dark ? 0.8 : 0.65
      const lineMaxAlpha = dark ? 0.42 : 0.32

      for (const n of nodes) {
        if (mouse.over) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * MOUSE_FORCE
            n.vx += (dx / dist) * force
            n.vy += (dy / dist) * force
          }
        } else {
          n.vx += (n.ox - n.x) * 0.012
          n.vy += (n.oy - n.y) * 0.012
        }
        n.vx *= 0.92
        n.vy *= 0.92
        const speed = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
        if (speed > MAX_SPEED) { n.vx = n.vx / speed * MAX_SPEED; n.vy = n.vy / speed * MAX_SPEED }
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = lineMaxAlpha * (1 - dist / CONNECT_DIST)
            ctx.strokeStyle = `rgba(${lineRgb},${alpha})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${nodeRgb},${nodeAlpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function loop() {
      if (!paused) draw()
      raf = requestAnimationFrame(loop)
    }

    function onMouseMove(e) {
      const rect = hero.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onMouseEnter() { mouse.over = true }
    function onMouseLeave() { mouse.over = false; mouse.x = -9999; mouse.y = -9999 }
    function onVisibility() { paused = document.hidden }
    function onResize() { resize(); initNodes() }

    resize()
    initNodes()
    loop()

    hero.addEventListener('mousemove', onMouseMove)
    hero.addEventListener('mouseenter', onMouseEnter)
    hero.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      hero.removeEventListener('mousemove', onMouseMove)
      hero.removeEventListener('mouseenter', onMouseEnter)
      hero.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="kore-hero" style={{ position: 'relative', overflow: 'hidden', padding: '75px 48px 54px', textAlign: 'center' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }} />
      <div className="kore-hero-overlay" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />
      <div className="kore-hero-bottom-fade" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '90px', pointerEvents: 'none', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2 }}>

        <div className="ka1 kore-hero-badge" style={{
          display: 'inline-flex', alignItems: 'center',
          border: '1px solid', borderRadius: '100px', padding: '4px 14px', marginBottom: '24px',
          fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
        }}>
          ✦ Enterprise AI Agent Platform
        </div>

        <div className="ka2">
          <h1 className="kore-h1 kore-hero-title" style={{
            fontSize: 'clamp(1.512rem, 2.835vw, 2.268rem)', fontWeight: 700,
            lineHeight: 1.08, margin: '0 0 20px', textWrap: 'balance',
          }}>
            Kore.ai Product Documentation
          </h1>
        </div>

        <div className="ka3">
          <p className="kore-subtext" style={{
            fontSize: '1.05rem',
            maxWidth: '480px', margin: '0 auto 0', lineHeight: 1.6,
          }}>
            Build and deploy AI agents at enterprise scale — quickly, securely, and flexibly.
          </p>
        </div>

      </div>
    </div>
  )
}
