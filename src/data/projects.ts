import type { Project } from '../types';

// ─────────────────────────────────────────────
// Edit projects here. To add a new project,
// copy an existing block and paste at the top.
// Set featured: true to show it first.
// ─────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: 'safenet',
    title: 'SafeNet',
    description: 'Android safety app with multi-trigger SOS, automated travel alerts, and cryptographic data integrity.',
    longDescription:
      'Built for situations where manual SOS activation is too slow. SafeNet provides multiple activation methods and a Safe Travel Mode that automatically alerts your contacts if you don\'t check in on schedule. Uses Firebase for real-time alerting and cryptographic hashing for data integrity.',
    tech: ['Kotlin', 'Android SDK', 'Firebase', 'Firestore', 'Firebase Auth'],
    github: 'https://github.com/sohxm135', // TODO: replace with SafeNet repo link
    demo: '', // TODO: add APK link or Play Store link
    featured: true,
    status: 'completed',
  },
  {
    id: 'prison-management',
    title: 'Prison Management System',
    description: 'Full-stack web app for managing inmates, staff, and incidents with role-based access and an analytics dashboard.',
    longDescription:
      'Designed the full database schema from scratch — ER diagrams, normalized multi-table Oracle SQL, optimized queries. Built a REST API with Express.js handling all CRUD operations and complex reporting queries. Implemented role-based access control and audit trails for compliance.',
    tech: ['Node.js', 'Express.js', 'Oracle SQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/sohxm135/Prison_ManagementSystem',
    featured: true,
    status: 'completed',
  },
  {
    id: 'easypark',
    title: 'EasyPark',
    description: 'Embedded parking sensor system on LPC1768 with real-time distance measurement and threshold-based alerts.',
    longDescription:
      'Built on an LPC1768 ARM Cortex-M3 MCU with an HC-SR04 ultrasonic sensor. The system measures distance in real time, triggers visual and audio alerts at configurable thresholds, and logs sensor data for later analysis.',
    tech: ['Embedded C', 'LPC1768', 'ARM Cortex-M3', 'Keil', 'HC-SR04'],
    github: 'https://github.com/sohxm135/Easy_Park',
    featured: false,
    status: 'completed',
  },
];
