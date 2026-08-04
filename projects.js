const listaProyectos = [
  // ----------------------------------------------------
  // MARCAS / COMERCIAL (BRANDS)
  // ----------------------------------------------------
  {
    id: "com-techround-uk",
    categoria: "comercial",
    portadaImg: "img/portadas/portada-techround.jpg",
    publicaciones: [
      {
        idPub: "techround-p1",
        año: "2025-2026",
        titulo: "TechRound UK",
        descripcionES: "<p>Producción de contenido audiovisual a partir de noticias, artículos editoriales, entrevistas y material UGC, adaptado a múltiples formatos y plataformas (YouTube y redes sociales). Trabajo coordinado con equipo editorial y colaboradores externos.</p>",
        descripcionEN: "<p>Production of audiovisual content from news articles, editorials, interviews and UGC, adapted to multiple formats and platforms (YouTube and social media). Coordinated work with editorial team and external collaborators.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 40px; width: 100%;">
            <!-- Bloque 1: Article-Based Videos (3 por línea) -->
            <div>
              <h4 style="font-family: Google Sans, sans-serif; font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #000;">Article-Based Videos</h4>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                ${[
                  "cQRufw5mP_I", "koD0ZTkg_hA", "-p5r_2oXluE", "lx7wGDNjQjM", "z_db6YLPA18", "eFp3zzSFTcg",
                  "GHfmjGnFQy4", "LG4VA1XH6Dg", "NsOQMRFb_w8", "KUg5vKrJQlw", "Z0znUPwhKfE", "sbJeGPmqyrk",
                  "rDMj6h4Pwlk", "lhy456D4Z40", "l8T3wMMGl9Q", "AnycEnTfX4A", "wX4MvAZISE0", "h4o6ZnnsYWo",
                  "MKPsTYhSJug", "FGhetvSkX5U", "qejv2-4Xqwc", "42-bXIPD31I", "cogTsEs8K7E", "3jL5N-PQPho",
                  "L4lbD00L-_0", "h2gt1HD9utE", "KxutngZA_0Q", "AmGqnZXe7p8", "-Zva9himJf8", "afQcrd_VGwk",
                  "-w9tehv60vY", "CZ_Vd1e9Ei0", "Pce02ol_tbQ", "mtml-Et1uec", "K0eAF-hlPuo", "WowYXubbMtA",
                  "wOOaKOwpO4o", "r-J_NXz301M", "_sGjf7GJjg8", "USTK72RWMAQ", "f-TDSwcsogM", "eo-LhjINVt0",
                  "y9hRbtiPLng", "33JjFWKUaQY", "zuUQ4Z7Ct_U", "fO6fOBACI38"
                ].map(id => `
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                    <iframe src="https://www.youtube.com/embed/${id}?playlist=${id}&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                  </div>
                `).join('')}
              </div>
            </div>
            <!-- Bloque 2: Interviews & Expert Insights (3 por línea) -->
            <div>
              <h4 style="font-family: Google Sans, sans-serif; font-size: 18px; font-weight: 700; margin-bottom: 15px; color: #000;">Interviews & Expert Insights</h4>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                ${[
                  "iSywkYaPlLU", "1EXNorJFwrw", "YRBSJyLF5YA", "oyP4odWkCqQ", "-JpxmBGP7IE", "_FhXRepsieA",
                  "a6yKkOmFq24", "6_7En_COw-o", "lNgtJLepXbg", "8fc3dDvUJ_k", "CVNUVpW9IbA"
                ].map(id => `
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                    <iframe src="https://www.youtube.com/embed/${id}?playlist=${id}&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "com-adeahealth",
    categoria: "comercial",
    portadaImg: "img/portadas/portada-adeahealth.jpg",
    publicaciones: [
      {
        idPub: "adeahealth-p1",
        año: "2025-2026",
        titulo: "AdeaHealth",
        descripcionES: "<p>En AdeaHealth (una startup centrada en el bienestar que busca modernizar la atención médica preventiva mediante la educación y soluciones digitales), trabajo como Diseñador Multimedia, produciendo una amplia variedad de contenido audiovisual:</p><ul><li><b>Producción de contenido para redes sociales (diseño gráfico, edición de video, motion graphics)</b></li><li>Diseño de identidad visual, diseño de presentaciones, branding, logotipos y packaging.</li><li>Diseño UX/UI en Figma y Canva, incluyendo prototipado de sitios web y aplicaciones.</li><li>Revisión y adaptación de recursos para diferentes formatos, asegurando la coherencia entre los entregables y las directrices de marca.</li><li>Uso de herramientas con IA para la creación de contenido visual, la ideación y la optimización de la producción.</li></ul>",
        descripcionEN: "<p>At AdeaHealth (a wellness-focused startup aiming to modernize preventive healthcare through education and digital solutions) I work as a Multimedia Designer producing a wide range of audiovisual content:</p><ul><li><b>Content production for social media (graphic design, video editing, motion graphics)</b></li><li>Visual identity design, presentation design, branding, logos and packaging.</li><li>UX/UI design in Figma and Canva with website and app prototyping.</li><li>Reviewing and adapting assets for different formats, ensuring consistency across deliverables and brand guidelines.</li><li>Use of AI-assisted tools for visual content creation, ideation and production optimisation.</li></ul>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 30px; width: 100%;">
            <!-- Videos Dailymotion (3 por línea, colocados ANTES que las fotos) -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k5RVsPE3NTNPYhIorWC" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k5qwlcQdxNroK7IorWy" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k75YzHBmt63KpxIorWG" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k30Quf8rB3ZMjoIorWu" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k1jVE7lHpQBaoFIr40y" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k72nNYqW1iR56vIr40G" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k2OdyEpojnVeQCIosx8" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/kQLRbnIlT2MGOzIr40q" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k6TtuAHRz655CwIr40K" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k76VOIMSvltDqIIr40u" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="width: 100%;"></div>
              <div style="width: 100%;"></div>
            </div>

            <!-- Grilla de Fotos -->
            <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; width: 100%;">
              ${Array.from({ length: 24 }, (_, i) => i + 1).map(num => `
                <img data-lightbox="true" src="img/proyectos-internos/adeahealth-socialmedia-${num}.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              `).join('')}
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "com-ciudadania-croata",
    categoria: "comercial",
    portadaImg: "img/portadas/portada-ciudadania-croata.jpg",
    publicaciones: [
      {
        idPub: "ciudadania-croata-p1",
        año: "2025",
        titulo: "Ciudadanía Croata",
        descripcionES: "<p>Trabajo realizado para La Cosecha, una agencia de marketing y comunicación. Mis responsabilidades incluyeron diseño gráfico, edición de video y motion graphics para piezas destinadas a Instagram y TikTok, adaptando el contenido a la identidad visual de la marca y a los formatos propios de cada plataforma.</p>",
        descripcionEN: "<p>Project completed for La Cosecha, a marketing and communications agency. My responsibilities included graphic design, video editing, and motion graphics for Instagram and TikTok content, adapting each piece to the brand's visual identity and the requirements of each platform.</p>",
        mediaHTML: `
          <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; width: 100%;">
            ${Array.from({ length: 24 }, (_, i) => String(i + 1).padStart(3, '0')).map(num => `
              <img data-lightbox="true" src="img/proyectos-internos/ciudadania-croata-${num}.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
            `).join('')}
          </div>
        `
      }
    ]
  },
  {
    id: "com-flakkaboem-sessions",
    categoria: "comercial",
    portadaImg: "img/portadas/portada-flakkaboem.jpg",
    publicaciones: [
      {
        idPub: "free-flakka-p1",
        año: "2024",
        titulo: "Flakkaboem Sessions",
        descripcionES: "<p>Postproducción de material audiovisual para sesiones de música en vivo, incluyendo <b>edición de video</b>, <b>corrección de color</b>, <b>sincronización multicámara</b> y selección de fragmentos para la creación de contenido en formato vertical destinado a Instagram Reels y YouTube Shorts.</p>",
        descripcionEN: "<p>Post-production of audiovisual content for live music sessions, including <b>video editing</b>, <b>color correction</b>, <b>multicamera synchronization</b>, and the selection of highlights for short-form vertical content on Instagram Reels and YouTube Shorts.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 35px; width: 100%;">
              <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/S5clh2xefZw?playlist=S5clh2xefZw&loop=1" title="Flakkaboem YT 1" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/KIdcWdvYjyI?playlist=KIdcWdvYjyI&loop=1" title="Flakkaboem YT 2" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/4ShSn0kQJeE?playlist=4ShSn0kQJeE&loop=1" title="Flakkaboem YT 3" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/WMMbMiQEcWA?playlist=WMMbMiQEcWA&loop=1" title="Flakkaboem YT 4" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.youtube.com/embed/EA6wyKV7xs4?playlist=EA6wyKV7xs4&loop=1" title="Flakkaboem YT 5" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
              </div>
              
              <div style="font-family: Google Sans, sans-serif; font-size: 16px; font-weight: 500; color: #000; border-top: 1px solid #eee; padding-top: 25px; margin-top: 10px;">Contenido Shorts / Reels:</div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C--qANCoZuu/embed" title="Flakkaboem IG 1" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C9m0jSiofec/embed" title="Flakkaboem IG 2" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C6wLgRnIE0y/embed" title="Flakkaboem IG 3" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C5EKt3_oolW/embed" title="Flakkaboem IG 4" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;"><iframe src="https://www.instagram.com/reel/C3-b801Ivpj/embed" title="Flakkaboem IG 5" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>
                  <div style="width: 100%;"></div>
              </div>
          </div>
        `
      }
    ]
  },
  {
    id: "com-bagu-hoteles",
    categoria: "comercial",
    portadaImg: "img/portadas/portada-bagu.jpg",
    publicaciones: [
      {
        idPub: "bagu-p1",
        año: "2025",
        titulo: "Bagu Hoteles",
        descripcionES: "<p>Trabajo realizado para La Cosecha, una agencia de marketing y comunicación. El proyecto consistió en la creación de contenido para redes sociales de Hoteles Bagu, una cadena hotelera argentina.</p><p>Mis responsabilidades incluyeron <b>diseño gráfico</b>, <b>edición de video</b> y <b>motion graphics</b> para piezas destinadas a Instagram y TikTok, adaptando el contenido a la identidad visual de la marca y a los formatos propios de cada plataforma.</p>",
        descripcionEN: "<p>Project completed for La Cosecha, a marketing and communications agency. The work involved creating social media content for Hoteles Bagu, an Argentine hotel chain.</p><p>My responsibilities included <b>graphic design</b>, <b>video editing</b>, and <b>motion graphics</b> for Instagram and TikTok content, adapting each piece to the brand's visual identity and the requirements of each platform.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 40px; width: 100%;">
            <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; width: 100%;">
              ${Array.from({ length: 41 }, (_, i) => String(i + 1).padStart(2, '0')).map(num => `
                <img data-lightbox="true" src="img/proyectos-internos/bagu-${num}.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              `).join('')}
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/kAmVwc6UTMacT4Ih9Ke" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k6behSRNlI3GorIh9Kq" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/kvmIo4byvpNG1iIh9K2" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k4rSjATXJBFqlPIh9Ki" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k7E1EA6VT9ntolIh9Km" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k3Jq6d3IMNwM9RIh9Ka" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "com-ginezen",
    categoria: "comercial",
    portadaImg: "img/portadas/portada-ginezen.jpg",
    publicaciones: [
      {
        idPub: "ginezen-p1",
        año: "2025",
        titulo: "Ginezen",
        descripcionES: "<p>Trabajo realizado para La Cosecha, una agencia de marketing y comunicación. El proyecto consistió en la creación de contenido para redes sociales de Ginezen, un consultorio médico enfocado en ginecología.</p><p>Mis responsabilidades incluyeron <b>diseño gráfico</b>, <b>edición de video</b> y <b>motion graphics</b> para piezas destinadas a Instagram y TikTok. También ayudé en la construcción de la identidad de la marca, colaborando en el armado del brand book.</p>",
        descripcionEN: "<p>Project completed for La Cosecha, a marketing and communications agency. The project involved creating social media content for Ginezen, a gynecology clinic.</p><p>My responsibilities included <b>graphic design</b>, <b>video editing</b>, and <b>motion graphics</b> for Instagram and TikTok content. I also contributed to the development of the brand's visual identity by collaborating on the creation of its brand book.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 40px; width: 100%;">
            <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; width: 100%;">
              ${Array.from({ length: 55 }, (_, i) => String(i + 1).padStart(2, '0')).map(num => `
                <img data-lightbox="true" src="img/proyectos-internos/ginezen-${num}.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              `).join('')}
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k7bJVW9dqsGJJJImDL4" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k3SZxW5SZafH8PImDL0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/kY5lZo5ufo5ZNQImDLg" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k15Mq4nrjAR2MpImDLc" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k1s6J8W4emCc7QImDLs" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k4pc6jtHxMZ0P4ImDLw" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k5vs2ENtMyryXyImDLk" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 177.77%; overflow: hidden; border-radius: 4px; background-color: #000;">
                <iframe src="https://www.dailymotion.com/embed/video/k4nZCbeCBPpFmrImDLo" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="width: 100%;"></div>
            </div>
          </div>
        `
      }
    ]
  },
  // ----------------------------------------------------
  // AUDIOVISUAL
  // ----------------------------------------------------
  {
    id: "aud-memoria",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-memoria.png",
    publicaciones: [
      {
        idPub: "aud-mem-p1",
        año: "2023",
        titulo: "memoria",
        descripcionES: "<p>“memoria” es un proyecto de animación resultado de una experimentación de diferentes técnicas audiovisuales: fotografía, imagen en movimiento, dibujos en papel y digitales. Fue realizado para la Universidad de Buenos Aires en el marco de los 40 años de Democracia en Argentina.</p>",
        descripcionEN: "<p>“memoria” is an animation project resulting from experimentation with various audiovisual techniques: photography, moving images, and both paper and digital drawings. It was produced for the University of Buenos Aires in the context of the 40th anniversary of democracy in Argentina.</p>",
        mediaHTML: '<iframe src="https://www.youtube.com/embed/_fNHM4maVpA?playlist=_fNHM4maVpA&loop=1" title="memoria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  {
    id: "aud-moyo",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-moyo.png",
    publicaciones: [
      {
        idPub: "aud-moyo-p1",
        año: "2023",
        titulo: "Moyo",
        descripcionES: `
          <p>Proyecto de animación 2d que mezcla técnicas de dibujo en papel con dibujo digital.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 15px; font-weight: 300; color: #000; margin-top: 25px;">Proceso de construcción:</div>
        `,
        descripcionEN: `
          <p>2D animation project blending paper-based drawing techniques with digital drawing.</p>
          <div style="font-family: Google Sans, sans-serif; font-size: 15px; font-weight: 300; color: #888; margin-top: 25px;">Construction process:</div>
        `,
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
              <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                  <iframe src="https://www.youtube.com/embed/1_h0tL3hrfA?playlist=1_h0tL3hrfA&loop=1" title="Moyo Video 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                  <iframe src="https://www.youtube.com/embed/e0nDvOtpPjM?playlist=e0nDvOtpPjM&loop=1" title="Moyo Video 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%; margin-top: 15px;">
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/-K0N8nFII5Y?playlist=-K0N8nFII5Y&loop=1" title="Proceso 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/BC_WIf5bPTQ?playlist=BC_WIf5bPTQ&loop=1" title="Proceso 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                      <iframe src="https://www.youtube.com/embed/oUgn8nPFbTo?playlist=oUgn8nPFbTo&loop=1" title="Proceso 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
          </div>
        `
      }
    ]
  },
  {
    id: "aud-cero-nueve",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-cero-nueve.png",
    publicaciones: [
      {
        idPub: "aud-cero-p1",
        año: "2023",
        titulo: "cero, nueve",
        descripcionES: "<p>Interpretación audiovisual de un sueño.</p>",
        descripcionEN: "<p>Audiovisual interpretation of a dream.</p>",
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000; margin-bottom: 25px;">
              <iframe src="https://www.youtube.com/embed/jHQmMj2uQmo?playlist=jHQmMj2uQmo&loop=1" title="cero, nueve" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/cero-nueve-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-urdimbre-morfologias",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-urdimbre.png",
    publicaciones: [
      {
        idPub: "aud-urdimbre-p1",
        año: "2022",
        titulo: "urdimbre: morfologías e identidad en el espacio público",
        descripcionES: `
          <p>"Urdimbre" es un collage audiovisual desarrollada durante 2022 junto a Delfina Di Giacomo. Explora las líneas, los recorridos y las formas que configuran el espacio público. El proyecto surge de una inquietun por observar las morfologías de la ciudad e imaginar las lógicas que subyacen a su organización.</p>
          <p>A partir del tránsito reiterado por los mismos espacios urbanos, la obra dirige su mirada hacia los no-lugares: ámbitos de circulación donde la identidad individual se diluye en el flujo constante de personas. La infraestructura urbana y sus trazados conducen nuestros desplazamientos a través de recorridos aparentemente mecánicos, que por momentos parecen abrir la posibilidad de ser interrumpidos o transformados.</p>
          <p><b>Exhibiciones</b></p>
          <p>2022 – <a href="https://www.instagram.com/muestramagma/" target="_blank">Muestra MAGMA</a>, Centro Hipermediático Experimental Latinoamericano (<a href="https://chela.org.ar/" target="_blank">CHELA</a>), Buenos Aires, Argentina.</p>
          <p>2024 – <a href="https://thesibarist.com/es/magazine/asi-fue-la-inauguracion-de-pensar-la-ciudad/" target="_blank">Pensar la Ciudad</a>, The Sibarist, Madrid, España.</p>
        `,
        descripcionEN: `
          <p>"Urdimbre" is an audiovisual collage developed throughout 2022 in collaboration with Delfina Di Giacomo. It explores the lines, pathways, and forms that shape public space. The project emerged from a fascination with the city's morphologies and a desire to imagine the hidden logics underlying its organization.</p>
          <p>Through the repeated experience of moving through the same urban environments, the work turns its attention to non-places: spaces of circulation where individual identity becomes diluted within the continuous flow of people. The city's infrastructure and network of lines guide our movements along seemingly mechanical paths that occasionally reveal the possibility of disruption and transformation.</p>
          <p><b>Exhibitions</b></p>
          <p>2022 – <a href="https://www.instagram.com/muestramagma/" target="_blank">MAGMA Exhibition</a>, Latin American Experimental Hypermedia Center (<a href="https://chela.org.ar/" target="_blank">CHELA</a>), Buenos Aires, Argentina.</p>
          <p>2024 – <a href="https://thesibarist.com/es/magazine/asi-fue-la-inauguracion-de-pensar-la-ciudad/" target="_blank">Pensar la Ciudad</a>, The Sibarist, Madrid, Spain.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/GC83fCLqHPs?playlist=GC83fCLqHPs&loop=1" title="Urdimbre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Imágenes:</div>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/urdimbre-01.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/urdimbre-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-entre-las-dos",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-entre-las-dos.png",
    publicaciones: [
      {
        idPub: "aud-entre-p1",
        año: "2022",
        titulo: "entre las dos",
        descripcionES: `
          <p>"Entre las Dos" es un corto realizado en el marco de la materia Iluminación y Cámara 2 (Cátedra Valansi) de la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (UBA). En este proyecto me desempeñé como <b>directora</b> y <b>diseñadora de iluminación</b>.</p>
        `,
        descripcionEN: `
          <p>“Entre las Dos” is a short film developed as part of the Lighting and Camera 2 course in the Image and Sound Design career at the University of Buenos Aires (UBA). For this project, I worked as the <b>director</b> and <b>lighting designer</b>.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/okDMsnwzYII?playlist=okDMsnwzYII&loop=1" title="Entre las Dos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Backstage:</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-04.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-05.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/entre-las-dos-06.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-la-grulla",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-la grulla.png",
    publicaciones: [
      {
        idPub: "aud-grulla-p1",
        año: "2022",
        titulo: "la grulla",
        descripcionES: `
          <p>La Grulla es mi abuela. Desde la productora Doña Mutante realizamos este proyecto con el objetivo de construir un retrato íntimo de su espiritualidad y su templanza en el contexto de una ciudad sonora, invasiva y constantemente agitada.</p>
          <p>Más que presentar ese entorno como un conflicto o una fuente de incomodidad, el retrato pone el foco en la manera en que ella habita ese espacio a través de sus rituales cotidianos.</p>
        `,
        descripcionEN: `
          <p>La Grulla is my grandmother. Produced by Doña Mutante, this project aims to create an intimate portrait of her spirituality and inner strength within the context of a noisy, intrusive, and constantly bustling city.</p>
          <p>Rather than portraying this environment as a source of conflict or discomfort, the portrait focuses on the way she inhabits it through her daily rituals, revealing a quiet coexistence between her inner world and the city's relentless rhythm.</p>
        `,
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/ey6VMglwguY?playlist=ey6VMglwguY&loop=1" title="La Grulla" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
          <div style="font-family: Google Sans, sans-serif; font-size: 20px; font-weight: 700; color: #000; margin-top: 40px; margin-bottom: 15px;">Backstage:</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-01.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-02.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              <img data-lightbox="true" src="img/proyectos-internos/la-grulla-03.png" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
          </div>
        `
      }
    ]
  },
  {
    id: "aud-albores",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-albores.png",
    publicaciones: [
      {
        idPub: "aud1-p1",
        año: "2023",
        titulo: "albores",
        descripcionES: `
          <p>Trabajé como <b>directora</b>, <b>montajista</b> y <b>diseñadora de sonido</b> de "Albores", un cortometraje de docu-ficción estrenado en diciembre de 2023 en el Festival de Cortos de Amorina Cine Bar, un espacio dedicado a la exhibición del cine independiente argentino que reúne a realizadores y realizadoras emergentes.</p>
        `,
        descripcionEN: `
          <p>I worked as the <b>director</b>, <b>editor</b>, and <b>sound designer</b> of "Albores", a docfiction short film that premiered in December 2023 at the Amorina Cine Bar Short Film Festival, an event dedicated to showcasing independent Argentine cinema and bringing together emerging filmmakers.</p>
        `,
        mediaHTML: '<iframe src="https://www.youtube.com/embed/fLpjvvWXApA?playlist=fLpjvvWXApA&loop=1" title="Albores" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  {
    id: "aud-documental-del-azar",
    categoria: "audiovisual",
    portadaImg: "img/portadas/portada-documentaldelazar.png",
    publicaciones: [
      {
        idPub: "aud-azar-p1",
        año: "2020",
        titulo: "documental del azar",
        descripcionES: `
          <p>"Documental del azar" es un video experimental realizado como proyecto final de la materia Proyecto Audiovisual 1 (Cátedra Campos/Trilnick) de la carrera de Diseño de Imagen y Sonido de la Universidad de Buenos Aires (UBA).</p>
          <p>El proyecto explora el cruce entre el registro documental y la intervención plástica, combinando imágenes documentales con manipulaciones realizadas directamente sobre los fotogramas para cuestionar los límites entre la representación y la experimentación visual.</p>
          <p>Realizado en colaboración con Javiera Ceniceros y Clara Bunge.</p>
        `,
        descripcionEN: `
          <p>"Documental del azar" is an experimental video created as the final project for the Audiovisual Project 1 course in the Image and Sound Design career at the University of Buenos Aires (UBA).</p>
          <p>The project explores the intersection of documentary filmmaking and visual experimentation by combining documentary footage with hand-crafted interventions applied directly to individual frames, blurring the boundaries between documentation and artistic expression.</p>
          <p>Created in collaboration with Javiera Ceniceros and Clara Bunge.</p>
        `,
        mediaHTML: '<iframe src="https://www.youtube.com/embed/FKYOi1UyxpY?playlist=FKYOi1UyxpY&loop=1" title="Documental del azar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      }
    ]
  },
  // ----------------------------------------------------
  // FREELANCE
  // ----------------------------------------------------
  {
    id: "free-video-editing",
    categoria: "freelance",
    portadaImg: "img/portadas/portada-flakkaboem.jpg",
    publicaciones: [
      {
        idPub: "free-ve-p1",
        año: "2024 - 2026",
        titulo: "Video Editing",
        descripcionES: "<p>Edición y montaje de video para diversos proyectos independientes, eventos y redes sociales.</p>",
        descripcionEN: "<p>Video editing and assembly for various independent projects, events, and social media platforms.</p>",
        mediaHTML: ""
      }
    ]
  },
  {
    id: "free-graphic-design",
    categoria: "freelance",
    portadaImg: "img/portadas/portada-lucuma.jpg",
    publicaciones: [
      {
        idPub: "free-gd-p1",
        año: "2024 - 2026",
        titulo: "Graphic Design",
        descripcionES: "<p>Proyectos de diseño gráfico comercial, piezas de comunicación y branding para clientes independientes.</p>",
        descripcionEN: "<p>Commercial graphic design projects, communication pieces, and branding for freelance clients.</p>",
        mediaHTML: ""
      }
    ]
  },
  // ----------------------------------------------------
  // INSTALACIONES
  // ----------------------------------------------------
  {
    id: "inst-periferias",
    categoria: "instalaciones",
    portadaImg: "portfolio/portadas/portada-periferias.png",
    publicaciones: [
      {
        idPub: "inst-periferias-p1",
        año: "2023",
        titulo: "Periferias",
        descripcionES: "<p>Periferias es una instalación audiovisual que introduce al usuario en un ecosistema situado en las periferias de una ciudad ficticia, donde confluyen naturaleza y basura informacional. El espacio es habitado por diversos seres vivos que nacen de la sobrecarga de datos. Estas nuevas formas de vida buscan adaptarse a las dificultades del presente generando entornos más habitables mediante la hibridación de materialidades tanto naturales como tecnológicas.</p><p>La instalación consta de dos videos interconectados en los que se construye el mundo ficcional mediante la aparición de diferentes escenas de índole observacional donde se desarrollan las particularidades morfológicas de diferentes personajes y entornos.</p><p>El proyecto fue presentado en la muestra MAGMA, en diciembre de 2023, en cheLA.</p>",
        descripcionEN: "<p>Periferias is an audiovisual installation that immerses the viewer in an ecosystem located on the outskirts of a fictional city, where nature and informational waste converge. The space is inhabited by a variety of life forms born from data overload. These new organisms adapt to the challenges of the present by creating more habitable environments through the hybridization of natural and technological materials.</p><p>The installation consists of two interconnected videos that gradually construct this fictional world through a series of observational scenes, revealing the distinctive morphologies of its inhabitants and the environments they occupy.</p><p>The project was exhibited at MAGMA in December 2023 at the Latin American Experimental Hypermedia Center (cheLA) in Buenos Aires, Argentina.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
            <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
              <iframe src="https://www.youtube.com/embed/x4zR10vzW4E?playlist=x4zR10vzW4E&loop=1" title="Periferias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
            </div>
            <div style="display: flex; flex-direction: column; gap: 15px; width: 100%; margin-top: 10px;">
              <img data-lightbox="true" src="portfolio/img/proyectos-internos/periferias-01.png" style="width: 100%; height: auto; border-radius: 4px; cursor: pointer;">
              <img data-lightbox="true" src="portfolio/img/proyectos-internos/periferias-02.png" style="width: 100%; height: auto; border-radius: 4px; cursor: pointer;">
              <img data-lightbox="true" src="portfolio/img/proyectos-internos/periferias-03.png" style="width: 100%; height: auto; border-radius: 4px; cursor: pointer;">
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "inst-bajo-sur",
    categoria: "instalaciones",
    portadaImg: "img/portadas/portada-bajo-sur.png",
    publicaciones: [
      {
        idPub: "inst-bajo-sur-p1",
        año: "2025",
        titulo: "Bajo Sur",
        descripcionES: "<p>Bajo Sur es una videoinstalación que explora la identidad de los barrios del conurbano sur en Buenos Aires a través de una mirada que combina documental y ficción.</p><p>La obra sigue recorridos por espacios cotidianos, como un túnel, una estación de tren y una rotonda con un santuario popular, donde pequeñas irrupciones mágicas transforman la experiencia del paisaje urbano. Burbujas, imágenes sobreexpuestas, presencias no humanas y mitologías nacidas en internet conviven con el cemento revelando una dimensión más lúdica, contradictoria y poética del territorio.</p><p>Los videos fueron registrados con teléfonos celulares de baja resolución. Esta decisión estética recupera una imagen asociada a lo precario y lo cotidiano, no como un signo de carencia, sino como formas de resistencia simbólica.</p>",
        descripcionEN: "<p>Bajo Sur is a video installation that explores the identity of the southern districts of Buenos Aires through a hybrid approach that combines documentary and fiction.</p><p>The work follows journeys through everyday locations, including a tunnel, a train station, and a roundabout with a popular roadside shrine, where subtle magical disruptions reshape the urban landscape. Bubbles, overexposed images, non-human presences, and internet-born myths coexist with concrete, revealing a more playful, contradictory, and poetic dimension of the territory.</p><p>The videos were recorded using low-resolution mobile phones. This aesthetic choice embraces an image often associated with the ordinary and the precarious, not as a sign of deficiency, but as a form of symbolic resistance.</p>",
        mediaHTML: `
          <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
            <iframe src="https://www.youtube.com/embed/yyBKgIkTirc?playlist=yyBKgIkTirc&loop=1" title="Bajo Sur" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
          </div>
        `
      }
    ]
  },
  // ----------------------------------------------------
  // DISEÑO GRÁFICO
  // ----------------------------------------------------
  {
    id: "dis-lucuma",
    categoria: "diseno",
    portadaImg: "img/portadas/portada-lucuma.jpg",
    publicaciones: [
      {
        idPub: "dis-lucuma-p1",
        año: "2026",
        titulo: "Lúcuma",
        descripcionES: "<p><b>Diseño gráfico</b> para redes sociales de Lúcuma, medio latinoamericano de crítica musical. Desarrollo de portadas, carruseles de Instagram y piezas promocionales para la difusión de reseñas y artículos, adaptando cada propuesta visual a la identidad editorial del medio y al contenido de cada publicación.</p>",
        descripcionEN: "<p><b>Graphic design</b> for Lúcuma, a Latin American music criticism platform. Creation of cover images, Instagram carousels, and promotional graphics to support the publication of reviews and editorial content, adapting each visual piece to the platform's editorial identity and the tone of every article.</p>",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="width: 100%; border-radius: 4px; background-color: #fff; overflow: hidden; position: relative; padding-top: 125%;">
                      <iframe src="https://www.instagram.com/p/DZGWi2LFTRw/embed" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="width: 100%; border-radius: 4px; background-color: #fff; overflow: hidden; position: relative; padding-top: 125%;">
                      <iframe src="https://www.instagram.com/p/DXsPvFZAJ4x/embed" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="width: 100%; border-radius: 4px; background-color: #fff; overflow: hidden; position: relative; padding-top: 125%;">
                      <iframe src="https://www.instagram.com/p/DWFMgTmjusW/embed" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width: 100%;">
                  <div style="width: 100%; border-radius: 4px; background-color: #fff; overflow: hidden; position: relative; padding-top: 125%;">
                      <iframe src="https://www.instagram.com/p/DbUCdBAgO6D/embed" frameborder="0" scrolling="no" allowtransparency="true" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe>
                  </div>
                  <div style="width: 100%;"></div>
                  <div style="width: 100%;"></div>
              </div>
          </div>
        `
      }
    ]
  },
  // ----------------------------------------------------
  // FOTOGRAFÍA
  // ----------------------------------------------------
  {
    id: "foto-concert-photography",
    categoria: "fotografia",
    portadaImg: "img/portadas/portada-concert.jpg",
    publicaciones: [
      {
        idPub: "foto-concert-p1",
        año: "2022 - 2023",
        titulo: "Concert photography",
        descripcionES: "",
        descripcionEN: "",
        mediaHTML: `
          <div style="display: flex; flex-direction: column; gap: 40px; width: 100%;">
            
            <!-- BLOQUE 1: Ooodisea -->
            <div>
              <div style="display: flex; flex-direction: column; gap: 4px; width: 100%; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #000; font-weight: 300;">14/01/2023<br>Ooodisea en W Morris, Villa Crespo, CABA.</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #888; font-weight: 300;">14/01/2023<br>Ooodisea at W Morris, Villa Crespo, CABA.</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-01.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-02.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-03.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-04.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-05.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-06.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-07.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-08.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-09.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-10.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              </div>
            </div>
            <!-- BLOQUE 2: Kill Flora -->
            <div>
              <div style="display: flex; flex-direction: column; gap: 4px; width: 100%; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #000; font-weight: 300;">21/04/2023<br>Kill Flora en Bernal, Quilmes.</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #888; font-weight: 300;">21/04/2023<br>Kill Flora at Bernal, Quilmes.</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-11.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-12.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-013.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-014.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-015.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-016.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-017.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-018.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-019.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-020.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-021.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              </div>
            </div>
            <!-- BLOQUE 3: Nenagenix -->
            <div>
              <div style="display: flex; flex-direction: column; gap: 4px; width: 100%; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #000; font-weight: 300;">16/12/2022<br>Nenagenix en Beatflow, Palermo, CABA.</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #888; font-weight: 300;">16/12/2022<br>Nenagenix at Beatflow, Palermo, CABA.</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-022.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-023.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-024.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-025.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-026.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-027.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-028.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-029.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-030.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-031.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-032.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              </div>
            </div>
            <!-- BLOQUE 4: El Club Audiovisual -->
            <div>
              <div style="display: flex; flex-direction: column; gap: 4px; width: 100%; margin-bottom: 20px;">
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #000; font-weight: 300;">16/12/2022<br>El Club Audiovisual en Beatflow, Palermo, CABA.</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #888; font-weight: 300;">16/12/2022<br>El Club Audiovisual at Beatflow, Palermo, CABA.</p>
              </div>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; width: 100%;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-033.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-034.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-035.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-036.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-037.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-038.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-039.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-040.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-041.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-042.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
                <img data-lightbox="true" src="img/proyectos-internos/concert-043.jpg" style="width: 100%; height: auto; object-fit: cover; cursor: pointer; border-radius: 4px;">
              </div>
            </div>
          </div>
        `
      }
    ]
  }
];

const textoBio = `
    <div class="bio-content-view" style="font-family: Google Sans, sans-serif; display: flex; flex-direction: column; gap: 20px; width: 100%;">
        <div class="bio-es" style="font-weight: 300; font-size: 15px; line-height: 1.6; color: #000;">
            <p style="margin-bottom: 12px;"><b style="font-weight: 500;">Wanda Acevedo</b> es Diseñadora Audiovisual especializada en edición de video, diseño gráfico y producción de contenido digital para diferentes marcas, proyectos y empresas.</p>
            <p style="margin-bottom: 12px;">Especializada en la Universidad de Buenos Aires (UBA) y con un fuerte enfoque técnico, investiga narrativas contemporáneas y las tecnologías creativas emergentes.</p>
        </div>
        <div class="bio-en" style="font-weight: 300; font-size: 15px; line-height: 1.6; color: #666666;">
            <p style="margin-bottom: 12px;"><b style="font-weight: 500;">Wanda Acevedo</b> is an Audiovisual Designer specializing in video editing, graphic design, and digital content production for various brands, projects, and companies.</p>
            <p style="margin-bottom: 12px;">Formed at the University of Buenos Aires (UBA) and with a strong technical focus, she researches contemporary narratives and emerging creative technologies.</p>
        </div>
    </div>
`;

let categoriaActual = 'none';
let imagenesLightboxActuales = [];
let indiceLightboxActual = 0;

function renderizarGrillaProyectos(proyectosAVisualizar) {
    const contenedor = document.getElementById('dynamic-content');
    if (!contenedor) return;
    contenedor.innerHTML = '';

    if (!proyectosAVisualizar || proyectosAVisualizar.length === 0) return;

    const divGrilla = document.createElement('div');
    divGrilla.className = 'grid-proyectos';
    divGrilla.style.display = 'grid';
    divGrilla.style.width = '100%';

    proyectosAVisualizar.forEach(proy => {
        const primeraPub = proy.publicaciones[0];
        if (!primeraPub) return;
        const tarjeta = document.createElement('div');
        tarjeta.className = 'proyecto-tarjeta';
        tarjeta.setAttribute('onclick', `verProyecto('${proy.id}')`);
        tarjeta.style.fontFamily = 'Google Sans, sans-serif';
        tarjeta.style.width = '100%';
        let previewTexto = primeraPub.descripcionES.replaceAll('<b>', '<b style="font-weight: 500;">');
        tarjeta.innerHTML = `
            <img class="proyecto-tarjeta-media" src="${proy.portadaImg}" alt="${primeraPub.titulo}" style="width: 100%;">
            <div class="pub-ano" style="font-family: Google Sans, sans-serif; font-size: 14px; margin-top: 10px; font-weight: 300;">${primeraPub.año}</div>
            <h3 style="font-family: Google Sans, sans-serif; font-size: 17px; margin-top: 4px; margin-bottom: 8px; font-weight: 500;">${primeraPub.titulo}</h3>
            <div class="line-clamp-preview" style="font-family: Google Sans, sans-serif; font-weight: 300; font-size: 14px;">
                ${previewTexto} <span class="mas-link" style="color: #76C4AA;">[+]</span>
            </div>
        `;
        divGrilla.appendChild(tarjeta);
    });
    contenedor.appendChild(divGrilla);
}

function verProyecto(idProyecto) {
    const proy = listaProyectos.find(p => p.id === idProyecto);
    if (!proy) return;
    const filtrosComerciales = document.getElementById('filtros-comerciales');
    if (filtrosComerciales) filtrosComerciales.classList.add('hidden');
    
    const botonVolver = document.getElementById('back-button-container');
    if (botonVolver) {
        botonVolver.classList.remove('hidden');
    }
    const contenedor = document.getElementById('dynamic-content');
    if (!contenedor) return;
    contenedor.innerHTML = '';
    const divProyecto = document.createElement('div');
    divProyecto.className = 'proyecto-interno';
    divProyecto.style.width = '100%';
    divProyecto.style.maxWidth = '100%';
    
    let contenidoHTML = '';
    proy.publicaciones.forEach(pub => {
        let mediaRenderizado = pub.mediaHTML;
        
        if (mediaRenderizado && mediaRenderizado.includes('<iframe') && !mediaRenderizado.includes('display: grid') && !mediaRenderizado.includes('display: flex')) {
            mediaRenderizado = mediaRenderizado.replace(/width="[^"]*"/, '').replace(/height="[^"]*"/, '');
            mediaRenderizado = `
                <div style="position: relative; width: 100%; padding-top: 56.25%; overflow: hidden; border-radius: 4px; background-color: #000;">
                    ${mediaRenderizado.replace('<iframe', '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"')}
                </div>
            `;
        } else if (mediaRenderizado && mediaRenderizado.includes('<img') && !mediaRenderizado.includes('display: grid')) {
            mediaRenderizado = mediaRenderizado.replaceAll('<img', '<img data-lightbox="true" style="cursor:pointer; width: 100%; height: auto; border-radius: 4px;"');
        }
        let descES = pub.descripcionES.replaceAll('<p>', '<p style="margin: 0 0 8px 0; font-size: 15px; line-height: 1.6; color: #000; font-weight: 300;">');
        descES = descES.replaceAll('<b>', '<b style="font-weight: 500; color: #000;">');
        descES = descES.replaceAll('<strong>', '<strong style="font-weight: 500; color: #000;">');
        
        let descEN = pub.descripcionEN.replaceAll('<p>', '<p style="margin: 0 0 8px 0; font-size: 15px; line-height: 1.6; color: #666666; font-weight: 300;">');
        descEN = descEN.replaceAll('<b>', '<b style="font-weight: 500; color: #555555;">');
        descEN = descEN.replaceAll('<strong>', '<strong style="font-weight: 500; color: #555555;">');
        
        const tieneTexto = pub.descripcionES.trim() !== '' || pub.descripcionEN.trim() !== '';
        contenidoHTML += `
            <div class="publicacion-item" style="margin-bottom: 50px; font-family: Google Sans, sans-serif; width: 100%;">
                <div class="pub-ano" style="font-size: 18px; font-weight: 300; color: #999; margin-bottom: 4px;">${pub.año}</div>
                <div class="pub-titulo-interno" style="font-size: 32px; font-weight: 700; color: #000; margin-bottom: 25px; line-height: 1.2;">${pub.titulo}</div>
                
                ${tieneTexto ? `
                <div class="idiomas-filas-container" style="display: flex; flex-direction: column; gap: 8px; width: 100%; margin-bottom: 30px;">
                    <div class="descripcion-bloque-es">${descES}</div>
                    <div class="descripcion-bloque-en">${descEN}</div>
                </div>
                ` : ''}
                
                <div class="pub-media-container" style="width: 100%; margin-top: 25px;">
                    ${mediaRenderizado || ''}
                </div>
            </div>
        `;
    });
    divProyecto.innerHTML = contenidoHTML;
    contenedor.appendChild(divProyecto);
    window.scrollTo(0,0);
}

function volverALaGrilla() {
    const btnVolver = document.getElementById('back-button-container');
    if (btnVolver) btnVolver.classList.add('hidden');
    filtrarCategoria(categoriaActual);
}

function filtrarCategoria(cat) {
    categoriaActual = cat;
    const btnVolver = document.getElementById('back-button-container');
    if (btnVolver) btnVolver.classList.add('hidden');
    
    const filtrosComerciales = document.getElementById('filtros-comerciales');
    if (filtrosComerciales) {
        filtrosComerciales.classList.add('hidden');
    }
    
    if (cat === 'none') {
        renderizerGrillaProyectos([]);
    } else if (cat === 'todos') {
        renderizarGrillaProyectos(listaProyectos);
    } else {
        const filtrados = listaProyectos.filter(p => p.categoria === cat);
        renderizarGrillaProyectos(filtrados);
    }
}

function mostrarInfo() {
    categoriaActual = 'none';
    const filtrosComerciales = document.getElementById('filtros-comerciales');
    if (filtrosComerciales) filtrosComerciales.classList.add('hidden');
    const btnVolver = document.getElementById('back-button-container');
    if (btnVolver) btnVolver.classList.add('hidden');
    const contenedor = document.getElementById('dynamic-content');
    if (contenedor) contenedor.innerHTML = textoBio;
}

function irAHome() {
    categoriaActual = 'none';
    const filtrosComerciales = document.getElementById('filtros-comerciales');
    if (filtrosComerciales) filtrosComerciales.classList.add('hidden');
    const btnVolver = document.getElementById('back-button-container');
    if (btnVolver) btnVolver.classList.add('hidden');
    const contenedor = document.getElementById('dynamic-content');
    if (contenedor) contenedor.innerHTML = '';
}

// ----------------------------------------------------
// MANEJO DE LIGHTBOX Y EVENTOS
// ----------------------------------------------------
document.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-lightbox') || event.target.closest('[data-lightbox]')) {
        const targetImg = event.target.tagName === 'IMG' ? event.target : event.target.querySelector('img');
        if (!targetImg) return;
        
        const todasLasImgs = Array.from(document.querySelectorAll('#dynamic-content img[data-lightbox="true"]'));
        imagenesLightboxActuales = todasLasImgs.map(img => img.getAttribute('src'));
        
        const urlImagen = targetImg.getAttribute('src');
        indiceLightboxActual = imagenesLightboxActuales.indexOf(urlImagen);
        if (indiceLightboxActual === -1) {
            imagenesLightboxActuales = [urlImagen];
            indiceLightboxActual = 0;
        }
        const modal = document.getElementById('lightbox-modal');
        if (modal) {
            modal.classList.remove('hidden');
            actualizarImagenLightbox();
            inyectarFlechasNavegacion(modal);
        }
    }
});

function actualizarImagenLightbox() {
    const imagenModal = document.getElementById('lightbox-img');
    if (imagenModal && imagenesLightboxActuales.length > 0) {
        imagenModal.src = imagenesLightboxActuales[indiceLightboxActual];
    }
    const btnPrev = document.getElementById('lightbox-prev-btn');
    const btnNext = document.getElementById('lightbox-next-btn');
    if (btnPrev && btnNext) {
        if (imagenesLightboxActuales.length <= 1) {
            btnPrev.style.display = 'none';
            btnNext.style.display = 'none';
        } else {
            btnPrev.style.display = 'block';
            btnNext.style.display = 'block';
        }
    }
}

function inyectarFlechasNavegacion(modal) {
    if (document.getElementById('lightbox-prev-btn')) return;
    const btnPrev = document.createElement('button');
    btnPrev.id = 'lightbox-prev-btn';
    btnPrev.innerHTML = '&#8592;';
    btnPrev.style.cssText = 'position: absolute; left: 20px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #ffffff; font-size: 35px; cursor: pointer; padding: 10px; z-index: 10010; transition: opacity 0.2s;';
    btnPrev.setAttribute('onclick', 'lightboxAnterior(event)');
    
    const btnNext = document.createElement('button');
    btnNext.id = 'lightbox-next-btn';
    btnNext.innerHTML = '&#8594;';
    btnNext.style.cssText = 'position: absolute; right: 20px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #ffffff; font-size: 35px; cursor: pointer; padding: 10px; z-index: 10010; transition: opacity 0.2s;';
    btnNext.setAttribute('onclick', 'lightboxSiguiente(event)');
    [btnPrev, btnNext].forEach(btn => {
        btn.onmouseover = () => btn.style.opacity = '0.7';
        btn.onmouseout = () => btn.style.opacity = '1';
    });
    modal.appendChild(btnPrev);
    modal.appendChild(btnNext);
    actualizarImagenLightbox();
}

function lightboxAnterior(event) {
    if (event) event.stopPropagation();
    if (imagenesLightboxActuales.length <= 1) return;
    indiceLightboxActual = (indiceLightboxActual - 1 + imagenesLightboxActuales.length) % imagenesLightboxActuales.length;
    actualizarImagenLightbox();
}

function lightboxSiguiente(event) {
    if (event) event.stopPropagation();
    if (imagenesLightboxActuales.length <= 1) return;
    indiceLightboxActual = (indiceLightboxActual + 1) % imagenesLightboxActuales.length;
    actualizarImagenLightbox();
}

function cerrarLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.add('hidden');
}

document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('lightbox-modal');
    if (modal && !modal.classList.contains('hidden')) {
        if (e.key === 'Escape') cerrarLightbox();
        if (e.key === 'ArrowLeft') lightboxAnterior(e);
        if (e.key === 'ArrowRight') lightboxSiguiente(e);
    }
});

// Inicializar vista vacía al cargar la página de inicio
document.addEventListener('DOMContentLoaded', () => {
    irAHome();
});
