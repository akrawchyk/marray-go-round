# Marray Go Round

Example project developed as a lab for General Assembly's Front-End Web Development course. Aims to teach students how to use arrays by creating an image carousel with each image's URI stored in an array index.

The name is a knock-off of the classic carnival ride, the [Merry Go Round](https://en.wikipedia.org/w/index.php?title=Merry_go_round).

## Requirements

Software requirements are used in development shops all over the world. Many teams use user stories to create requirements that help communicate the details of features for developers to implement. Much like pseudocode, these are a good starting point and are helpful for breaking down what actually needs to be built with code. Here is an example for our carousel:

	Feature: Carousel
		As a user
		I want to view a set of images
		Because I want to see them all without refreshing my page

	Feature: Controls
		As a user
		I want to see the current image number, a next, and a previous button
		Because I want to move the carousel one item at a time

These are feature stories, and are great for encompassing the idea of what we want to build. In order to help identify the distinct parts of these features, we should create scenario stories:

	Scenario: User loads the page
		Given the carousel has been included on the page
		And the carousel is finished loading
		When I see the carousel
		Then the carousel should show me an image
		And next and previous buttons
		And a current image indicator

	Scenario: User clicks next image button
		Given the carousel has more than one image in the set
		And the carousel has finished loading
		When I click on the next image button
		Then the carousel should show the next image in the set
		And the indicator should show the newly displayed image number

	Scenario: User clicks previous image button
		Given the carousel has more than one image in the set
		And the carousel has finished loading
		When I click on the previous image button
		Then the carousel should show the previous image in the set
		And the indicator should show the newly displayed image number

	Scenario: User reaches the end of the images set
		Given the carousel has more than one image in the set
		And the carousel has finished loading
		When I click previous on the first image or next on the last image,
		Then the carousel should wrap and show the last image or the first image, respectively
		And the indicator should show the newly displayed image number

Notice, if we [write these stories correctly](http://pivotallabs.com/well-formed-stories/) we can identify repetitive tasks that are needed everywhere. These tasks, specifically loading the carousel and updating the indicator in this case, are great candidates for becoming functions!

## Instructions

Use the above features and scenario stories for reference as you follow the check-list for building the carousel:

### JavaScript

- [ ] Create an array for storing your set of images
- [ ] Create a variable for storing the current image index of your set
- [ ] Write jQuery to perform a task for each `.marray-go-round` element on the page
- [ ] Create a `$this` variable to store a jQuery object of the current carousel element
- [ ] Write a function that uses jQuery to find the `.marray-go-round__image` element in the current carousel and display the current image using jQuery's `.css()` function (remember to construct the correct css syntax for a backround-image)
- [ ] Use the above function to show the first image in the set
- [ ] Write a function that uses jQuery to find the `.marray-go-round__indicator` element in the current carousel and update the current number text with the new image's index
- [ ] Use the above function in the display image function to always keep the image indicator in sync with the current image
- [ ] Write jQuery to show the next and previous images when the respective buttons are clicked
- [ ] Create a variable to store the count of the images set
- [ ] Write logic to wrap the images at the beginning and end of the set
