# fitOrDead-api
Server API for fitOrDead app


Server API includes 3 subsystems:
1. Migrations
2. Database
3. Client API

# Migrations
Responsibilites of this system are organization simple and lightweight migrations and rollbacks. Goal is to provide ready-to-use database for other systems. To work with this system, you should use "npm migrate" command, and, here we are, feel free to use your new ready-to-use database. :)

# Database
This system provides a set of classes, which gives an access to data. Here we use Active Record pattern.

# Client API
System of Client API provides public interface for getting and manipulating data through routes and services.
