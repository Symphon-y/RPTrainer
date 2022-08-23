import React from 'react';
export const UserContext = React.createContext({
  email: '',
  user_name: '',
  user_weight: 0,
  user_age: '',
  user_body_fat: 0,
  needs_onboarding: true,
});
