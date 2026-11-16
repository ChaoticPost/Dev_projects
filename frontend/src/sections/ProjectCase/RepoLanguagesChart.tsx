import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import styles from './ProjectCaseStudy.module.css';

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  CSS: '#7d5bbe',
  Go: '#00add8',
  'Jupyter Notebook': '#da5b0b',
  HTML: '#e34c26',
  PLpgSQL: '#336790',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  PowerShell: '#4d7a9c',
  Makefile: '#427819',
  Other: '#8b8b8b',
};

const colorFor = (name: string) => LANG_COLORS[name] ?? '#8b8b8b';

interface RepoLanguagesChartProps {
  languages: Array<{ name: string; share: number }>;
}

const RepoLanguagesChart: React.FC<RepoLanguagesChartProps> = ({ languages }) => (
  <div className={styles.langChart}>
    <div className={styles.langDonut} aria-hidden="true">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={languages}
            dataKey="share"
            nameKey="name"
            innerRadius="58%"
            outerRadius="100%"
            strokeWidth={0}
            startAngle={90}
            endAngle={-270}
          >
            {languages.map((lang) => (
              <Cell key={lang.name} fill={colorFor(lang.name)} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
    <ul className={styles.langLegend}>
      {languages.map((lang) => (
        <li key={lang.name} className={styles.langLegendItem}>
          <span className={styles.langDot} style={{ background: colorFor(lang.name) }} />
          <span className={styles.langName}>{lang.name}</span>
          <span className={styles.langShare}>{lang.share}%</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RepoLanguagesChart;
