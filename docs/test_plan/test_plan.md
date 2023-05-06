# Test Plan

- [Test Plan](#test-plan)
- [Introduction](#introduction)
  - [Purpose](#purpose)
  - [Document Terminology and Acronyms](#document-terminology-and-acronyms)
- [Test Motivation](#test-motivation)
- [Outline of Planned Tests](#outline-of-planned-tests)
  - [Unit and Integration Testing](#unit-and-integration-testing)
  - [E2E Testing](#e2e-testing)
  - [Test Automation](#test-automation)
- [Test Case Management](#test-case-management)
  - [Passed Tests](#passed-tests)
  - [Failed Tests](#failed-tests)

# Introduction
## Purpose
The purpose of the Iteration Test Plan is to gather all of the information necessary to plan and control the test effort for a given iteration. It describes the approach to testing the software, and is the top-level plan generated and used by managers to direct the test effort.

This Test Plan for the DHBW Community Dashboard supports the following objectives:
- Cypress E2E-/UI-Testing for frontend functionality to improve user experience
- JUnit Unit-/Integration-Testing for backend components to prevent major malfunctions and bugs
- GitHub Actions Pipeline to initiate Cypress and JUnit tests

## Document Terminology and Acronyms
| Abbrevation | Meaning                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| DHBW        | [Duale Hochschule Baden-Württemberg](https://www.dhbw.de/startseite) (Baden-Württemberg Cooperative State University) |
| E2E         | End-to-End                                                                                                            |
| UI          | User Interface                                                                                                        |

# Test Motivation
Since the formation of capyclue. and especially the DHBW Community Dashboard kickoff, our aim has always been to please the needs of our users by delivering a consistent application.
Providing a pleasent straight-forward user experience while still covering all necessary features with as much information and detail as possible is our highest priority.

To achieve this goal, the DHBW Community Dashboard should be free from bugs or any kind of malfunction. This includes every component that is planned for our final release.
During the developing process, we evaluated the importance of certain functionalities, which led to the decision of focusing on especially the Calendar and Canteen component.

The [Software Requirement Specification (SRS)](../software_requirements_specification/software_requirement_specification.md) provides more information on these components.

# Outline of Planned Tests
In this section, an overview of all test types and their targets is given, including the test coverage.

## Unit and Integration Testing
With jUnit, we plan to test all backend components. This includes Calendar, Canteen and User. We want to achieve a 100% coverage of components and a 70-80% statement coverage.

Since our back and frontend are deeply connected, it is often complicated to seperate different units. Therefore, we favor integration testing to test functionalities rather than units.

## E2E Testing
With Cypress, we plan to test all major frontend functionalities. This includes Calendar, Canteen and Settings, but not Log In/Sign In since this is an externalized feature. We are aiming for a high coverage of 90-100% to provide a pleasent user experience. 

Our Cypress tests include:
- Calendar
  - change view (month, week, list)
  - go to next/previous month/week/day
  - jump to today
  - add an event
    - schedule
    - name
    - describe
  - remove an event
- Canteen
  - change canteen
  - change active day
  - show/hide details
- Settings
  - view user settings
    - register as course representative
    - add course affiliation
    - remove course affiliation
  - view calendar settings
    - change time format
    - change default view (month/week/list)
    - add RAPLA calendar
    - add custom ical calendar
    - remove calendar
  - view canteen settings
    - change default canteen
    - activate highlighting
    - change highlighting color
    - set highlighted meal category
    - hide meal categories
  - view about page

## Test Automation
All tests are automated via GitHub Actions. This is implemented by a pipeline that allows us to run jUnit and Cypress tests in parallel. Those tests must be configured and specified manually beforehand. 

The automation is triggered by a push to GitHub.

# Test Case Management
## Passed Tests
When a feature passes all tests, it is considered successful and can remain as it is. The affiliated tests will stay part of the automation to prevent the feature from failing after future implementations.

## Failed Tests
When a feature fails one or more tests, it is considered unsuccessful and must be changed.
To trace back the source of the failure, test results are logged after every commit/push and can be viewed seperately in the jUnit or Cypress output.

Since we aim to achieve a high coverage for frontend testing, the goal should always be successful test results. However, in uncommon cases when a test repeatedly fails, the importance of the tested feature and the occurrence rate must be evaluated to prevent the risk of longer development delays.