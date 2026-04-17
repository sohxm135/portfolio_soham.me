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
    description: 'Android SOS app with three independent triggers — physical button, voice command, and accelerometer shake — plus a passive dead man\'s switch that fires alerts if you miss a scheduled check-in.',
    longDescription:
      'The problem: most safety apps require you to unlock your phone and navigate to a button. That\'s not a real emergency UX. SafeNet runs two independent systems simultaneously: an active SOS layer with 3 trigger paths, and Safe Travel Mode — a countdown that automatically alerts your emergency contacts if you don\'t check in before the window closes.\n\nThe hardest engineering problem was Android\'s battery optimization. The OS aggressively kills background services — which is exactly what Safe Travel Mode can\'t afford. Solved it with a foreground service and persistent notification: Android treats foreground services with higher process priority and won\'t kill them under memory pressure.\n\nReal-time alert delivery via Firebase Firestore. SHA-256 hashing on alert payloads so recipients can verify the alert content wasn\'t modified in transit. Firebase Auth for account management.',
    tech: ['Kotlin', 'Android SDK', 'Firebase', 'Firestore', 'Firebase Auth'],
    github: 'https://github.com/sohxm135', // TODO: replace with SafeNet repo link
    demo: '', // TODO: add APK link
    featured: true,
    status: 'completed',
  },
  {
    id: 'prison-management',
    title: 'Prison Management System',
    description: 'Full-stack inmate and staff management system — normalized Oracle SQL schema across 12+ tables, role-based access control, and analytics on population, incidents, and upcoming paroles.',
    longDescription:
      'Started with the data model: 12+ normalized tables covering inmates, cells, blocks, staff assignments, incident reports, transfers, and parole records. The challenge was designing a schema that handles both transactional writes (new incident, cell reassignment) and reporting reads (population by block, incident frequency per officer, paroles due this week) without coupling them.\n\nChose Oracle SQL specifically for its row-level locking behavior — in a system where multiple staff might update the same inmate record simultaneously, isolation guarantees matter more than raw write speed.\n\nREST API in Express.js with middleware-level RBAC. Guards, wardens, and admins each get a structurally different view of the same underlying data — enforced at the API layer, not the frontend. All write operations produce audit log entries: who changed what, and when.',
    tech: ['Node.js', 'Express.js', 'Oracle SQL', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/sohxm135/Prison_ManagementSystem',
    featured: true,
    status: 'completed',
  },
  {
    id: 'easypark',
    title: 'EasyPark',
    description: 'Bare-metal proximity system on LPC1768 ARM Cortex-M3 — microsecond-precision trigger pulses via hardware timers, interrupt-driven distance calculation, no operating system.',
    longDescription:
      'The HC-SR04 ultrasonic sensor requires a precise 10μs trigger pulse followed by echo pulse width measurement to calculate distance. Software delays introduce drift under load. Solved this by configuring TIM peripheral registers directly to generate the trigger and timestamp echo edge transitions in hardware — no busy-waiting.\n\nDistance computation runs in the ISR: pulse width → time of flight → distance in cm → threshold comparison → GPIO output driving LED and buzzer. No RTOS — all concurrency handled through interrupt priority levels and ISR-safe variable access.\n\nDeliberate exercise in bare-metal embedded: direct register manipulation, interrupt vector configuration, and understanding how MCU peripheral timing constraints affect sensor accuracy.',
    tech: ['Embedded C', 'LPC1768', 'ARM Cortex-M3', 'Keil', 'HC-SR04'],
    github: 'https://github.com/sohxm135/Easy_Park',
    featured: false,
    status: 'completed',
  },
];
