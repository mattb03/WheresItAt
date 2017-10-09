-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2017 at 06:24 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maindb`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `filename` varchar(10000) DEFAULT NULL,
  `itemname` varchar(10000) DEFAULT NULL,
  `description` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `email`, `filename`, `itemname`, `description`) VALUES
(31, 'matt_b03@yahoo.com', 'windows 10 upgrade.png-1502922972428', 'windows screenshot', 'a screenshot of windows'),
(32, 'matt_b03@yahoo.com', 'renderMySQLData.png-1502925742642', 'render mysql data', 'a description'),
(33, NULL, 'renderMySQLData.png-1502925795257', 'render mysql data', 'a description'),
(34, NULL, 'windows 10 upgrade.png-1504840982980', 'windows 10 screenshot', 'screenshot ');

-- --------------------------------------------------------

--
-- Table structure for table `messageinbox`
--

CREATE TABLE `messageinbox` (
  `ToRecipient` tinytext,
  `FromSender` varchar(30) DEFAULT NULL,
  `Subject` varchar(30) DEFAULT NULL,
  `MessageContent` longtext,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `inbox` varchar(255) DEFAULT NULL,
  `coursesRated` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `firstname`, `lastname`, `picture`, `inbox`, `coursesRated`, `email`) VALUES
(1, 'matt', 'benavides', NULL, NULL, NULL, 'matt_b03@yahoo.com');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `ID` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`ID`, `email`, `password`, `firstName`, `lastName`) VALUES
(0, 'matt_b03@yahoo.com', 'abc123', 'matt', 'benavides'),
(0, 'john_doe@xyz.com', '$2a$10$BlcvgwwbGM/6AU7dyaHtS.V8DRp1vu7KhKgZTs/YC7H3wxPPRjNGe', 'john', 'doe');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `email`, `password`, `firstName`, `lastName`, `city`, `state`, `country`) VALUES
(0, 'matt_b03@yahoo.com', 'abc123', 'matt', 'benavides', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messageinbox`
--
ALTER TABLE `messageinbox`
  ADD UNIQUE KEY `emailIndex` (`email`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
