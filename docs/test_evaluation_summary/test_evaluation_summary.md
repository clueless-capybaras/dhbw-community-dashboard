# Test Evaluation Summary

- [Test Evaluation Summary](#test-evaluation-summary)
- [Introduction](#introduction)
  - [Purpose](#purpose)
  - [Document Terminology and Acronyms](#document-terminology-and-acronyms)
- [Test Strategy](#test-strategy)
- [Test Plan](#test-plan)
- [Test Cases](#test-cases)
- [Test Results](#test-results)
- [Metrics](#metrics)
- [Recommendations](#recommendations)
- [Conclusion](#conclusion)

# Introduction

## Purpose
This document aims to give an overview of the tests that have been planned for the DHBW Community Dashboard and, in more detail, disclose all performed tests, their results and related metrics. Moreover, it shall be a dynamic document which will be extended whenever there are new tests.


## Document Terminology and Acronyms
| Abbrevation | Meaning                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------- |
| DHBW        | [Duale Hochschule Baden-Württemberg](https://www.dhbw.de/startseite) (Baden-Württemberg Cooperative State University) |
| E2E         | End-to-End                                                                                                            |

# Test Strategy
In short, our plan is to use Cypress for E2E-Testing. This affects every major frontend functionality which includes Calendar, Canteen and Settings, but not Log In/Sign In because this is an externalized feature. With jUnit we run Unit and particularly Integration tests for backend components. Since our frontend and backend are deeply connected, it is complicated to make clear separations between units. Therefore, we mainly perform integration tests. For automation, we include all tests in a GitHub Actions pipeline that triggers on every push to a branch.

For more information, please also read our full [Test Plan](../test_plan/test_plan.md).

# Test Plan
This section outlines the specific testing tasks, timelines, and resources required to achieve the testing objectives. Please have a look at our extra file for the [Test Plan](../test_plan/test_plan.md).

# Test Cases
This section links to the specific test cases that were executed, including their pass/fail status. Further navigation inside Github allows for further details including a view on the specific component/test suite/feature failing. 

Currently we only have written Cypress Tests, but JUnit tests will follow.

[Test History](https://github.com/clueless-capybaras/dhbw-community-dashboard/actions/workflows/tests.yml)

# Test Results
This section summarizes the results of the testing, including any defects found, their severity, and the steps taken to resolve them. 

# Metrics
This section provides quantitative data on the testing process, such as the number of defects found, the defect resolution time, and the test coverage achieved. 

# Recommendations
This section offers suggestions for improving the testing process and the quality of the software. 

# Conclusion
This section summarizes the key findings of the testing and the overall status of the software quality.