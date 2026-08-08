import React from 'react'

export type Assessment = {
  score: number
  scoreLabel: string
  marketRange: [number, number]
  userSalary: number
  salaryPosition: string
  options: Array<{
    title: string
    salaryRange: [number, number]
    potentialIncrease: number
    accessibility: string
    skills: string[]
    needs: string[]
  }>
  bestMove: any | null
  skillsHave: string[]
  skillsNeed: string[]
}

export default function Results({ assessment, onBack }: { assessment: Assessment, onBack: ()=>void }) {
  return (
    <div className="results">
      <button className="back" onClick={onBack}>← Edit inputs</button>

      <section className="signal">
        <h3>YOUR CAREER SIGNAL</h3>
        <div className="score">{assessment.score} / 100</div>
        <div className="score-label">{assessment.scoreLabel}</div>
        <p className="muted">This is an indicative assessment based on the information you entered.</p>
      </section>

      <section className="card">
        <h4>Estimated market range</h4>
        <div className="market">{formatCurrency(assessment.marketRange[0])} – {formatCurrency(assessment.marketRange[1])}</div>
        <div className="your">Your salary: {formatCurrency(assessment.userSalary)}</div>
        <div className="position">Market position: {assessment.salaryPosition}</div>
        <p className="muted small">Salary estimates are indicative and depend on location, industry, company, experience and qualifications.</p>
      </section>

      {assessment.bestMove && (
        <section className="card highlight">
          <h4>YOUR HIGHEST-VALUE NEXT MOVE</h4>
          <div className="move-title">{assessment.bestMove.title}</div>
          <div className="move-sal">Potential: {formatCurrency(assessment.bestMove.salaryRange[0])} – {formatCurrency(assessment.bestMove.salaryRange[1])}</div>
          <div className="move-inc">Potential increase: {assessment.bestMove.potentialIncrease}%</div>
          <p className="muted small">{`Based on what you entered, ${assessment.bestMove.title} looks like a realistic next target.`}</p>
        </section>
      )}

      <section>
        <h4>YOUR OPTIONS</h4>
        <div className="options-grid">
          {assessment.options.map((o, i) => (
            <div className="option-card" key={i}>
              <div className="opt-title">{o.title}</div>
              <div className="opt-sal">{formatCurrency(o.salaryRange[0])} – {formatCurrency(o.salaryRange[1])}</div>
              <div className="opt-inc">Potential: {o.potentialIncrease}%</div>
              <div className="opt-access">Accessibility: {o.accessibility}</div>
              <div className="opt-skills">Skills: {o.skills.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h4>WHAT'S BETWEEN YOU AND YOUR NEXT MOVE?</h4>
        <div className="skills">
          <div>
            <strong>Skills you have</strong>
            <ul>
              {assessment.skillsHave.map((s,i)=> <li key={i}>✓ {s}</li>)}
            </ul>
          </div>
          <div>
            <strong>Needs development</strong>
            <ul>
              {assessment.skillsNeed.map((s,i)=> <li key={i}>→ {s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="decision card">
        <h4>YOUR NEXT MOVE</h4>
        <p className="muted">Don't chase the highest-paying role yet. Focus on realistic accessibility and skills development.</p>
        {assessment.bestMove && (
          <div>
            <p><strong>Recommendation:</strong> Target {assessment.bestMove.title} over the next 12–18 months.</p>
            <ol>
              <li>Skill to develop: {assessment.skillsNeed[0] ?? 'Domain-specific technical skill'}</li>
              <li>Type of role to target: {assessment.bestMove.title}</li>
              <li>Salary to target: {formatCurrency((assessment.bestMove.salaryRange[0] + assessment.bestMove.salaryRange[1]) / 2)}</li>
            </ol>
          </div>
        )}
      </section>

    </div>
  )
}

function formatCurrency(n: number) {
  return 'R' + Math.round(n).toLocaleString()
}
