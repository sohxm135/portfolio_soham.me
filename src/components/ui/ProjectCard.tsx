import { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { GitHubIcon } from './Icons';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '14px',
        border: hovered ? '1px solid rgba(99,102,241,0.35)' : '1px solid rgba(255,255,255,0.07)',
        background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.025)',
        padding: '24px',
        transition: 'border-color 0.2s, background 0.2s',
        cursor: 'default',
      }}
    >
      {/* Active dot */}
      {project.status === 'active' && (
        <span style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#34d399',
          boxShadow: '0 0 8px #34d399',
        }} />
      )}

      <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#f4f4f5', marginBottom: '10px' }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.65, flex: 1, marginBottom: '18px' }}>
        {project.description}
      </p>

      {/* Tech badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
        {project.tech.map((t) => (
          <span key={t} style={{
            fontSize: '11px',
            fontFamily: 'monospace',
            color: '#a1a1aa',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '5px',
            padding: '2px 8px',
            background: 'rgba(255,255,255,0.03)',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            fontSize: '12px', color: '#71717a', textDecoration: 'none', transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#e4e4e7')}
          onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
          >
            <GitHubIcon size={13} /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            fontSize: '12px', color: '#71717a', textDecoration: 'none', transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#e4e4e7')}
          onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
          >
            <ExternalLink size={13} /> Demo
          </a>
        )}
        {project.docs && (
          <a href={project.docs} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            fontSize: '12px', color: '#71717a', textDecoration: 'none', transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#e4e4e7')}
          onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
          >
            <FileText size={13} /> Docs
          </a>
        )}
      </div>
    </motion.div>
  );
}
