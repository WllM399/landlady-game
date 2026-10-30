---
name: Die Wirtin
description: Ein handillustriertes Erzählspiel mit unheimlichem Bilderbuchcharakter.
colors:
  primary: "#344943"
  secondary: "#987c46"
  tertiary: "#a84735"
  paper: "#eee3ca"
  paper-light: "#f8f2e4"
  ink: "#282a25"
  muted: "#55574d"
  line: "#c9b998"
  focus: "#124f70"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 4vw, 3.35rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, Segoe UI, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sm: "3px"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "34px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
---

# Design System: Die Wirtin

## Overview

**Creative North Star: “The Hand-Inked Storybook.”**

The interface feels like a well-kept illustrated storybook whose familiar paper and dark ink conceal something unsettling. Deep green scenes and restrained rusty marks carry the tension. Warm page surfaces keep the story readable and give the notebook a natural home.

The game keeps its own visual identity. Deponia informed the point-and-click interaction only; no characters, scenes, or graphics from that game appear here. The scenes are drawn with local Canvas code, so the project has no required image downloads or generated art assets.

**Key Characteristics:**

- Warm paper frames a dark, illustrated scene.
- Serif headlines give the story a literary voice; sans-serif text keeps controls clear.
- Rust-red markers invite exploration; forest-green markers mean a clue has been found.
- One slow page-like transition joins the source story to the continuation.

## Colors

The palette pairs aged paper and deep ink with small amounts of forest green, brass, and rust.

### Primary
- **Pension Green** (#344943): Main navigation and the action that advances the story.
- **Old Brass** (#987c46): Quiet emphasis and the small marks that guide attention.
- **Rust Ink** (#a84735): Unfound clues and the moments that turn the story.

### Neutral
- **Story Paper** (#eee3ca): The page background.
- **Open Page** (#f8f2e4): Reading panels where longer text needs a lighter ground.
- **Book Ink** (#282a25): Headlines and primary text.
- **Soft Ink** (#55574d): Secondary labels and helper text.
- **Page Rule** (#c9b998): Dividers and the edges of paper surfaces.
- **Focus Blue** (#124f70): Keyboard focus, chosen for contrast against the warm paper.

**The Ink-Mark Rule.** Rust is a scarce clue marker, not a general decoration color.

## Typography

**Display Font:** Playfair Display (with Georgia and Times New Roman fallbacks).  
**Body Font:** DM Sans (with Segoe UI and Arial fallbacks).

**Character:** The display face makes titles feel literary without making scene copy hard to scan. Body text stays plain and open; labels use letter spacing only when they act as small wayfinding marks.

### Hierarchy
- **Display** (600, `clamp(2rem, 4vw, 3.35rem)`, line height 1.08): The opening title and the notebook title.
- **Headline** (600, `clamp(1.4rem, 2.6vw, 2rem)`): The current location.
- **Title** (600, `1.55rem`): The narration panel and journal entries.
- **Body** (400, `16px`, line height 1.55): Scene instructions and longer story text.
- **Label** (700, `0.72rem`, tracking `0.1em`, uppercase): Place names and small status labels.

## Layout

The first view puts the current illustrated room beside a narrow narration panel. The scene holds the largest share of the width; the copy and its found clues remain readable beside it. A small chapter indicator sits above both, and the notebook opens below the scene instead of interrupting it in a modal.

On narrower screens, the narration moves below the scene and the controls remain in the same order. The illustration keeps its 16:9 shape so the positions of its clickable clues do not shift. Page content uses a centered, fluid container with more space around chapter headings than around related controls.

## Elevation & Depth

The interface is flat. Fine warm rules define the scene and reading panels, with tonal differences between paper surfaces doing the rest. Focus is shown with a high-contrast outline, not a decorative glow.

## Shapes

Paper panels have small, nearly square corners (3px). Hotspot markers are round because they represent points in the scene. The scene itself keeps a straight frame and a restrained inner rule, like an illustration mounted on a book page.

## Components

### Scene and hotspots

The Canvas scene is the main surface. Clickable clues sit above it as faint, dashed outlines; hovering or focusing reveals a stronger ring. Examined clues keep a subtle solid outline. The map lists visited scenes as navigation targets and keeps future locations unnamed.

### Actions and navigation

The filled forest button advances the story after all clues in the current scene are found. Quiet paper buttons control the notebook and let players revisit the previous room. Keyboard focus always receives a clear outline.

### Notizbuch

The notebook is a paper section in the page flow, with tabs for discovered clues and the story so far. It keeps previously uncovered text available without revealing future scenes.

## Do's and Don'ts

### Do:
- **Do** preserve the hand-illustrated, lightly eerie storybook mood.
- **Do** keep scene art, hotspots, narration, and navigation in this visual order.
- **Do** honor reduced-motion preferences and keep every clue reachable by keyboard.
- **Do** keep the scene backgrounds local and self-contained.

### Don't:
- **Don't** reuse Deponia's artwork, characters, or exact interface styling.
- **Don't** reveal story notes before the player reaches their scene.
- **Don't** add extra plot events, endings, or a moving player character.
