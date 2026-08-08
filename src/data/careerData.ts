export type Role = {
  id: string
  title: string
  industry: string
  salaryRange: [number, number]
  minExperience: number
  skills: string[]
  progression?: string[]
}

export type IndustryData = Record<string, Role[]>

export const careerData: IndustryData = {
  "Accounting & Finance": [
    { id: 'acct-1', title: 'Accountant', industry: 'Accounting & Finance', salaryRange: [300000,420000], minExperience: 1, skills: ['Financial accounting','Excel','Reconciliation'], progression: ['Senior Accountant','Management Accountant','Finance Manager'] },
    { id: 'acct-2', title: 'Senior Accountant', industry: 'Accounting & Finance', salaryRange: [420000,550000], minExperience: 3, skills: ['Financial accounting','Excel','Tax','Month-end'], progression: ['Management Accountant','Finance Manager','Financial Controller'] },
    { id: 'acct-3', title: 'Management Accountant', industry: 'Accounting & Finance', salaryRange: [450000,600000], minExperience: 4, skills: ['Management accounting','Excel','Budgeting','Forecasting'], progression: ['Finance Manager','FP&A Manager'] },
    { id: 'acct-4', title: 'FP&A Analyst', industry: 'Accounting & Finance', salaryRange: [380000,520000], minExperience: 2, skills: ['Financial modelling','Excel','Forecasting'], progression: ['Senior FP&A Analyst','FP&A Manager'] },
    { id: 'acct-5', title: 'Senior FP&A Analyst', industry: 'Accounting & Finance', salaryRange: [520000,700000], minExperience: 4, skills: ['Financial modelling','Forecasting','Power BI'], progression: ['FP&A Manager','Finance Manager'] },
    { id: 'acct-6', title: 'Finance Manager', industry: 'Accounting & Finance', salaryRange: [650000,950000], minExperience: 6, skills: ['Leadership','Budgeting','Forecasting','Business partnering'], progression: ['Financial Controller','Finance Director'] },
    { id: 'acct-7', title: 'FP&A Manager', industry: 'Accounting & Finance', salaryRange: [600000,900000], minExperience: 6, skills: ['Financial modelling','Stakeholder management','Forecasting'], progression: ['Finance Director'] },
    { id: 'acct-8', title: 'Financial Controller', industry: 'Accounting & Finance', salaryRange: [700000,1000000], minExperience: 8, skills: ['Financial accounting','Controls','Reporting','Leadership'], progression: ['Finance Director','CFO'] },
    { id: 'acct-9', title: 'Finance Director', industry: 'Accounting & Finance', salaryRange: [1000000,1600000], minExperience: 10, skills: ['Strategy','Leadership','Financial planning'], progression: ['CFO'] },
    { id: 'acct-10', title: 'CFO', industry: 'Accounting & Finance', salaryRange: [1600000,3000000], minExperience: 15, skills: ['Executive leadership','Strategy','Investor relations'] }
  ],
  "Technology": [
    { id: 'tech-1', title: 'Junior Software Developer', industry: 'Technology', salaryRange: [200000,350000], minExperience: 0, skills: ['Coding','Git','Problem solving'], progression: ['Software Developer','Senior Software Developer'] },
    { id: 'tech-2', title: 'Software Developer', industry: 'Technology', salaryRange: [350000,550000], minExperience: 2, skills: ['JavaScript','APIs','Testing'], progression: ['Senior Software Developer','Tech Lead'] },
    { id: 'tech-3', title: 'Senior Software Developer', industry: 'Technology', salaryRange: [550000,900000], minExperience: 5, skills: ['System design','Leadership','Mentoring'], progression: ['Tech Lead','Engineering Manager'] },
    { id: 'tech-4', title: 'Tech Lead', industry: 'Technology', salaryRange: [800000,1200000], minExperience: 7, skills: ['Architecture','Leadership','Stakeholder mgmt'], progression: ['Engineering Manager','Engineering Director'] },
    { id: 'tech-5', title: 'Engineering Manager', industry: 'Technology', salaryRange: [1000000,1500000], minExperience: 9, skills: ['People management','Delivery','Strategy'], progression: ['Engineering Director','CTO'] },
    { id: 'tech-6', title: 'CTO', industry: 'Technology', salaryRange: [1800000,3500000], minExperience: 15, skills: ['Technology strategy','Executive leadership'] }
  ],
  "Marketing": [
    { id: 'mkt-1', title: 'Marketing Coordinator', industry: 'Marketing', salaryRange: [220000,320000], minExperience: 0, skills: ['Campaigns','Copywriting'] , progression: ['Marketing Specialist','Marketing Manager']},
    { id: 'mkt-2', title: 'Marketing Specialist', industry: 'Marketing', salaryRange: [300000,450000], minExperience: 2, skills: ['SEO','Analytics'] , progression: ['Senior Marketing Specialist','Marketing Manager']},
    { id: 'mkt-3', title: 'Marketing Manager', industry: 'Marketing', salaryRange: [500000,800000], minExperience: 5, skills: ['Strategy','Leadership','Analytics'] , progression: ['Senior Marketing Manager','Marketing Director']},
    { id: 'mkt-4', title: 'Marketing Director', industry: 'Marketing', salaryRange: [900000,1400000], minExperience: 10, skills: ['Strategy','Leadership','Brand'] , progression: ['CMO']},
    { id: 'mkt-5', title: 'CMO', industry: 'Marketing', salaryRange: [1500000,3000000], minExperience: 15, skills: ['Executive leadership','Marketing strategy']}
  ],
  "Sales": [
    { id: 'sales-1', title: 'Sales Representative', industry: 'Sales', salaryRange: [180000,300000], minExperience: 0, skills: ['Selling','CRM'] , progression: ['Account Executive','Sales Manager']},
    { id: 'sales-2', title: 'Account Executive', industry: 'Sales', salaryRange: [300000,500000], minExperience: 2, skills: ['Negotiation','Pipeline management'] , progression: ['Senior Account Executive','Sales Manager']},
    { id: 'sales-3', title: 'Sales Manager', industry: 'Sales', salaryRange: [600000,1100000], minExperience: 6, skills: ['People management','Quota setting'] , progression: ['Sales Director','VP Sales']},
    { id: 'sales-4', title: 'VP Sales', industry: 'Sales', salaryRange: [1200000,2500000], minExperience: 12, skills: ['Sales strategy','Leadership']}
  ]
}
