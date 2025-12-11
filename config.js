/* Канфігурацыя Tailwind (config.js)
   Тут задаюцца колеры Telegram, шрыфты і анімацыі.
*/

tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                tg: {
                    bg: '#ffffff',
                    bgDark: '#17212b', // Main dark bg
                    secondary: '#f4f4f5',
                    secondaryDark: '#0e1621', // Secondary dark
                    card: '#ffffff',
                    cardDark: '#242f3d', // Message/Card bg
                    text: '#000000',
                    textDark: '#ffffff',
                    hint: '#707579',
                    hintDark: '#7d8b99',
                    blue: '#3390ec', // Standard TG Blue
                    blueDark: '#5288c1', // Dark mode TG Blue
                    green: '#34c759',
                    red: '#ff3b30'
                }
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
            },
            animation: {
                'fill-bar': 'fillBar 1.5s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'bounce-slow': 'bounce 3s infinite',
            },
            keyframes: {
                fillBar: {
                    '0%': { width: '0%' },
                    '100%': { width: 'var(--target-width)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    }
}
