# 🚀 Project Development Guidelines

This document outlines the core architectural principles and development practices for this project.

# Standard Workflow

1. **Plan First**: Before coding, analyze the problem, review relevant codebase files, and outline a detailed plan in `todo.md`.
2. **Task Breakdown**: The `todo.md` plan should list actionable items, allowing for clear progress tracking.
3. **Verification**: Before starting implementation, I will present the plan for your review and approval.
4. **Iterative Development**: Work through `todo.md` items, marking them complete as you go.
5. **Concise Updates**: After each significant step or code change, I will provide a high-level explanation of the modifications.
6. **Simplicity & Modularity**: All tasks and code changes will prioritize simplicity, aiming for minimal impact on existing code and adhering to the KISS principle.
7. **Review & Summary**: Upon completion of a task or phase, a review section will be added to `todo.md`, summarizing changes and relevant information.

## 1. Technology Stack & Best Practices

- **Framework**: Next.js (latest stable version)
  - Utilize the App Router with React Server Components for optimal performance and modern development patterns.
- **Styling**: Tailwind CSS v4 (latest stable version)
  - Employ the new config-free approach, defining custom themes and variables directly within `src/app/globals.css`.
  - Leverage the `@tailwindcss/vite` plugin for the new Rust-based engine.
- **UI Components**: Shadcn/ui philosophy
  - Prioritize building reusable, composable components following Shadcn/ui's approach, even if not directly using the library.
- **Animations**: motion.dev (latest stable version)
  - Use `motion.dev` (formerly Framer Motion) for all animations, focusing on its powerful features for interactive and narrative animations.
- **3D Graphics**: Three.js / React Three Fiber (R3F) (latest stable versions)
  - Integrate for advanced 3D backgrounds and interactive elements as per design requirements.
- **Advanced Animations**: GSAP (latest stable version)
  - Consider GSAP for highly complex or timeline-based animations where `motion.dev` might be less suited.

## 2. Core Development Principles

- **DRY (Don't Repeat Yourself)**:
  - Promote code reusability through a component-driven architecture.
  - Centralize common logic, utility functions, and animation variants.
- **KISS (Keep It Simple, Stupid)**:
  - Favor minimalist abstractions and straightforward solutions over overly complex patterns.
  - Ensure code is easy to understand, maintain, and debug.
- **Content First**: Prioritize content and structural integrity, including layout, styling, copy, and media (images, videos), before layering on complex animations and interactivity.
- **Progressive Enhancement**: Build a solid, functional base that works well, then enhance it with advanced features.
- **Performance**: Optimize for fast load times and smooth user experiences.
- **Accessibility**: Ensure the application is usable by everyone, regardless of ability.
- **Content Source**: All website copy MUST be sourced directly from `website_copy_structure.md` to ensure consistency and adherence to approved messaging.

## 3. Implementation Phases (High-Level)

1.  **Foundational Build (Layout, Styles & Content)**:
    - Establish core project structure.
    - Implement static layouts and content for all sections.
    - Apply base styling with Tailwind CSS v4.
2.  **Narrative Animation & Interactivity**:
    - Integrate `motion.dev` for scroll-linked, entrance, and gesture-based animations.
    - Implement advanced interactive elements (e.g., 3D models, custom cursors).

## 4. Code Quality & Consistency

- **ESLint**: Enforce code style and best practices automatically.
- **TypeScript**: Utilize TypeScript for type safety and improved developer experience.
- **Documentation**: Maintain clear and concise documentation for complex components and logic.

## 5. Project Management & Workflow

- **Agile Approach**: Follow an agile methodology, likely with short sprints (e.g., 1-2 weeks) to allow for iterative development and feedback.
- **Version Control**: Use Git for version control.
  - **Branching Strategy**: For each development session or sprint, create a new feature branch from `main`.
  - **Workflow**: Work on the feature branch, commit changes, and at the end of the session, merge the feature branch back into `main` (preferably via a pull request for review).
  - **Clean History**: Maintain a clean commit history with descriptive commit messages.
  - **Main Branch**: Ensure the `main` branch always reflects a stable, deployable state.
- **Documentation**: Keep documentation up-to-date and relevant.
  - This `project_rules.md` file will serve as a central reference.
  - Consider additional documentation for complex features, API integrations, or deployment steps.
- **Task Management**: Use a simple task tracking system (e.g., GitHub Issues, Trello) to manage features, bugs, and enhancements.
