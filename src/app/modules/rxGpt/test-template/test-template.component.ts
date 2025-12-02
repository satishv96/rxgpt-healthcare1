

 // There are several types of health insurance, each with different structures and benefits. 
 // The main types include: 
 // 1. **HMO (Health Maintenance Organization):** Typically offers lower premiums and out-of-pocket costs but limits your choice of doctors and hospitals to a specific network. You usually need a primary care physician (PCP) to refer you to specialists. 
 // 2. **PPO (Preferred Provider Organization):** Provides more flexibility than an HMO. You don't need a PCP referral to see a specialist, and you can see out-of-network providers, though at a higher cost. Premiums are generally higher than HMOs. 
 // 3. **EPO (Exclusive Provider Organization):** A hybrid of HMO and PPO. You don't need a referral to see specialists, but you are generally limited to a network of providers, similar to an HMO. Out-of-network care is usually not covered except in emergencies. 
 // 4. **POS (Point of Service):** Combines features of HMOs and PPOs. You can choose between an in-network option (like an HMO, requiring a PCP referral) and an out-of-network option (like a PPO, but with higher costs). 
 // 5. **HDHP (High-Deductible Health Plan):** Features a higher deductible than traditional insurance plans. This usually results in lower monthly premiums. HDHPs are often paired with a Health Savings Account (HSA), allowing you to save money tax-free for medical expenses. 
 // 6. **Catastrophic Health Plans:** These plans have very high deductibles and are primarily designed to protect you from very high medical costs in case of a serious illness or accident. They generally have lower monthly premiums and are available only to people under 30 or those with a hardship exemption. 
 // 7. **Short-Term Health Insurance:** These plans provide temporary coverage for a limited period (e.g., three months to a year). They are not considered minimum essential coverage under the Affordable Care Act (ACA) and often don't cover pre-existing conditions or essential health benefits. 
 // 8. **Medicaid:** A joint federal and state program that provides health coverage to low-income adults, children, pregnant women, elderly adults, and people with disabilities. 
 // 9. **Medicare:** A federal health insurance program primarily for people aged 65 or older, some younger people with certain disabilities, and people with End-Stage Renal Disease (permanent kidney failure requiring dialysis or a transplant). It has different parts (A, B, C, D) covering various services. When choosing a plan, it's important to consider factors like premiums, deductibles, co-pays, co-insurance, network size, and whether you need referrals to see specialists.


 // There are several types of health insurance, each with different structures and benefits. The main types include: 1. **HMO (Health Maintenance Organization):** Typically offers lower premiums and out-of-pocket costs but limits your choice of doctors and hospitals to a specific network. You usually need a primary care physician (PCP) to refer you to specialists. 2. **PPO (Preferred Provider Organization):** Provides more flexibility than an HMO. You don't need a PCP referral to see a specialist, and you can see out-of-network providers, though at a higher cost. Premiums are generally higher than HMOs. 3. **EPO (Exclusive Provider Organization):** A hybrid of HMO and PPO. You don't need a referral to see specialists, but you are generally limited to a network of providers, similar to an HMO. Out-of-network care is usually not covered except in emergencies. 4. **POS (Point of Service):** Combines features of HMOs and PPOs. You can choose between an in-network option (like an HMO, requiring a PCP referral) and an out-of-network option (like a PPO, but with higher costs). 5. **HDHP (High-Deductible Health Plan):** Features a higher deductible than traditional insurance plans. This usually results in lower monthly premiums. HDHPs are often paired with a Health Savings Account (HSA), allowing you to save money tax-free for medical expenses. 6. **Catastrophic Health Plans:** These plans have very high deductibles and are primarily designed to protect you from very high medical costs in case of a serious illness or accident. They generally have lower monthly premiums and are available only to people under 30 or those with a hardship exemption. 7. **Short-Term Health Insurance:** These plans provide temporary coverage for a limited period (e.g., three months to a year). They are not considered minimum essential coverage under the Affordable Care Act (ACA) and often don't cover pre-existing conditions or essential health benefits. 8. **Medicaid:** A joint federal and state program that provides health coverage to low-income adults, children, pregnant women, elderly adults, and people with disabilities. 9. **Medicare:** A federal health insurance program primarily for people aged 65 or older, some younger people with certain disabilities, and people with End-Stage Renal Disease (permanent kidney failure requiring dialysis or a transplant). It has different parts (A, B, C, D) covering various services. When choosing a plan, it's important to consider factors like premiums, deductibles, co-pays, co-insurance, network size, and whether you need referrals to see specialists.


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HealthInsuranceType {
  id: number;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-test-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-template.component.html',
  styleUrl: './test-template.component.css'
})
export class TestTemplateComponent {
  insuranceTypes: HealthInsuranceType[] = [
    {
      id: 1,
      name: 'HMO',
      fullName: 'Health Maintenance Organization',
      description: 'Typically offers lower premiums and out-of-pocket costs but limits your choice of doctors and hospitals to a specific network. You usually need a primary care physician (PCP) to refer you to specialists.',
      icon: '🏥',
      color: '#4A90E2'
    },
    {
      id: 2,
      name: 'PPO',
      fullName: 'Preferred Provider Organization',
      description: 'Provides more flexibility than an HMO. You don\'t need a PCP referral to see a specialist, and you can see out-of-network providers, though at a higher cost. Premiums are generally higher than HMOs.',
      icon: '🔄',
      color: '#7B68EE'
    },
    {
      id: 3,
      name: 'EPO',
      fullName: 'Exclusive Provider Organization',
      description: 'A hybrid of HMO and PPO. You don\'t need a referral to see specialists, but you are generally limited to a network of providers, similar to an HMO. Out-of-network care is usually not covered except in emergencies.',
      icon: '🔐',
      color: '#50C878'
    },
    {
      id: 4,
      name: 'POS',
      fullName: 'Point of Service',
      description: 'Combines features of HMOs and PPOs. You can choose between an in-network option (like an HMO, requiring a PCP referral) and an out-of-network option (like a PPO, but with higher costs).',
      icon: '📍',
      color: '#FF6B6B'
    },
    {
      id: 5,
      name: 'HDHP',
      fullName: 'High-Deductible Health Plan',
      description: 'Features a higher deductible than traditional insurance plans. This usually results in lower monthly premiums. HDHPs are often paired with a Health Savings Account (HSA), allowing you to save money tax-free for medical expenses.',
      icon: '💰',
      color: '#F39C12'
    },
    {
      id: 6,
      name: 'Catastrophic',
      fullName: 'Catastrophic Health Plans',
      description: 'These plans have very high deductibles and are primarily designed to protect you from very high medical costs in case of a serious illness or accident. They generally have lower monthly premiums and are available only to people under 30 or those with a hardship exemption.',
      icon: '🚨',
      color: '#E74C3C'
    },
    {
      id: 7,
      name: 'Short-Term',
      fullName: 'Short-Term Health Insurance',
      description: 'These plans provide temporary coverage for a limited period (e.g., three months to a year). They are not considered minimum essential coverage under the Affordable Care Act (ACA) and often don\'t cover pre-existing conditions or essential health benefits.',
      icon: '⏱️',
      color: '#9B59B6'
    },
    {
      id: 8,
      name: 'Medicaid',
      fullName: 'Medicaid',
      description: 'A joint federal and state program that provides health coverage to low-income adults, children, pregnant women, elderly adults, and people with disabilities.',
      icon: '🏛️',
      color: '#1ABC9C'
    },
    {
      id: 9,
      name: 'Medicare',
      fullName: 'Medicare',
      description: 'A federal health insurance program primarily for people aged 65 or older, some younger people with certain disabilities, and people with End-Stage Renal Disease (permanent kidney failure requiring dialysis or a transplant). It has different parts (A, B, C, D) covering various services.',
      icon: '👴',
      color: '#3498DB'
    }
  ];

  considerations: string[] = [
    'Premiums',
    'Deductibles',
    'Co-pays',
    'Co-insurance',
    'Network size',
    'Referral requirements for specialists'
  ];

  selectedInsurance: HealthInsuranceType | null = null;

  selectInsurance(insurance: HealthInsuranceType): void {
    this.selectedInsurance = this.selectedInsurance?.id === insurance.id ? null : insurance;
  }
}