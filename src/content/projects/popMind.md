---
title: "popmind"
subtitle: "Evaluating web accessibility compliance and identifying barriers for users with assistive technologies."
image: "./assets/img/projects/popmind.avif"
order: 2
columns:
  - title: "Client"
    items:
      - "Sprinter (case study)"
  - title: "My Role"
    items:
      - "UX/UI Designer"
      - "Accessibility auditor"
  - title: "Tools"
    items:
      - "Tanaguru Contrast Finder"
      - "Chrome DevTools"
      - "VoiceOver"
      - "Wave"
  - title: "Applied Regulations"
    items:
      - "WCAG 2.2 Level AA"
---

## Objective

Evaluate the Sprinter website's compliance with accessibility standards from a visual, structural, and functional perspective, in order to identify barriers that prevent an equitable experience for all users, especially those who use assistive technologies or navigate with visual, motor, or cognitive limitations.

## Methodology

- Manual review of key components (home, navigation, forms, buttons, images)
- Validation of contrast and semantic structure using automatic tools
- Comparative analysis against WCAG 2.2 level AA criteria

## Key Findings

### General Considerations

#### Color Contrast

The following image is a color matrix, generated from the main colors of the Sprinter website.

##### Issue 1: Insufficient Contrast

The `#C2C2C2` color with the `#FFFFFF` color has a contrast ratio of **1.7:1**. Therefore, it is insufficient.

###### Example 1 from Sprinter Website: Seeker

> **Recommendation:** Use a contrast ratio of 4.5:1. For large text, you can use a minimum ratio of 3.0:1.

##### Issue 2: Low Contrast for Regular Text

The `#828282` color with the `#FFFFFF` color has a contrast ratio of **3.8:1**. It's okay for large text, but not for regular text as is the case.

###### Example 2 from Sprinter Website: Seeker

> **Recommendation:** Use a contrast ratio of 4.5:1. For large text, you can use a minimum ratio of 3.0:1.
