# ATHARVA.OS — Development Plan

## Overview

Building an interactive 3D portfolio website with a futuristic command-center aesthetic.
**Focus**: Frontend + 3D (backend in later phase)
**Theme**: Purple/Violet dark mode
**3D**: Hero scene + Skills network + Full 3D across sections

---

## Tech Stack

```
Next.js 16 (App Router, Turbopack)
TypeScript
Tailwind CSS v4
React Three Fiber + Drei (3D)
Motion (Framer Motion v13 — import from "motion/react")
shadcn/ui (UI components)
```

---

## Project Structure

```
atharva-os/
├── app/
│   ├── layout.tsx              # Root layout (dark theme, fonts, nav)
│   ├── page.tsx                # Home/Hero (server component)
│   ├── template.tsx            # Page transition animations
│   ├── globals.css             # Tailwind + custom CSS variables
│   ├── about/page.tsx
│   ├── work/page.tsx
│   ├── work/[slug]/page.tsx    # Project case study
│   ├── ai-lab/page.tsx
│   ├── robotics/page.tsx
│   ├── engineering-lab/page.tsx
│   ├── github/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── three/                  # 3D scenes (all 'use client')
│   │   ├── HeroScene.tsx       # Particle field + floating geometry
│   │   ├── SkillOrbit.tsx      # 3D skill constellation/network
│   │   ├── Globe.tsx           # Wireframe globe
│   │   ├── FloatingParticles.tsx
│   │   └── ArchitectureScene.tsx
│   ├── sections/               # Page section components
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── SystemStatus.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── RecruiterMode.tsx
│   │   ├── EngineeringDNA.tsx
│   │   └── Footer.tsx
│   ├── animated/               # Animation wrapper components
│   │   ├── FadeIn.tsx
│   │   ├── SlideIn.tsx
│   │   ├── TypingTerminal.tsx
│   │   └── MagneticButton.tsx
│   └── layout/
│       ├── MobileNav.tsx
│       └── SideNav.tsx
│
├── lib/
│   ├── utils.ts                # cn() helper
│   ├── data/
│   │   ├── projects.ts         # All project data
│   │   ├── skills.ts           # Skills/technologies data
│   │   ├── experience.ts       # Experience data
│   │   └── achievements.ts     # Achievements data
│   └── constants.ts            # Site-wide constants
│
├── public/
│   ├── fonts/                  # Custom fonts
│   ├── resume/                 # Resume PDF
│   └── images/                 # Static images
│
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Color System (Purple/Violet Theme)

```
Background:     #0a0a0f (near black with blue tint)
Surface:        #12121a
Surface Light:  #1a1a2e
Border:         #2a2a3e
Primary:        #8b5cf6 (violet-500)
Primary Light:  #a78bfa (violet-400)
Accent:         #c084fc (purple-400)
Glow:           #7c3aed (violet-600) with blur
Text Primary:   #f0f0f5
Text Secondary: #9ca3af
Muted:          #6b7280
Success:        #22c55e
Error:          #ef4444
```

---

## Development Phases

### Phase 1: Project Foundation
1. Initialize Next.js project with TypeScript + Tailwind
2. Install dependencies (R3F, Drei, Motion, shadcn/ui)
3. Set up Tailwind config with purple/violet theme
4. Set up custom fonts (Inter/JetBrains Mono)
5. Create root layout with dark theme
6. Set up shadcn/ui components

### Phase 2: Navigation + Layout
1. Build persistent side navigation (ATHARVA.OS style)
2. Build mobile hamburger navigation
3. Create page transition system (template.tsx)
4. Build animated page wrapper

### Phase 3: Hero Section + 3D Background
1. Build the 3D particle field / floating geometry hero scene
2. Build the Hero text overlay with terminal-style animation
3. Add system status widget
4. Add CTAs (Explore Work, Recruiter Mode, Resume, Contact)
5. Add availability status indicator

### Phase 4: Core Sections
1. About section with engineering narrative
2. Engineering DNA interactive visualization
3. Skills section with 3D skill orbit/network
4. Projects section with cards + filtering
5. Experience section with interactive timeline
6. Achievements section

### Phase 5: Interactive Features
1. Recruiter Mode (condensed view)
2. Architecture Visualizer (interactive node diagram)
3. Developer Terminal (Easter egg commands)
4. System Status Dashboard

### Phase 6: Work + Case Studies
1. Project case study pages
2. Architecture diagrams per project
3. Technology badges + linking

### Phase 7: Contact + Footer
1. Contact form with validation
2. Social links
3. Resume download CTA
4. Footer with system-style info

### Phase 8: Engineering Lab (DSA Visualizer)
1. Sorting algorithm visualizer
2. Binary search visualizer
3. Sliding window / two pointer demos
4. System design simulator

### Phase 9: AI Lab
1. AI Portfolio Assistant chat UI
2. Computer vision demo display
3. AI experiments showcase

### Phase 10: Polish + Performance
1. Scroll animations on all sections
2. Performance optimization (lazy loading 3D)
3. Accessibility audit
4. Responsive testing
5. SEO optimization

---

## 3D Scene Details

### Hero Scene
- 2000+ animated particles floating in space
- Wireframe icosahedron (central geometry)
- Orbiting torus rings
- Mouse-reactive camera movement
- Purple/violet color palette with bloom effect
- Performance: InstancedMesh for particles, adaptive count on mobile

### Skills Orbit
- Central wireframe sphere
- Skill nodes orbiting around it (text labels)
- Connected lines between related skills
- Hover to expand and show projects
- Scroll-driven rotation speed

### Architecture Visualizer
- Interactive node graph
- Click nodes to expand details
- Animated data flow lines between nodes
- Multiple project architectures

---

## Key Animation Patterns

1. **Page transitions**: AnimatePresence in template.tsx
2. **Scroll reveals**: whileInView with once:true
3. **Terminal typing**: Character-by-character animation
4. **Magnetic buttons**: Cursor-reactive button hover
5. **System boot**: Loading sequence on first visit
6. **Node connections**: SVG path animations for architecture

---

## Performance Targets

- Lighthouse score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- 3D scenes: Lazy-loaded, below the fold
- Mobile: Reduced particle count, no shadows
- Reduced motion: All animations respect prefers-reduced-motion
