# Propuesta 01 - Liquid Hero Design

Esta es la versión original con el efecto de fondo líquido que sigue al cursor, cuadrícula sutil y tipografía centrada.

## HTML
```html
<section id="hero">
    <div id="liquid-bg" class="hero-liquid-bg"></div>
    <div class="container hero-container">
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
            <span class="reveal-item reveal-delay-1" style="color: var(--primary); font-weight: 600; text-transform: uppercase; letter-spacing: 4px; font-size: 0.75rem; margin-bottom: 24px; display: block;">Especialista en Branding & Identidad Visual</span>
            <h1 class="reveal-item reveal-delay-2" style="font-size: 4.5rem; line-height: 1.2; margin-bottom: 32px; letter-spacing: 0px;">Diseñando el futuro de las <span class="tech-gradient">marcas digitales.</span></h1>
            <p class="reveal-item reveal-delay-3" style="color: var(--text-muted); font-size: 1.3rem; margin-bottom: 56px; max-width: 700px; margin-left: auto; margin-right: auto;">Ayudo a empresas visionarias a construir identidades visuales memorables que conectan e inspiran en un mundo tecnológico.</p>
            <div class="reveal-item reveal-delay-3" style="display: flex; gap: 20px; justify-content: center;">
                <a href="portfolio.html" class="btn btn-primary">Ver Proyectos</a>
                <a href="#contacto" class="btn btn-outline">Hablemos</a>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator Arrow -->
    <a href="#proyectos" class="scroll-arrow reveal-item reveal-delay-3" aria-label="Desplazar hacia abajo">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>
</section>
```

## CSS
```css
#hero::before {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    z-index: 0;
    pointer-events: none;
    -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
}

.hero-liquid-bg {
    position: fixed;
    top: 0; left: 0;
    width: 250px; height: 250px;
    background: radial-gradient(circle, rgba(0, 224, 255, 0.4) 0%, rgba(0, 98, 255, 0.15) 50%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
    transform: translate(-50%, -50%);
    z-index: 999;
    pointer-events: none;
    mix-blend-mode: screen;
    opacity: 0.15;
    transition: width 0.5s ease, height 0.5s ease, filter 0.5s ease, opacity 0.4s ease;
    will-change: transform, opacity;
}

.hero-liquid-bg.large {
    width: 600px; height: 600px;
    filter: blur(60px);
    background: radial-gradient(circle, rgba(0, 224, 255, 0.5) 0%, rgba(0, 98, 255, 0.2) 40%, transparent 70%);
}

.hero-liquid-bg.active-text {
    opacity: 0.8;
}
```

## JS
```javascript
// La lógica se encuentra en app.js bajo animateLiquid() y el listener de mousemove.
```
