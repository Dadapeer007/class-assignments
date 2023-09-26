/*Q1. Design Netflix Schema
Unsolved
Design Database Schema for a system like Netflix with the following Use Cases. You can draw it on pen and paper and upload the image of your solution.

Use Case

Netflix has users
Every user has an email and a password
Users can create profiles to have separate independent environments.
Each profile has a name and a type. Type can be KID or ADULT.
There are multiple videos on Netflix.
For each video, there will be a title, description and a cast.
A cast is a list of actors who were a part of the video. For each actor, we need to know their name and list of videos they were a part of.
For every video, for any profile who watched that video, we need to know the status (COMPLETED/ IN PROGRESS).
For every profile for whom a video is in progress, we want to know their last watch timestamp.*/

CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);

-- Create the Profiles table
CREATE TABLE Profiles (
    ProfileID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Name VARCHAR(255) NOT NULL,
    Type ENUM('KID', 'ADULT') NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Create the Videos table
CREATE TABLE Videos (
    VideoID INT AUTO_INCREMENT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Cast VARCHAR(255) NOT NULL -- You may need to adjust the datatype for Cast
);

-- Create the Actors table
CREATE TABLE Actors (
    ActorID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL
);

-- Create a junction table to represent the many-to-many relationship between Actors and Videos
CREATE TABLE ActorVideo (
    ActorID INT,
    VideoID INT,
    FOREIGN KEY (ActorID) REFERENCES Actors(ActorID),
    FOREIGN KEY (VideoID) REFERENCES Videos(VideoID)
);

-- Create the Views table
CREATE TABLE Views (
    ViewID INT AUTO_INCREMENT PRIMARY KEY,
    ProfileID INT,
    VideoID INT,
    Status ENUM('COMPLETED', 'IN PROGRESS') NOT NULL,
    LastWatchTimestamp TIMESTAMP,
    FOREIGN KEY (ProfileID) REFERENCES Profiles(ProfileID),
    FOREIGN KEY (VideoID) REFERENCES Videos(VideoID)
);
