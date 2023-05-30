# Technical Review: Login, Registration

## 2023/05/22 16:02 - 17:47 CEST

## Participants
Name | Role
---|---
Leonid Ehrler | Scrum Master
Tom Legel | Developer
Vanessa Limberger |  Developer
Florian Pilz | Developer

## Focus
With this technical review, we aim to improve the chosen components regarding code quality, performance and maintainability.
This will not only improve the general development experience, but also the dashboard user experience.

The affected components provide central features to the DHBW Community Dashboard and are therefore an ideal example for a technical review documentation. Especially focusing on simplicity will have positive impact on user experience.

## Components for Review
Component | Function |
---|---
Login & Registration | login and registration of users while only alowing DHBW students with a DHBW email address to register


## Criteria of Review
Component | Criteria
---|---
Login & Registration | security, scalability, simplicity

## Review Methodology
Component | Methodology
---|---
Login & Registration | code review, walkthrough

## Outcome
### Actions
Action | Comment | Responsible | Deadline
---|---|---|---
Create bug task for improved behavior of email confirmation modal | The modal should close after refresh if the email has been confirmed | Florian Pilz | 2023/05/25

### Lessons Learned
- We don't need to do everything on our own. There are solutions like [Auth0](https://auth0.com/) that provide a secure and scalable login and registration system.
- Auth0 also provides a [React SDK](https://auth0.com/docs/libraries/auth0-react) that makes it easy to integrate the login and registration system into our dashboard and seems to fulfill our requirements.
- We should always consider using existing solutions instead of reinventing the wheel.
- The need to confirm the email is a bit cumbersome for the user. We need this to ensure that only DHBW students can register.
