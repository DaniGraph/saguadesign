# Propuesta 02 - Digital Monolith

Diseño brutalista de alto contraste con estética "Obsidian", rejilla técnica y acentos en verde lima neón.

## HTML
```html
<section id="hero" class="hero-v2" style="min-height: 100vh;">
    <div id="liquid-bg" class="hero-liquid-bg"></div>
    <div class="hero-grid-overlay"></div>
    
    <div class="side-text-vertical">CREATIVE STRATEGY</div>
    
    <div class="container" style="position: relative; z-index: 5;">
        <div class="tech-obsidian-card reveal-item">
            <span style="color: #CCFF00; font-weight: 700; text-transform: uppercase; letter-spacing: 5px; font-size: 0.8rem; display: block; margin-bottom: 24px;">Protocolo de Diseño v2.0</span>
            
            <h1 class="brutal-title">
                <span class="outline">Branding</span><br>
                <span class="lime">Disruptivo</span>
            </h1>
            
            <p style="color: var(--text-muted); font-size: 1.1rem; max-width: 500px; margin-bottom: 48px; line-height: 1.6;">
                Arquitectura visual de alto impacto para marcas que no temen al futuro. Fusionamos estética brutalista con precisión técnica digital.
            </p>
            
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <a href="portfolio.html" class="btn-brutal">Explorar Archivos</a>
                <a href="#contacto" class="btn-brutal-outline">Iniciar Enlace</a>
            </div>
        </div>
    </div>

    <!-- New Minimalist Scroll Indicator -->
    <div style="position: absolute; bottom: 40px; right: 40px; display: flex; align-items: center; gap: 20px; color: rgba(255,255,255,0.3); font-size: 0.7rem; letter-spacing: 3px; transform: rotate(-90deg) translateX(50%); transform-origin: right center;">
        SCROLL TO NAVIGATE <div style="width: 100px; height: 1px; background: #CCFF00;"></div>
    </div>
</section>
```

## CSS
```css
.hero-v2 {
    background: #050505;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0;
}

.hero-grid-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-image: 
        linear-gradient(rgba(204, 255, 0, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(204, 255, 0, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
    perspective: 1000px;
    z-index: 0;
}

.side-text-vertical {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    font-size: 8rem;
    font-family: var(--font-heading);
    color: rgba(255, 255, 255, 0.03);
    white-space: nowrap;
    z-index: 0;
    pointer-events: none;
    text-transform: uppercase;
}

.brutal-title {
    font-size: 6rem;
    line-height: 0.9;
    letter-spacing: -2px;
    text-transform: uppercase;
    margin-bottom: 40px;
}

.brutal-title span.outline {
    -webkit-text-stroke: 1px rgba(255,255,255,0.4);
    color: transparent;
}

.brutal-title span.lime {
    color: #CCFF00;
    text-shadow: 0 0 30px rgba(204, 255, 0, 0.4);
}

.tech-obsidian-card {
    background: rgba(15, 15, 15, 0.8);
    border: 1px solid rgba(204, 255, 0, 0.2);
    padding: 60px;
    border-radius: 0;
    position: relative;
    z-index: 2;
    box-shadow: 40px 40px 0px rgba(204, 255, 0, 0.05);
}
```
