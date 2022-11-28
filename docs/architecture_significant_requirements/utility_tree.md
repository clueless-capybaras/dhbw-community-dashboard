# Utility Tree


| Quality Attribute  |  Refinement  | Source        | Stimulus         | Artifact      | Environment       | Response      | Response Measure        | Business Value  | Technical risk |
| ------------------  | ------------------------------   | ----------------  | ------------------ | ------------------ | ------------------ | ------------------------------ | -------------------------|------------|-------------|
| Availability |No downtime | Student user | requests response from server |  web server |  server is down, not first access  |  notify that user is seeing cached data, show cached data  | notification is seen, data is most recent state of last server access  |   High  |  Medium  |   
|   | Usable with bad connection | Student user | requests response from server | web server | server accesable with response distinctly delayed | proposes bad connection mode | user gets notification for connection mode proposal, connection mode can be changed | High | Medium |
|           |  availability as a whole not affected by unavailability of a module | Student user | requests response from an unavailable module | web server | module is down or crashing on request |  user gets informed that the used module is unavalable, but error is catched  | user gets prompet to try again later and use the other modules for now | High |   High    |       |
|           |  Available both on mobile / desktop |  |     |     |     |     |     |     |     |     |
|     Interoperability   |  reliable transfer of data from web sources to our system |   |  |     |    |    |    |       |       |       |
|           |  clear datamodell for communication between (internal) systems | React frontend  |  requests a data model from a backend module  |  backend module   |   no data is available or edge case which could lead to malformed data   |  error is catched and a message is returned as an element of the defined data model  |  frontend displays the data model correctly and user is therefore informed about error in the backend data   |   Medium    |   High    |       |
|   Modifiability    |  independence of components |     |     |     |     |     |    |    |     |       |
|           |  functional cohesion of components |     |     |    |      |    |     |       |       |       |
|    Performance       |  low latency |       |     |      |      |     |     |     |     |     |
|       |  asnychronous rendering |     |     |      |      |      |     |     |     |     |
|       |  quick startup |     |     |      |      |      |     |     |     |     |
|       |  quicker "navigation" |     |     |      |      |      |     |     |     |     |
|  Security  |  user data is secured |     |     |      |      |      |     |     |     |     |
|       |  security standard is transparent (included in privacy statement) |     |     |      |      |      |     |     |     |     |
|       |  authentication |     |     |      |      |      |     |     |     |     |
|       |  authorization |     |     |      |      |      |     |     |     |     |
| Usability  |  responsive design |     |     |      |      |      |     |     |     |     |
|       |  user action feedback |     |     |      |      |      |     |     |     |     |
|       |  intuitive design |     |     |      |      |      |     |     |     |     |
|       |  error transparent |     |     |      |      |      |     |     |     |     |
