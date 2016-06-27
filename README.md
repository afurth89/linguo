# Linguo

##Introduction

"Linguo" is a full stack web application that connects users based on their location and profiency in different languages, facillitating communication via direct messaging for shared teaching and learning experiences.

Linguo is perfect for helping:
- someone with a desire to learn a language find a tutor
- a tutor identify potential clients
- a group of individuals connect to form a language study group

This application was built over four days, in collaboration with Thomas O'Brien and Ken Korcal. My contribution was completely setting up Passport OAuth, writing a majority of Knex queries to our PostgreSQL database, and writing UI/UX for the chat messaging feature.


##Technologies Used
- HTML5 / Jade
- CSS3/Bootstrap
- Javascript
- jQuery
- Node.js / ExpressJS / Knex.js
- PostgreSQL
- Passport OAuth

##How It Works
The app works as such:

1. Users log in using Google OAuth, and create an account. In their account, they specify:
	+ Location
	+ Age
	+ Languages they are *proficient* in
	+ Languages they *desire* to learn
	+ A short bio
2. Users can they use the seach filter to specify their location and a choice of language. The results will return any user in their location who specifies that language (*either* being proficient in it or desiring to learn it).
3. Users can then send a message directly to a user, allowing them to facilitate whatever of interaction will be helpful to their language needs (asking for tutoring, forming a study group, etc.).

 

##Desired Improvements
As I mentioned earlier, this application was built over only four days and certainly has room for improvements. Here are a number of things I'd like to improve on. This list is largely to keep track of my own thoughts, but if you have suggestions please let me know: [andrew.furth@gmail.com](mailto:andrew.furth@gmail.com)

- Creating other authentication strategies (both local and other OAuths)
- Allowing location searching to be more forgiving. Currently the city must be a direct match. We'd like to use Google Maps API to allow for more radius-based location searching
- Allow users to specify when searching a language whether they're looking for someone proficient, someone desiring to learn, or both
- Enable multi-party chat - currently chat is only peer-to-peer 
- Generally refactoring the code to make it more DRY
 