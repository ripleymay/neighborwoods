# NeighborWoods (Remastered)

A business app for Austin based non-profit [TreeFolks](https://www.treefolks.org/get-a-tree/neighborwoods/). The NeighborWoods program, funded by the City of Austin and Austin Energy, distributes over 4500 trees annually to help shade the city and reduce the urban heat island effect.

Users can place orders for free trees that will be delivered to their homes, view their past orders, and view info on trees that are currently being offered. Admins can create, edit, and change availability of trees, delete orders and update their statuses, and view and delete users.

The main benefits of this remastered version are...
* Email & password based login rather than single use key based login
* Prevention of duplicate orders at any given address
* Users can 'place' trees themselves rather than taking employee time
* Address validation and automatic geocoding
* No reliance on third party data platform (previously used Fulcrum)
* Improved email and phone number validation
* More appealing UI


## Getting started

**Visit the web app [here](https://neighborwoods.herokuapp.com/)!**

What viewers see...
![AuthPage](https://i.imgur.com/a57mRlM.png)

What users see...
![OrdersPage](https://i.imgur.com/b8vsOD5.png)
![TreePage](https://i.imgur.com/W7Q54Wl.png)
![MapPage](https://i.imgur.com/4ULarpa.png)

What admins see...
![AdminPage](https://i.imgur.com/TxqShyT.png)

View planning on the Trello [board](https://trello.com/b/e6e49zdm/neighborwoods-remastered).


## Next steps

One feature from the old web app that this one does not yet include is a visual representation of how much planting space trees will need. I would love to incorporate circular polygons on the map widget to show 10ft radius, 20ft radius, etc. so that users know how many trees they can afford to plant on their property.

The other pieces of ideal functionality...
* Automatic rejection of order if address is outside of Austin Full Purpose Jurisdiction, AKA the boundaries of eligibility for the program
* Distinction of 'type' of order - Residential vs Community Group, for example - and dynamically set tree number limit
* Mass updating of orders by an admin for scaling to production use
* Search/sort functions for users/orders by an admin
* Ability to export data to Excel for analysis (or alternatively perform number crunching within the app for displaying totals and tree numbers per season)


## Technologies used
* MongoDB/Mongoose
* Express
* React
* Node.js
* Google Places, Geocoding, and Maps Javascript API