Aim of this project:

-Get understanding of how React Native works, specifically:
How to initialise app
How to style
How to test
How to Deploy

To get an idea of how these work, I will create a book review app that takes user input and displays it on the screen.

Log of coding:
using Android Studio, created virtual environment to get instant feedback on how app behaves
Looking at docs, very basic view and text tags added with lorem ipsum text and demo of how inheritence works with styling.



https://reactnative.dev/docs/button - Button 
https://reactnative.dev/docs/textinput  -  list of react native props for textinput
https://reactnative.dev/docs/flatlist - flatlist

Random thoughts below, maybe useful when coming back to RN later

buttons are difficult to use for touch components, cant really style them.
use Touchable components for on touch events.
Button is a self closing tag that takes the prop of "title={}" to denote what it is. Other props like onPress, accessibilityLabel are available.

Mapping through an array to display a list similar to React. 
FlatList is an alternative and is a little different
    -Self closing tag that needs props to do its thing
    -data: what you are mapping over
    - renderItem: what to do with each element you are mapping over - ({ destructure element here for access to it all}) => ()
    -FlatList better for longer lists
    -Flatlist automatically looks for a key property

 Touch components are many and varied! Getting touchopacity to work is a little fiddly.

 flexbox and react native:
 sandbox branch has a few things to play around with for flexbox stuff
 flex: 1 property is how much of the available space the object will try and take up - 1 is 100% .5 is 50%.
 flexdirection and justifycontent are the same as css