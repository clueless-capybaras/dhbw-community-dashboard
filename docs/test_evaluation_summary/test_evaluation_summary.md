# Test Evaluation Summary

- [Test Evaluation Summary](#test-evaluation-summary)
- [Introduction](#introduction)
  - [Purpose](#purpose)
  - [Scope](#scope)
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
This document aims to give an overview of the tests that have been planned for the DHBW Community Dashboard and, in more detail, disclose all performed tests, their results and related metrics. Moreover, it shall be 

## Scope

## Document Terminology and Acronyms
Abbrevation | Meaning
-|-
DHBW | [Duale Hochschule Baden-Württemberg](https://www.dhbw.de/startseite) (Baden-Württemberg Cooperative State University)
E2E | End-to-End

# Test Strategy

# Test Plan
In short, our plan is to use Cypress for E2E-Testing. This affects every major frontend functionality which includes Calendar, Canteen and Settings, but not Log In/Sign In because this is an externalized feature. With jUnit we run Unit and particularly Integration tests for backend components. Since our frontend and backend are deeply connected, it is complicated to make clear separations between units. Therefore, we mainly perform integration tests. For automation, we include all tests in a GitHub Actions pipeline that triggers on every push to a branch.

For more information, please also read our full [Test Plan](../test_plan/test_plan.md).

# Test Cases

# Test Results

# Metrics

# Recommendations

# Conclusion