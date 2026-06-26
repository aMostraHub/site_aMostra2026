/*
 * Configuração de marca da aMostra (Tailwind Play CDN).
 * Fonte única de verdade para a PALETA e a HIERARQUIA DE FONTES.
 * Deve ser carregado logo APÓS o <script src="...cdn.tailwindcss.com">.
 *
 * Paleta (guia de marca):
 *   #821114 #940714 #BC2020 #F2292F  -> vermelhos
 *   #000000 (preto)  #E3E4DE (off-white)  #E1B868 (dourado, uso pontual)
 *
 * Tipografia (ordem de hierarquia):
 *   1. League Spartan -> títulos / display
 *   2. Montserrat     -> navegação, botões, rótulos, ênfase (UI)
 *   3. Questrial      -> texto corrido (corpo)
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Tokens nomeados conforme o guia de marca (mantém paridade com o blog).
        brand: {
          1: '#821114', // vermelho escuro primário  (navbar, títulos)
          2: '#940714', // vermelho escuro secundário (hover, subtítulos)
          3: '#BC2020', // vermelho médio             (badges, ativos)
          4: '#F2292F', // vermelho vibrante          (acentos interativos)
          5: '#000000', // preto                      (texto, rodapé)
          6: '#E3E4DE', // off-white                  (canvas da página)
          7: '#E1B868', // dourado                    (detalhes pontuais)
        },
        // Aliases semânticos.
        gold: { DEFAULT: '#E1B868', deep: '#C99A4A' },
        ink: '#000000',
        cream: '#E3E4DE',
        paper: '#ECEDE8',
        wine: '#821114',
        // Reescreve a escala "red" do Tailwind para os vermelhos da marca,
        // assim todas as classes existentes (bg-red-600, from-red-900, ...)
        // passam a usar a paleta correta sem reescrever o HTML.
        red: {
          50: '#FCEEEE',
          100: '#F8DBDC',
          200: '#EFB1B2',
          300: '#E6878A',
          400: '#EF5258',
          500: '#F2292F',
          600: '#BC2020',
          700: '#940714',
          800: '#821114',
          900: '#5E0C0E',
        },
        // Aquece os tons claros de cinza para combinar com o off-white da marca.
        // (300–900 permanecem o cinza neutro padrão para texto legível.)
        gray: {
          50: '#ECEDE8',
          100: '#E3E4DE',
          200: '#D7D8D1',
        },
      },
      fontFamily: {
        sans: ['Questrial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        spartan: ['"League Spartan"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        questrial: ['Questrial', 'sans-serif'],
        // Alias de compatibilidade: páginas antigas usam "font-poppins".
        poppins: ['Questrial', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
};
