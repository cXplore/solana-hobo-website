# Solana Hobo ($SOLBO) Website

This is the official website for the Solana Hobo ($SOLBO) token, a fun community-driven token on the Solana blockchain.

## Features

- Responsive design that works on all devices
- Modern and attractive UI with Solana-themed colors
- Interactive elements including charts and animations
- Easy-to-update token information
- SEO-friendly structure

## How to Deploy to GitHub Pages

The website is designed to be hosted for free on GitHub Pages. To deploy it:

1. Go to your repository settings by clicking on the "Settings" tab
2. Scroll down to the "GitHub Pages" section
3. Under "Source", select "main" branch
4. Click Save

After a few minutes, your website will be live at `https://[your-username].github.io/solana-hobo-website/`

## How to Customize

### Token Information

To update the token address and other information:

1. Edit the `index.html` file
2. Find the token address in the "How to Buy $SOLBO" section
3. Replace `SOLBOxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` with your actual token address

### Socials

Update your social media links in both the "Join Our Community" section and in the footer of `index.html`.

### Images

The website uses SVG images that can be easily edited with any text editor or SVG editor:

- `images/solbo-logo.svg` - The main logo
- `images/solbo-hero.svg` - The hero image
- `images/favicon.svg` - The browser favicon

### Colors

The color scheme can be updated in the CSS file:

1. Edit `css/style.css`
2. Modify the color variables at the top of the file:
   ```css
   :root {
       --primary-color: #9945FF;
       --secondary-color: #14F195;
       --accent-color: #F8A010;
       --dark-bg: #121212;
       --medium-bg: #1E1E1E;
       --light-bg: #2D2D2D;
       --text-light: #FFFFFF;
       --text-dim: #AAAAAA;
   }
   ```

## License

This project is available for public use. Please provide attribution if you use significant portions of the code.

## Credits

Created for the Solana Hobo community.
