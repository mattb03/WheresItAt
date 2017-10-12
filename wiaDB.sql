-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: WheresItAtDB
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `itemName` varchar(255) DEFAULT NULL,
  `itemDescription` varchar(255) DEFAULT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  `imagePath` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (3,'matt.benavides92@gmail.com','something','','Scan 15.jpeg','public/images/Scan 15.jpeg'),(4,'matt.benavides92@gmail.com','fdaf','','quiz2b.jpeg','public/images/quiz2b.jpeg'),(5,'matt.benavides92@gmail.com','something','','Scan 16.jpeg','public/images/Scan 16.jpeg'),(6,'matt.benavides92@gmail.com','something','','Scan 15.jpeg','public/images/Scan 15.jpeg'),(7,'matt.benavides92@gmail.com','something','a desriotipon','quiz2b.jpeg','public/images/quiz2b.jpeg'),(8,'matt.benavides92@gmail.com','blah','','Scan 15.jpeg','public/images/Scan 15.jpeg'),(9,'matt.benavides92@gmail.com','blah','','Scan 15.jpeg','public/images/Scan 15.jpeg'),(10,'matt.benavides92@gmail.com','blah','','Scan 14.jpeg','public/images/Scan 14.jpeg'),(11,'matt.benavides92@gmail.com','blah','','Scan 14.jpeg','public/images/Scan 14.jpeg'),(12,NULL,'homework','at utsa','Scan 11.jpeg','public/images/Scan 11.jpeg'),(13,'ljimenez311@yahoo.com','homework 2','laksjfd','Scan 17.jpeg','public/images/Scan 17.jpeg'),(14,'ljimenez311@yahoo.com','file','','quiz2b.jpeg','public/images/quiz2b.jpeg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messageinbox`
--

DROP TABLE IF EXISTS `messageinbox`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messageinbox` (
  `ToRecipient` tinytext,
  `FromSender` varchar(30) DEFAULT NULL,
  `Subject` varchar(30) DEFAULT NULL,
  `MessageContent` longtext,
  `email` varchar(30) NOT NULL,
  UNIQUE KEY `emailIndex` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messageinbox`
--

LOCK TABLES `messageinbox` WRITE;
/*!40000 ALTER TABLE `messageinbox` DISABLE KEYS */;
/*!40000 ALTER TABLE `messageinbox` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `inbox` varchar(255) DEFAULT NULL,
  `coursesRated` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,'matt','benavides',NULL,NULL,NULL,'matt_b03@yahoo.com');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `signup`
--

DROP TABLE IF EXISTS `signup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `signup` (
  `ID` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `signup`
--

LOCK TABLES `signup` WRITE;
/*!40000 ALTER TABLE `signup` DISABLE KEYS */;
INSERT INTO `signup` VALUES (0,'matt_b03@yahoo.com','abc123','matt','benavides'),(0,'john_doe@xyz.com','$2a$10$BlcvgwwbGM/6AU7dyaHtS.V8DRp1vu7KhKgZTs/YC7H3wxPPRjNGe','john','doe');
/*!40000 ALTER TABLE `signup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'Matthew','Benavides','matt.benavides92@gmail.com','$2a$08$yh.AUusyn2IplAeBNOcZ1.YugJZDsZrTpAaYHS8m8jAz34Q71Qdra'),(5,'apple','iphone','apple@iphone.com','$2a$08$xJ51mQe9C7mnZ7QZ8gHKFuKRQXPZLJZugM8n2.w7M6Bc.b4ATzePm'),(6,'foo','bar','foo@bar.com','$2a$08$Z.Ki63GhJ/6gXLIxa7J2WO5hyLtgfSWAIyFiTtjGYPRKImUqi2vci'),(7,'lydia','jimenez','ljimenez311@yahoo.com','$2a$08$gG81AzkbzfsgnS869SWUF.aFOMSF9u75CgMTXx.YJzP1tm7mjE.iu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-10-12 16:10:26
