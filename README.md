# Anti-Eviction-Act-Game

## Setup

```bash
npm ci
npm run build
```

Start the game locally with:

```bash
npm start
```

The preview server binds to `$PORT`, which allows it to run on Glitch.

### Troubleshooting

Make sure you are using Node 20. If the page 404s on Glitch, verify that
`npm start` runs `vite preview` and that the build step completed without
errors.
