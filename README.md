## My Web Application (TableSeeker)

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
This is a browser based web application that allows diners to search for restaurants with vacant seating sorted by distance and cost.

* Developers:

* Stanley Chow
* Caroline Lin
* Ebony Proskow
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Firebase and Firestore
	
## Content
Content of the project folder:
C:.
│   .gitignore                                          # Git ignore file
│   Atlas Steak + Fish.html                             # Restaurant info page
│   cost.html                                           # Sort by cost map
│   distance.html                                       # Sort by distance maps
│   Grand Dynasty Seafood Restaurant.html               # Restaurant info page
│   help.html                                           # Help page with FAQ
│   index.html                                          # Landing page
│   list_view.html                                      # Template for "sortBy" html pages
│   login-success.html                                  # Redirected here after successful login
│   login.html                                          # Login page
│   main.html                                           # Main html page
│   No. 1 Beef Noodle.html                              # Restaurant info page
│   Personas Patio Restaurant And Lounge.html           # Restaurant info page
│   profile.html                                        # Logged in user's profile page
│   README.md                                           # You are here!
│   restaurantTemplate.html                             # Template for restaurant info pages
│   review.html                                         # Restaurant review submission page
│   reviewThanks.html                                   # Review success page
│   sortByCost.html                                     # Sort by cost in a list-view
│   sortByDistance.html                                 # Sort by distance in a list-view
│   sortByVacancy.html                                  # Sort by vacancy in a list-view
│   Sushi S Japanese Restaurant.html                    # Restaurant info page
│   template.html                                       # Template for generic web pages
│   vacancy.html                                        # Sort by vacancy map
│
├───.vscode
│       settings.json
│
├───Firebase hosting files                              # Firebase hosting files
│   │   .firebaserc
│   │   404.html
│   │   firebase.json
│   │   firestore.indexes.json
│   │   firestore.rules
│   │
│   └───.firebase
│           hosting..cache
│
├───images
│       Atlas Steak + Fish.jpg                          # Restaurant image displayed on list view pages
│       atlas.jpg                                       # Picture 1 in the image gallery on Restaurant info pages
│       atlas2.jpg                                      # Picture 2 in the image gallery on Restaurant info pages
│       atlas3.jpg                                      # Picture 3 in the image gallery on Restaurant info pages
│       background4.png                                 # Background image for web pages
│       background5.png                                 # Background image for web pages
│       favicon.ico                                     # Favicon icon across all web pages
│       Grand Dynasty Seafood Restaurant.jpg            # Restaurant image displayed on list view pages
│       grand-dynasty2.jpg                              # Picture 2 in the image gallery on Restaurant info pages
│       grand-dynasty3.jpg                              # Picture 3 in the image gallery on Restaurant info pages
│       grand_dynasty.jpg                               # Picture 1 in the image gallery on Restaurant info pages
│       logo2-192x192.png                               # TableSeeker logo resized
│       logo2.png                                       # TableSeeker logo full sized
│       main-background.jpg                             # Background image for web pages
│       main-background2.jpg                            # Background image for web pages
│       main-background3.jpg                            # Background image for web pages
│       No. 1 Beef Noodle.jpg                           # Restaurant image displayed on list view pages
│       no1_beef_noodle.jpg                             # Picture 1 in the image gallery on Restaurant info pages
│       no1_beef_noodle2.jpg                            # Picture 2 in the image gallery on Restaurant info pages
│       no1_beef_noodle3.jpg                            # Picture 3 in the image gallery on Restaurant info pages
│       Personas Patio Restaurant And Lounge.jpg        # Restaurant image displayed on list view pages
│       personas.jpg                                    # Picture 1 in the image gallery on Restaurant info pages
│       personas2.jpg                                   # Picture 2 in the image gallery on Restaurant info pages
│       personas3.jpg                                   # Picture 3 in the image gallery on Restaurant info pages
│       Sushi S Japanese Restaurant.jpg                 # Restaurant image displayed on list view pages
│       sushiS.jpg                                      # Picture 1 in the image gallery on Restaurant info pages
│       sushiS2.jpg                                     # Picture 2 in the image gallery on Restaurant info pages
│       sushiS3.jpg                                     # Picture 3 in the image gallery on Restaurant info pages
│
├───scripts                                             # Folder for scripts
│       authentication.js                               # JS for user authentication
│       eachRestaurant.js                               # JS for restaurant info pages
│       firebaseAPI_BBY04.js                            # Firebase API keys
│       profile.js                                      # JS for logged in user's profile page
│       restaurant_list.js                              # JS for restaurant list view pages
│       restaurant_translation.js                       # Writes translated text into database
│       restaurant_vacancy.js                           # Writes vacancy data into database
│       review.js                                       # JS for user submitted reviews
│       script.js                                       # JS to create a personal welcome message after login
│       skeleton.js                                     # JS to write nav and footer skeletons into every page
│       sortByCost.js                                   # JS to sort restaurants by cost and populate sortByCost.html
│       sortByDistance.js                               # JS to sort restaurants by distance and populate sortByDistance.html
│       sortByVacancy.js                                # JS to sort restaurants by vacancy and populate sortByVacancy.html
│
├───styles                                              # Folder for CSS 
│       boostrap-style.css                              # Bootstrap files
│       listviewStyle.css                               # Styling for list view pages
│       restaurantStyle.css                             # Styling for restaurant info pages
│       style.css                                       # Styling across all pages
│
└───text                                                # Folder for skeleton templates
        footer.html                                     # Skeleton template for footer
        nav.html                                        # Skeleton template for top nav bar



## Acknowledgements

* All images of restaurants were obtained from untracked sources in Google's search engine.
* TableSeeker's logo was sourced from an untracked generator and modified to fit our colour scheme.
* Background images were created by our team.

* <a href="https://fonts.google.com/">Google Fonts</a>
* <a href="https://getbootstrap.com/">Bootstrap</a>