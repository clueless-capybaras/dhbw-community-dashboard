# Final Handout: DHBW Community Dashboard <!-- omit from toc --> 

- [project introduction](#project-introduction)
  - [the problem](#the-problem)
  - [the solution](#the-solution)
- [tech stack](#tech-stack)
- [architecture](#architecture)
  - [architecture decisions](#architecture-decisions)
  - [overview](#overview)
  - [component vs microservice](#component-vs-microservice)
- [quality assurance](#quality-assurance)
  - [test coverage](#test-coverage)
  - [monitoring](#monitoring)
- [CI/CD](#cicd)
- [statistics](#statistics)
- [project management](#project-management)
  - [scrum workflow](#scrum-workflow)
  - [project retro](#project-retro)
  - [risk management](#risk-management)
- [demo screenshots](#demo-screenshots)
  - [dashboard](#dashboard)
  - [log in](#log-in)
  - [settings](#settings)
  - [calendar](#calendar)
  - [canteen](#canteen)
- [cheers, capyclue.](#cheers-capyclue)
- [bonus: capygallery.](#bonus-capygallery)


## project introduction

### the problem

- no DHBW(-Karlsruhe) app for all platforms 
- many sources for trivial information
  - RAPLA
  - canteen
- cumbersome navigation of canteen website

### the solution

- intuitive dashboard app for every device
- single source of truth for DHBW students
- RAPLA calendar integration
- unified canteen menus
- adjustable to the user's liking
- lots of capybaras because capybara

<img src="./images/future_capy.png" alt="very futuristic tech-capy" width="50%" />

Related:
- [Software Requirements Specification (SRS)](../software_requirements_specification/software_requirement_specification.md)
- [First Blog Post](https://capyclue.mush-it.com/?p=58)

---

## tech stack

![Tech Stack Cloud](./images/tech_stack_cloud.png)

### documentation <!-- omit from toc --> 

- [**Jira:**](https://www.atlassian.com/software/jira) sprint planning, scrum board
- [**Confluence:**](https://www.atlassian.com/software/confluence) team internal documentation
- [**Worpress:**](https://capyclue.mush-it.com/) weekly blog posts
- [**Figma:**](https://www.figma.com/) wireframing, designing

### infrastructure <!-- omit from toc --> 

- [**VSCode:**](https://code.visualstudio.com/) frontend development
- [**IntelliJ:**](https://www.jetbrains.com/idea/) backend development
- [**Docker:**](https://www.docker.com/) containerization
- [**GitHub:**](https://github.com/clueless-capybaras/dhbw-community-dashboard/tree/main) repository, version control

### development <!-- omit from toc --> 

- [**React-Bootstrap:**](https://react-bootstrap.github.io/) frontend framework for React
- [**Auth0:**](https://auth0.com/) user authorization framework
- [**FullCalendar:**](https://fullcalendar.io/) calendar framework for React
- [**Spring Boot:**](https://spring.io/projects/spring-boot) microservice framework for Java
- [**MariaDB:**](https://mariadb.org/) MySQL based relational database

### testing and monitoring <!-- omit from toc --> 

- [**Actions:**](https://docs.github.com/en/actions) test automation
- [**JUnit:**](https://junit.org/junit5/) unit and integration tests
- [**cypress:**](https://www.cypress.io/) frontend e2e tests
- [**Lighthouse:**](https://developer.chrome.com/docs/lighthouse/) performance monitoring

---

## architecture

### architecture decisions

- availability
  - minimal downtime → single page application, microservices
  - usable with bad connection → single page application, minimal data concept
  - app should survive a crash → domain isolation to microservices

Related:
- [Architecture Significant Requirements (ASR)](../architecture_significant_requirements/architecture_decisions_and_design_patterns.md)
- [Utility Tree](../architecture_significant_requirements/utility_tree.md)
- [Software Architecture Document (SAD)](../software_architecture_document/software_architecture_document.md)
- [Blog Post: ASR](https://capyclue.mush-it.com/?p=182)
- [Blog Post: SAD](https://capyclue.mush-it.com/?p=254)

### overview

![architecture overview graph](./images/architecture_overview.png)

### component vs microservice

#### component <!-- omit from toc --> 
- reusable React elements
- atomic design
- Bootstrap framework
  - pre-configured components
  - customizable

#### microservice <!-- omit from toc --> 
- MVC in Java Spring Boot
  - entity: represent DB table
  - controller: intercept requests
  - service: business logic
  - repository: CRUD methods

---

## quality assurance

### test coverage

- **JUnit:** unit and integration tests for backend microservices
  - component coverage: **100**%
  - statement coverage: **70-80**%
- **cypress:** e2e tests for frontend workflows
  - coverage: **90-100**%

### monitoring

- first contentful paint: **< 1.8s**
- speed index: **< 3.4s**
- commulative layout shift: **< 0.1**

![screenshot from Google Lighthouse with precious capy](./images/lighthouse_metrics.png)

Related:
- [Test Plan](../test_plan/test_plan.md)
- [Test Evaluation Summary](../test_evaluation_summary/test_evaluation_summary.md)
- [Failed Tests](../test_evaluation_summary/failed_tests.md)
- [Blog Post: Test Plan](https://capyclue.mush-it.com/?p=296)
- [Blog Post: Metrics](https://capyclue.mush-it.com/?p=301)

---

## CI/CD

![CI/CD cycle](./images/cicd_cycle.png)

#### plan and code <!-- omit from toc --> 
- add tasks to Jira
- use GitHub integration for Jira
  - create branch related to ticket
- development process

#### build and test <!-- omit from toc --> 
- pipeline triggers on any push
  - maven and npm for building
  - runs all tests
  - works on any branch
- instant feedback

#### release and deploy <!-- omit from toc --> 
- merge into/push to main:
  - pipeline triggers tests again
  - deploys changes to server

#### operate and monitor <!-- omit from toc --> 
- monitor metrics via Lighthouse
  - focus on FCP, SI, CLS

Related:
- [Blog Post: CI/CD](https://capyclue.mush-it.com/?p=282)

---

## statistics

---

## project management

### scrum workflow

![scrum board with happy capys](./images/scrum_board.png)

- weekly sprint planning meeting
  - retrospective
  - refinement
  - story point estimation
- do and review tasks flexibly and independently

### project retro

![project retro table](./images/project_retro_table.png)

### risk management

![risk management table](./images/risk_management_table.png)

---

## demo screenshots

### dashboard

![screenshot: dashboard](./images/screenshot_dashboard.png)

This is the landing page of our web application. You can use the dashboard to navigate to the different components. 

![screenshot: sidebar](./images/screenshot_offcanvas.png)

The top bar appears in every component and can be used to navigate back to the dashboard, open the sidebar for direct navigation to another component and log in to your account.

### log in

<img src="./images/screenshot_login.png" alt="screenshot: login" width="50%" />

We externalized the log in feature to Auth0, a 3rd party authentification provider. To register an account, a `@student.dhbw-karlsruhe.de` email is required. 

We can access user data from Auth0 to save the user's settings to our user database. We do not persist full user data like email or password hashes but only the user-id.

### settings

![screenshot: user settings](./images/screenshot_settings_user.png)

In this component, the user can change personal settings. For changes to their password, they will be redirected to Auth0. In addition, we provide the option to change settings of the calendar and canteen components for better customization.

### calendar

![screenshot: calendar](./images/screenshot_calendar.png)

![screenshot: calendar settings](./images/screenshot_settings_calendar.png)

The calendar component is based on the FullCalendar framework for JavaScript (optimized for React). After inserting a RAPLA link in the calendar settings, the whole lecture schedule can be displayed in various formats (list/week/month).

### canteen

![screenshot: canteen](./images/screenshot_canteen_unfiltered.png)

The canteen component features three different canteens, including the DHBW canteen. Every meal is displayed as a card component that includes information about the name, price, type (vegan/vegetarian/pork) and allergenes. 

![screenshot: canteen settings](./images/screenshot_settings_canteen.png)

![screenshot: canteen (filtered)](./images/screenshot_canteen_filtered.png)

By changing the settings, meals can be hidden or highlighted. The user can choose the category and the highlighting color.

---

## cheers, capyclue.

It was our pleasure to deliver a great demo of our vision: DHBW Community Dashboard. We hope that you enjoyed our weeky updates and you like our demo app. It was great to work on this project for the last months. And maybe, one day when your favorite capybaras aren't clueless anymore, the DHBWCD is not a demo anymore?!

Thanks to all the blog-readers, feedback-givers, project-observers and capybara-enjoyers, you are the best!

Cheers, capyclue.

---

## bonus: capygallery.

Have a look at our precious AI generated capybaras. We used Bing Image Generator (DALL-E).

### supercapy <!-- omit from toc --> 
![supercapy](./images/capygallery/supercapy.jpg)

### happybara <!-- omit from toc --> 
![happybara](./images/capygallery/happybara.jpg)

### crucader-capy <!-- omit from toc --> 
![crucader-capy](./images/capygallery/capy_crucader.jpg)

### capy be sippin <!-- omit from toc --> 
![capy be sippin](./images/capygallery/capy_be_sippin.jpg)

### capyzara <!-- omit from toc --> 
![capyzara](./images/capygallery/capy_zara.jpg)

### squattybara <!-- omit from toc --> 
![squattybara](./images/capygallery/squattybara.jpg)

### sunnybara <!-- omit from toc --> 
![sunnybara](./images/capygallery/sunnybara1.jpg)

### sunnybara but watercolor <!-- omit from toc --> 
![sunnybara watercolor](./images/capygallery/sunnybara2.jpg)

### layered capy <!-- omit from toc --> 
![layered capy](./images/capygallery/colorful_layered_capy.jpg)

### sleek capy <!-- omit from toc --> 
![sleek capy](./images/capygallery/sleek_capy.jpg)