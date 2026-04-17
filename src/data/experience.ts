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
    description: [
      'Selected through Amazon campus recruiting — offer extended October 2025, Hyderabad office.',
      'Preparing through distributed systems fundamentals: studying consensus, replication, and how large-scale services handle throughput.',
      'Reviewing system design patterns relevant to Amazon\'s infrastructure — queueing, caching, and service decomposition.',
    ],
    badge: 'incoming',
  },
  {
    company: '360 One',
    role: 'Full-Stack Developer Intern',
    period: 'Jun 2025 – Jul 2025',
    location: 'Mumbai, India',
    description: [
      'Built analytics dashboards in Next.js — portfolio performance views, transaction summaries, and operational KPIs consumed by internal teams daily.',
      'Integrated frontend with internal REST APIs; worked through token-based auth and session management patterns in a regulated fintech environment.',
      'Owned two dashboard modules end-to-end — from requirements with the product team to deployment — with direct feedback cycles.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'REST APIs'],
  },
  {
    company: 'Parikshit Student Satellite',
    role: 'Data Handling & Signal Processing Lead',
    period: 'Jan 2024 – Present',
    location: 'Manipal, India',
    description: [
      'Lead the full data handling stack for a student satellite mission — sensor drivers, communication interfaces, telemetry logging, and ground-side data parsing.',
      'Built GPS telemetry reception over UART with packet validation and CRC error detection — handles corrupted frames without blocking the scheduler.',
      'Designed a PWM output system for 100 kHz signals on STM32 TIM1/TIM2, measured at 49.87% duty cycle and 100.25 kHz — within 0.25% of spec.',
      'Implemented FreeRTOS for concurrent task scheduling on STM32 F4 and H7: sensor polling, telemetry transmission, and health monitoring run as separate tasks with priority-based preemption.',
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
      'Maintained frontend components and content pages for the organization website across an active publication cycle.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];
