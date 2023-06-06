# Design patterns
## 1. Creational patterns
These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

+ Singleton
```
The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
```
+ Factory method
```
The Factory Method pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.
```

+ Builder method
```
The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders.
```


## 2. Structural patterns
These patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

+ Decorator
```
The Decorator pattern lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
```
+ Composite
```
The Composite pattern lets you compose objects into tree structures and then work with these structures as if they were individual objects.
```
+ Adapter
```
The Adapter pattern allows objects with incompatible interfaces to collaborate. The Adapter acts as a wrapper between two objects. It catches calls for one object and transforms them to format and interface recognizable by the second object.
```

+ Proxy
```
The Proxy provides an object that acts as a substitute for a real service object used by a client. A proxy receives client requests, does some work (access control, caching, etc.) and then passes the request to a service object.
```

## 3. Behavioral patterns
These patterns are concerned with algorithms and the assignment of responsibilities between objects.

+ Command
```
The Command pattern turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request’s execution, and support undoable operations.
```
+ Observer
```
The Observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.
```

+ Visitor
```
The Visitor pattern isolates particular behaviors from the objects on which they operate into separate classes called visitors. This lets the classes to be more focused on their main job hence promoting flexibility and maintainability.
```


