# Blog Post Authoring Guide

## Adding GIFs to Posts

All animated media (local videos, Tenor embeds) should be wrapped in the `Figure` component for consistent styling.

### Local Video GIFs

```jsx
import { Figure } from "@/app/(post)/components/figure";

<Figure caption="Optional caption here">
  <video autoPlay loop muted playsInline src="/gifs/your-video.mp4" />
</Figure>
```

### Tenor GIFs

```jsx
import Tenor from "@/app/(post)/components/Tenor";
import { Figure } from "@/app/(post)/components/figure";

<Figure caption="Optional caption here">
  <Tenor 
    postid="26595552" 
    aspectRatio="1.77778" 
    width="100%" 
    title="your-gif-title-slug" 
    displayTitle="Your GIF Display Title" 
    searchLink="https://tenor.com/search/your-search-gifs" 
  />
</Figure>
```

**Notes:**
- Always wrap media in `<Figure>` for consistent framing and styling
- Caption is optional but recommended for context
- Tenor script loads globally, so gifs work on navigation without hard refresh
- Local videos are preferred for performance when possible

## Adding Learning Prompts

Use the `CopyPrompt` component to add inline clipboard buttons for educational content:

```jsx
import CopyPrompt from "@/components/CopyPrompt";

This paragraph talks about Neovim and how it works. <CopyPrompt id="neovim" />
```

Available prompt IDs:
- `neovim` - Neovim editor basics
- `terminal` - Terminal file management
- `git` - Git CLI fundamentals
- `tmux` - tmux terminal multiplexer
- `aerospace` - AeroSpace window management

Add new prompts in `/lib/prompts.ts` as needed.
