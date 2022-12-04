# Software Architecture Document (SAD)

# Introduction
## Purpose
This document provides a comprehensive architectural overview of the system, using a number of different architectural views to depict different aspects of the system. It is intended to capture and convey the significant architectural decisions which have been made on the system.

## Scope
[A brief description of what the Software Architecture Document applies to; what is affected or influenced by this document.]

## Definitions, Acronyms and Abbreviations
Abbrevation | Meaning
----------- | ---------------------------
DHBW        | [Duale Hochschule Baden-Württemberg](https://de.wikipedia.org/wiki/Duale_Hochschule_Baden-W%C3%BCrttemberg_Karlsruhe) (Baden-Württemberg                   Cooperative State University)
SAD         | Software Architecture Document

## References
[This subsection provides a complete list of all documents referenced elsewhere in the Software Architecture Document. Identify each document by title, report number (if applicable), date, and publishing organization. Specify the sources from which the references can be obtained. This information may be provided by reference to an appendix or to another document.]

## Overview
[This subsection describes what the rest of the Software Architecture Document contains and explains how the Software Architecture Document is organized.]

# Architectural Representation
[This section describes what software architecture is for the current system, and how it is represented. Of the Use-Case, Logical, Process, Deployment, and Implementation Views, it enumerates the views that are necessary, and for each view, explains what types of model elements it contains.]

# Architectural Goals and Constraints
[Utility Tree](../architecture_significant_requirements/utility_tree.md)

# Use-Case View 
[This section lists use cases or scenarios from the use-case model if they represent some significant, central functionality of the final system, or if they have a large architectural coverage—they exercise many architectural elements or if they stress or illustrate a specific, delicate point of the architecture.]

## Use-Case Realizations
[reference your use cases and sequence diagrams created earlier. If necessary, revise them based on your new understanding -- a few selected use-case (or scenario) realizations, and explains how the various design model elements contribute to their functionality]

# Logical View

# Process View
[This section describes the system's decomposition into lightweight processes (single threads of control) and heavyweight processes (groupings of lightweight processes). Organize the section by groups of processes that communicate or interact. Describe the main modes of communication between processes, such as message passing, interrupts, and rendezvous.]

[Sections 6: sequence diagrams on a component level, and necessary
description]

# Deployment View

# Implementation View
[This section describes the overall structure of the implementation model, the decomposition of the software into layers and subsystems in the implementation model, and any architecturally significant components.]

[Section 8: component diagrams and/or package diagrams, and necessary
description.]

# Data View

# Size and Performance

# Quality
[Architecture significant requirements](../architecture_significant_requirements/architecture_decisions_and_design_patterns.md)
