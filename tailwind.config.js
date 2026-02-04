module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Mode Forest Tech Colors
        'dark-hero': '#0c1713',
        'dark-about': '#162925',
        'dark-toggle': '#1a3a32',
        'dark-touch': '#0f2419',
        'dark-footer': '#071410',
        'dark-accent-primary': '#10b981',
        'dark-accent-secondary': '#34d399',
        'dark-text-heading': '#f0fdf4',
        'dark-text-body': '#d1fae5',
        
        // Light Mode Forest Tech Colors
        'light-hero': '#f0fdf4',
        'light-about': '#ffffff',
        'light-toggle': '#ecfdf5',
        'light-touch': '#d1fae5',
        'light-footer': '#a7f3d0',
        'light-accent-primary': '#059669',
        'light-accent-secondary': '#047857',
        'light-text-heading': '#071410',
        'light-text-body': '#0f2419',
      },
      animation: {
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-in-scale': 'fadeInScale 0.8s ease-out',
        'border-slide': 'borderSlide 0.3s ease-out',
        'rotate-360': 'rotate360 0.5s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInScale: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        borderSlide: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.3)' },
          '50%': { boxShadow: '0 0 0 8px rgba(16, 185, 129, 0)' },
        },
      },
    },
  },
  plugins: [],
}
