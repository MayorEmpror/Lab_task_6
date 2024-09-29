# Directory Description

Contains all the components used throughout the application. Nearly every file in the application imports from this folder so it would be extremely redundant to list them all. Following are the uses and descriptions of the sub-directories:

* `3js` Contains all the 3D Related content present in the website (Excluding animated images)
* `atoms` Contain all components that cannot think, have no giagantic logic of their own or are below 50 lines
* `molecules` Contain all components that can:
  * Think
  * Use other components (mostly from `atoms`)
  * Have their own logic
  * Are used directly in the application
* `templates` Contains extremely large and boilerplate components that can only be imported by a page, not another template or standard component. They have:
    * Extensive logic
    * Have reducers and/or large state
    * Can interact with external APIs
    
