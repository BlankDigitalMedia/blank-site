export const PROMPTS = {
  neovim: `I'm learning to code and want to understand Neovim. Can you guide me through:
1. Why developers choose Neovim over traditional editors
2. The basics of modal editing (normal, insert, visual modes)
3. Essential navigation commands (h, j, k, l, w, b, e, $, 0, gg, G)
4. Basic file operations (opening, saving, searching)
5. How to customize it with a simple .config setup

Please explain each concept with practical examples and keep it beginner-friendly.`,

  terminal: `I'm learning terminal file management. Can you teach me:
1. Basic navigation commands (cd, ls, pwd)
2. File operations (touch, mv, cp, rm, mkdir)
3. How directory structures work
4. Why terminal navigation helps you understand your codebase better
5. Best practices for organizing files and directories

Please give me practical examples I can try right now.`,

  git: `I want to master Git from the command line. Can you guide me through:
1. The fundamental concepts (staging, commits, branches)
2. Essential daily commands (status, add, commit, push, pull)
3. How to read git status output and understand what it's telling me
4. Branch management basics (checkout, merge, branch)
5. How to fix common mistakes (unstaging, amending commits)

Please explain each concept with real-world scenarios I'll encounter.`,

  tmux: `I want to master tmux for terminal workflow. Can you teach me:
1. What tmux is and why it's powerful for developers
2. Session, window, and pane concepts
3. Essential keybindings (creating panes, switching between them, resizing)
4. How to set up a basic .tmux.conf
5. Practical workflows for coding with tmux

Please show me how to build a development cockpit with split panes.`,

  aerospace: `I want to master keyboard-driven window management with AeroSpace. Can you guide me through:
1. What tiling window managers are and why they improve focus
2. Core AeroSpace concepts and commands
3. Essential keybindings for moving and resizing windows
4. How to set up workspaces for different projects
5. Best practices for a mouse-free workflow

Please help me build a setup where I can navigate everything with my keyboard.`,
} as const;

export type PromptId = keyof typeof PROMPTS;
