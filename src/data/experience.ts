import type { Experience } from '../types';

// ─────────────────────────────────────────────
// Edit experience here. Newest first.
// ─────────────────────────────────────────────

export const experience: Experience[] = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    period: 'Jul 2026 – Dec 2026',
    location: 'Hyderabad, India',
    description: ['Details to be added after the internship begins.'],
    badge: 'incoming',
  },
  {
    company: '360 One',
    role: 'Full-Stack Developer Intern',
    period: 'Jun 2025 – Jul 2025',
    location: 'Mumbai, India',
    description: [
      'Built data visualization dashboards in Next.js for financial and operational analytics used by internal teams.',
      'Integrated frontend components with backend APIs to ensure secure data flow in fintech workflows.',
      'Worked directly with the product team to iterate on data requirements and usability.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'REST APIs'],
  },
  {
    company: 'Parikshit Student Satellite',
    role: 'Data Handling & Signal Processing Lead',
    period: 'Jan 2024 – Present',
    location: 'Manipal, India',
    description: [
      'Lead the full data handling stack for a satellite mission — from sensor drivers to communication interfaces to data logging.',
      'Built real-time ingestion pipelines for GPS telemetry over UART with validation and error-detection for corrupted packets.',
      'Designed a PWM I/O system for 100 kHz signals using TIM1/TIM2 on STM32, achieving 49.87% duty cycle and 100.25 kHz frequency accuracy.',
      'Implemented FreeRTOS for real-time task scheduling and inter-board communication on STM32 F4 and H7 series hardware.',
    ],
    tech: ['Embedded C', 'STM32', 'FreeRTOS', 'UART', 'PWM', 'STM32CubeIDE'],
    badge: 'current',
  },
  {
    company: 'Manipal The Talk Network',
    role: 'Web & App Developer',
    period: 'Nov 2023 – Apr 2024',
    location: 'Manipal, India',
    description: [
      'Built and updated internal website pages and frontend data presentation components.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];
