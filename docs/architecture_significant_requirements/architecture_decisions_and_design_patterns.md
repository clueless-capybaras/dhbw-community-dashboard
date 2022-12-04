# Architecture decisions based on utility tree

## 1. Availability: No downtime
| Quality Attribute  |  Refinement  | Source        | Stimulus         | Artifact      | Environment       | Response      | Response Measure        | Business Value  | Technical risk |
| ------------------  | ------------------------------   | ----------------  | ------------------ | ------------------ | ------------------ | ------------------------------ | -------------------------|------------|-------------|
| Availability |No downtime | Student user | requests response from server |  web server |  server is down, not first access  |  notify that user is seeing cached data, show cached data  | notification is seen, data is most recent state of last server access  |   High  |  Medium  |

The resulting architecture decisions and pattern from this architecture significant requirement is to use a single page application, which after first load, and during a realistic caching time, is stored in the browser cache of the user. Additionally this SPA frontend needs to be able to handle timeouts of its individual backend components to also display a previously cached dataset.

## 2. Availability: Usable with bad connection
| Quality Attribute  |  Refinement  | Source        | Stimulus         | Artifact      | Environment       | Response      | Response Measure        | Business Value  | Technical risk |
| ------------------  | ------------------------------   | ----------------  | ------------------ | ------------------ | ------------------ | ------------------------------ | -------------------------|------------|-------------|
|  Availability | Usable with bad connection | Student user | requests response from server | web server | server accesable with response distinctly delayed | proposes bad connection mode | user gets notification for connection mode proposal, connection mode can be changed | High | Medium |

From this requirement, building on the first one, there are two desicions to be made: Firstly, the data sent between front and backend should be as limited as plausible, meaning that depending on the situation there should either be one transfer of (static) data or if a more live-like transfer needs to happen, those requests and responses should be as small as possible to limit the bandwith usage by the application.
Secondly, the frontend itself, which is sent to a user initially should have a small filesize. This means that when using libraries, such as image libraries, it is important to never bulk import all assets, but to carefully inject them only where absolutely necessary.
