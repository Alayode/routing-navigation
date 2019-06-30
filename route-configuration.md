[Configuration]

A routed Angular Application has one singleton instance of the Router service. When the browser's URL Changes, that router then looks for a corresponding Route from which it can determine the component to display.

A router has no routes until you configure it. The following example creates FIVE route definitions, configures the router via the RouterModule.forRoot() method, and adds the results to the AppModule's imports array.


