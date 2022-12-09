# Software Architecture Document (SAD)

# Introduction
## Purpose
This document provides a comprehensive architectural overview of the system, using a number of different architectural views to depict different aspects of the system. It is intended to capture and convey the significant architectural decisions which have been made on the system.

## Scope
This Software Architecture Document provides an architectural overview of the DHBW Community Dashboard.

## Definitions, Acronyms and Abbreviations
Abbrevation | Meaning
----------- | ---------------------------
DHBW        | [Duale Hochschule Baden-Württemberg](https://de.wikipedia.org/wiki/Duale_Hochschule_Baden-W%C3%BCrttemberg_Karlsruhe) (Baden-Württemberg                   Cooperative State University)
SAD         | Software Architecture Document


## Overview
[This subsection describes what the rest of the Software Architecture Document contains and explains how the Software Architecture Document is organized.]

# Architectural Representation
EXAMPLE:
The next two sections of the document describe the architectural goals and constraints.
Architecturally relevant Use Cases are described by a Use Case diagram and a short explanation
of their impact on the architecture. The following views will also be provided:
• A logical view provides a high-level view of the platform presenting the structure of the
system through its components and their interactions.
• An implementation view describes the software layers and the main software
components. A component diagram is used in this view.
• A deployment view provides a description of the hardware components and how they
are linked together. This view gives a technical description of protocols and hardware
nodes used.
• A data view provides information about the data persistency. A class diagram will be used
to model the main system data.
UML diagrams are systematically used to represent the different views of the system.

# Architectural Goals and Constraints
[Utility Tree](../architecture_significant_requirements/utility_tree.md)

# Use-Case View 

## Overall Use Case Diagram
![Overall Use-Case Diagram](../use_case_diagrams/UCD1_overall.png)

## Use-Case Realizations
The following use-cases were chosen to exemplify the advantages of a microservice architecture in which each service works indeendently from the other services.

### Calendar
As a DHBW student I want to have my lecture schedule displayed up to date to recent changes to see all my upcoming lectures.

### Canteen screen
As a student I want to be able to see which meals of the canteen are offered for the current week.

### Dualis
As a student I want to be able to have direct access to Dualis to look at my grades.

# Logical View
## Relevant Class Diagrams
![Overview](class_diagrams/CD1_overview.png)
![Calendar (Frontend)](CD2_frontend_calendar.png)
![Canteen (Frontend)](class_diagrams/CD3_frontend_canteen.png)
![Settings (Frontend)](class_diagrams/CD4_frontend_settings.png)
![User (Backend)](class_diagrams/CD5_backend_user.png)
![Calendar (Backend)](class_diagrams/CD6_backend_calendar.png)
![Canteen (Backend)](class_diagrams/CD7_backend_canteen.png)

# Process View

![sequence diagram](../sequence_diagrams/SD0_Components.png)

This sequence diagram displays the general sequence when the user opens a page. The component (frontend) gets props and user-specific settings via microservice (backend) from the database. For canteen, the frontend component gets the data from an API. Each component contains several subcomponents (e.g. [canteen card](https://dhbwcd-dev.mush-it.com/canteen/default)) to display the provided data/props.

# Deployment View

# Implementation View

![component diagram](../component_diagrams/CD1_components.png)

This component diagram displays the architecurally releveant modulation of the software. The project is split into a react frontend and multiple microservices consisting of a java spring-boot rest backend and corresponding mariadb databases. Each component is nested in a seperate docker container, where only the rest backends and the react frontend will be exposed to the user, the databses are only addressable by the backends.

# Data View

# Size and Performance

# Quality
[Architecture significant requirements](../architecture_significant_requirements/architecture_decisions_and_design_patterns.md)
