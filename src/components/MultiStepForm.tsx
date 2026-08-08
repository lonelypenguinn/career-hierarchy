import React, { useState } from 'react'

export type FormValues = {
  country: string
  city: string
  currentJobTitle: string
  industry: string
  yearsExperience: number
  highestQualification?: string
  professionalQualifications?: string
  keySkills: string[]
  currentSalary?: number
  currency?: string
  goal?: string
}

export default function MultiStepForm({ onSubmit }: { onSubmit: (values: FormValues) => void }) {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState<FormValues>({
    country: 'South Africa',
    city: '',
    currentJobTitle: '',
    industry: 'Accounting & Finance',
    yearsExperience: 2,
    highestQualification: 'Bachelor',
    professionalQualifications: '',
    keySkills: [],
    currentSalary: undefined,
    currency: 'ZAR',
    goal: 'Earn more'
  })
  const [skillInput, setSkillInput] = useState('')

  function update<K extends keyof FormValues>(k: K, v: FormValues[K]) {
    setValues(prev => ({ ...prev, [k]: v }))
  }

  function addSkill() {
    if (!skillInput) return
    update('keySkills', [...values.keySkills, skillInput])
    setSkillInput('')
  }

  return (
    <div className="form-card">
      <h2>Career assessment</h2>
      <div className="progress">Step {step} of 4</div>

      {step === 1 && (
        <div className="step">
          <label>Country
            <input value={values.country} onChange={e=>update('country', e.target.value)} />
          </label>
          <label>City
            <input value={values.city} onChange={e=>update('city', e.target.value)} />
          </label>
          <label>Current job title
            <input value={values.currentJobTitle} onChange={e=>update('currentJobTitle', e.target.value)} placeholder="e.g. Accountant" />
          </label>
          <label>Industry
            <select value={values.industry} onChange={e=>update('industry', e.target.value)}>
              <option>Accounting & Finance</option>
              <option>Technology</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </label>
          <label>Years of professional experience
            <input type="number" min={0} value={values.yearsExperience} onChange={e=>update('yearsExperience', Number(e.target.value))} />
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <label>Highest qualification
            <input value={values.highestQualification} onChange={e=>update('highestQualification', e.target.value)} />
          </label>
          <label>Professional qualifications
            <input value={values.professionalQualifications} onChange={e=>update('professionalQualifications', e.target.value)} />
          </label>
          <label>Key skills
            <div className="skill-entry">
              <input value={skillInput} onChange={e=>setSkillInput(e.target.value)} placeholder="Add a skill and press Add" />
              <button type="button" onClick={addSkill}>Add</button>
            </div>
            <div className="skills-list">
              {values.keySkills.map((s, i) => (
                <span className="skill" key={i}>{s} <button onClick={()=>update('keySkills', values.keySkills.filter((_,idx)=>idx!==i))}>×</button></span>
              ))}
            </div>
          </label>
        </div>
      )}

      {step === 3 && (
        <div className="step">
          <label>Current annual salary
            <input type="number" value={values.currentSalary ?? ''} onChange={e=>update('currentSalary', e.target.value ? Number(e.target.value) : undefined)} />
          </label>
          <label>Currency
            <input value={values.currency} onChange={e=>update('currency', e.target.value)} />
          </label>
        </div>
      )}

      {step === 4 && (
        <div className="step">
          <label>Where do you want to go?
            <select value={values.goal} onChange={e=>update('goal', e.target.value)}>
              <option>Earn more</option>
              <option>Get promoted</option>
              <option>Change career</option>
              <option>Become a manager</option>
              <option>Reach executive level</option>
              <option>Not sure</option>
            </select>
          </label>
        </div>
      )}

      <div className="actions">
        {step > 1 && <button onClick={()=>setStep(s=>s-1)}>Back</button>}
        {step < 4 && <button className="primary" onClick={()=>setStep(s=>s+1)}>Next</button>}
        {step === 4 && <button className="primary" onClick={()=>onSubmit(values)}>See my assessment</button>}
      </div>
    </div>
  )
}
