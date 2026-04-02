# Test Cases – Registration Step 1

**Application:** dev-craft  
**Page URL:** https://code-staging-web.on.dev-craft.tech/signup/1  
**Environment:** Dev  
**Scope:** First step of the multi-step registration flow (Email + Password + Terms & Conditions → Verification Code Popup)  
**Testing Types:** Functional, Input Validation, Negative Testing, Navigation, Error Handling

## 1. Automated Test Cases (Happy Path)

- TC-REG-001 – Successful registration using "Join" button from Login page
- TC-REG-002 – Successful registration using "Join here" link from Login page
- TC-REG-003 – Verification code popup is displayed after successful submission with correct email address
- TC-REG-004 – Registration with already existing email shows appropriate error message 
- TC-REG-005 – Successful registration using dynamically generated email and password (via Faker)

## 2. Positive Test Cases - TODO

- TC-REG-006 – Successful registration with valid email, valid password (minimum 12 characters) and accepted Terms checkbox
- TC-REG-007 – Successful registration by clicking the "Register" button after filling all mandatory fields
- TC-REG-008 – Successful registration by navigating from the login page using the "Join" or "Join here" button/link
- TC-REG-009 – Verification code popup appears after successful registration with the correct entered email displayed
- TC-REG-010 – Successful registration with email containing uppercase letters, numbers and special characters

## 3. Navigation & Access Test Cases - TODO

- TC-REG-011 – Direct access to the registration form via URL `/signup/1`
- TC-REG-012 – Navigation to registration from the login page using the "Join" button
- TC-REG-013 – Navigation to registration from the login page using the "Join here" link
- TC-REG-014 – Return to the login page via link or button from the registration form
- TC-REG-015 – URL remains `/signup/1` after page refresh in the first registration step 

## 4. Email Field Validation Test Cases - TODO

- TC-REG-016 – Required field validation error for empty Email field
- TC-REG-017 – Invalid email format validation (missing @, missing domain, multiple @, etc.)
- TC-REG-018 – Help text "We will send you a code to verify your email" appears on valid email input
- TC-REG-019 – Leading and trailing whitespace is automatically trimmed from email field
- TC-REG-020 – Acceptance of maximum valid email length (254 characters per RFC 5321)
- TC-REG-021 – Rejection of email addresses exceeding 254 characters
- TC-REG-022 – Email domain is validated case-insensitively  

## 5. Password Field Validation Test Cases - TODO

- TC-REG-023 – Required field validation error for empty Password field
- TC-REG-024 – Minimum password length validation (must be at least 12 characters)
- TC-REG-025 – Acceptance of exactly 12-character password with mixed character types
- TC-REG-026 – Password field supports show/hide toggle functionality (if implemented)
- TC-REG-027 – Leading and trailing whitespace is automatically trimmed from password field
- TC-REG-028 – Password containing only whitespace characters is rejected

## 6. Terms & Conditions Test Cases - TODO

- TC-REG-029 – "Required field" error is displayed when the Terms & Conditions checkbox is not checked
- TC-REG-030 – Clicking the "Terms & Conditions" link opens the document in a new tab or modal
- TC-REG-031 – Clicking the "Privacy Policy" link opens the corresponding document
- TC-REG-032 – Checkbox can only be checked after reading the terms (if there is JS validation)
- TC-REG-033 – Registration is possible only when the Terms checkbox is checked 

## 7. Form Submission & Button Behavior Test Cases - TODO

- TC-REG-034 – Clicking the "Register" button with valid data shows the verification popup
- TC-REG-035 – Prevention of multiple submissions (double-click or rapid clicks on Register)
- TC-REG-036 – "Register" button is disabled until all mandatory fields are filled
- TC-REG-037 – "Register" button becomes enabled automatically after filling all fields
- TC-REG-038 – Loading spinner or disabled state during form submission 

## 8. Error Messages & UI Feedback Test Cases - TODO

- TC-REG-039 – "User with this email already exist" error is displayed for duplicate email
- TC-REG-040 – Clear visual indication (red icon + error message) for invalid fields
- TC-REG-041 – Real-time error clearing when invalid field is corrected
- TC-REG-042 – Focus is automatically moved to the first invalid field after failed submission 

## 9. Negative Test Cases - TODO

- TC-REG-043 – Registration attempt with all empty mandatory fields
- TC-REG-044 – Registration attempt with invalid email and valid password
- TC-REG-045 – Registration attempt with valid email and password shorter than 12 characters
- TC-REG-046 – Registration attempt without accepting Terms & Conditions
- TC-REG-047 – Registration attempt with previously used email address 

## 10. Edge Cases & Boundary Test Cases - TODO

- TC-REG-048 – Registration with email exactly 254 characters long (RFC maximum)
- TC-REG-049 – Registration with password containing only special characters + numbers + letters
- TC-REG-050 – Registration with email containing subdomains and complex TLD (example@sub.domain.co.uk)
- TC-REG-051 – Registration with password containing Unicode/special characters (if supported)
- TC-REG-052 – Rapid input and submit (race condition test)
- TC-REG-053 – Verification popup check – email address is an exact copy of the entered one

## 11. UI & Visual Test Cases - TODO

- TC-REG-054 – All fields, buttons and text are visually well aligned and responsive on desktop
- TC-REG-055 – Correct field coloring in focus, valid and invalid states
- TC-REG-056 – Placeholder text disappears correctly upon input
- TC-REG-057 – Compliance with Figma/design specification (if available)

## 12. Accessibility Test Cases - TODO

- TC-REG-058 – All fields have proper ARIA labels and accessible names
- TC-REG-059 – Keyboard navigation (Tab, Shift+Tab, Enter) works throughout the entire form
- TC-REG-060 – Text and background contrast meets WCAG AA requirements
- TC-REG-061 – Screen reader correctly reads labels, help text and error messages

## 13. Responsiveness & Cross - Device Test Cases - TODO

- TC-REG-062 – Form is fully functional and visually correct on mobile (portrait)
- TC-REG-063 – Form is fully functional in tablet view
- TC-REG-064 – No horizontal scroll in mobile view
- TC-REG-065 – Touch-friendly button and checkbox sizes on mobile devices

## 14. Sequrity & Privacy Basics (Manual/Semi-automated) Test Cases - TODO

- TC-REG-066 – Password is not visible in plain text (`type="password"`)
- TC-REG-067 – No sensitive data is present in URL or localStorage after submission
- TC-REG-068 – Form uses correct autocomplete attributes (`autocomplete="new-password"` and `"email"`)
- TC-REG-069 – CSRF protection (if token is visible in HTML)

---

**Status:** Draft → Ready for Review  
**Automation Coverage:**  
- **Automated:** TC-REG-001, TC-REG-002, TC-REG-003, TC-REG-004, TC-REG-035  
- **In Progress / Planned:** Additional validation and edge cases  
- **Manual:** UI, Accessibility, Responsiveness, and Security test cases  

**Last updated:** April 02, 2026  
**Note:** All test cases are strictly limited to Registration Step 1 as per the assignment requirements.