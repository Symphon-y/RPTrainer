import React from 'react';
export const OnboardingContext = React.createContext({
  user_name: '',
  user_age: 0,
  user_weight: 0,
  user_body_fat: 0,
  onboarding_step: 0,
});
