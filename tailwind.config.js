module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      'gray': '#333533',
      'yellow': '#ffee32',
      'orange': '#ffd100',
      'dark': '#202020',
      'white': '#d6d6d6',
    },
  }
};
