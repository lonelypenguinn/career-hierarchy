import React, { useState } from 'react'
import MultiStepForm, { FormValues } from './components/MultiStepForm'
import Results, { Assessment } from './components/Results'
import { careerData, Role } from './data/careerData'

const App: React.FC = () => {
  const [assessment, setAssessment] = useState<Assessment | null>(null)

  function analyze(values: FormValues) {
    // Find a role match by title (simple exact or fallback to industry median)
    const industryRoles = careerData[values.industry] || []
    let currentRole: Role | null = null
    if (values.currentJobTitle) {
      currentRole = industryRoles.find(r => r.title.toLowerCase() === values.currentJobTitle.toLowerCase()) || null
    }
    if (!currentRole && industryRoles.length > 0) {
      // fallback to median role for experience
      currentRole = industryRoles.reduce((acc, r) => (r.minExperience <= values.yearsExperience ? r : acc), industryRoles[0])
    }

    // Compute estimated market range
    const marketLow = currentRole ? currentRole.salaryRange[0] : 40000
    const marketHigh = currentRole ? currentRole.salaryRange[1] : 80000
    const marketMedian = (marketLow + marketHigh) / 2

    // Interpret user's salary (convert currencies not implemented - assume same currency for MVP)
    const userSalary = values.currentSalary || marketMedian

    const positionPct = ((userSalary - marketMedian) / marketMedian) * 100
    const salaryPosition = positionPct < -10 ? 'Below market' : positionPct > 10 ? 'Above market' : 'Around market'

    // Score 0-100: base on market position and skills match
    const skillMatches = currentRole ? currentRole.skills.filter(s => values.keySkills.map(k => k.toLowerCase()).includes(s.toLowerCase())).length : 0
    const skillScore = currentRole ? Math.min(40, (skillMatches / Math.max(1, currentRole.skills.length)) * 40) : 20
    const marketScore = Math.max(0, 50 - Math.abs(positionPct))
    const finalScore = Math.round(Math.min(100, marketScore + skillScore + 10))

    // Generate options (up to 4) from progression
    const options = (currentRole && currentRole.progression ? currentRole.progression : (currentRole ? [currentRole.title] : [])).slice(0,4).map(title => {
      const role = industryRoles.find(r => r.title === title)
      if (!role) return null
      const potentialIncrease = Math.round((( (role.salaryRange[0]+role.salaryRange[1])/2 - userSalary) / userSalary) * 100)
      const skillsNeeded = role.skills.filter(s => !values.keySkills.map(k=>k.toLowerCase()).includes(s.toLowerCase()))
      const accessibility = (values.yearsExperience >= (role.minExperience - 2)) ? 'Medium' : 'Hard'
      return {
        title: role.title,
        salaryRange: role.salaryRange,
        potentialIncrease: potentialIncrease,
        accessibility,
        skills: role.skills,
        needs: skillsNeeded
      }
    }).filter(Boolean) as any

    // Pick best move: highest potentialIncrease but accessibility not Hard
    const best = options.sort((a,b) => b.potentialIncrease - a.potentialIncrease).find(o => o.accessibility !== 'Hard') || options[0] || null

    const assessment: Assessment = {
      score: finalScore,
      scoreLabel: finalScore > 75 ? 'Very strong' : finalScore > 60 ? 'Strong position' : finalScore > 40 ? 'Average' : 'Weak',
      marketRange: [marketLow, marketHigh],
      userSalary,
      salaryPosition,
      options,
      bestMove: best,
      skillsHave: values.keySkills,
      skillsNeed: best ? best.needs : []
    }

    setAssessment(assessment)
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <h1>Know your market value. Find your next move.</h1>
          <p className="sub">See where your career stands, what you could be earning, and which move could increase your earning potential.</p>
          <button className="primary-cta" onClick={() => window.scrollTo({top:document.body.scrollHeight, behavior:'smooth'})}>Check my career</button>
          <p className="meta">Free • Takes about 60 seconds</p>
        </div>
      </header>

      <main className="container">
        {!assessment ? (
          <MultiStepForm onSubmit={analyze} />
        ) : (
          <Results assessment={assessment} onBack={() => setAssessment(null)} />
        )}
      </main>

      <footer className="footer">
        <small>Indicative market estimates — not authoritative. Data is local to this MVP.</small>
      </footer>
    </div>
  )
}

export default App
