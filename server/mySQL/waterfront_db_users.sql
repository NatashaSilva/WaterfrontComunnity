-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: localhost    Database: waterfront_db
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `bio` varchar(255) NOT NULL,
  `postal` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Andrea Andrade','andrea@gmail.com','I love puzzles and solving problems. Currently working on improving my painting skills.','M5V 3A4','$2b$08$LRmgk9kpBoZyaWPTjh3feODLHOre722XydtWv90vWAK/hy/HpDkm6','uploads/Andrea.jpeg'),(2,'Carol Cabral','carol@gmail.com','Love talking about politics and music. My dream is to become a musician.','M5J 2B3','$2b$08$lwpqdDnz0xoaOJa4j0W4IeFFh75hxN3rAi764CARoCfQT38gIm652','uploads/Carol.jpeg'),(3,'Manoela Brito','manoela@gmail.com','I am an environmentalist. Also love spending time in nature, camping, reading, and meeting new people.','M5J 1Z9','$2b$08$lWIo9sfJf8R4IPoTeV9PiOOWuKTeISpYblCFKfYtM0YKHIf3TNJE2','uploads/manoela.jpeg'),(4,'Marina Abreu','marina@gmail.com','A true explorer. I love to spend time outside chatting with friends and discovering new places in my neighbourhood.','M5H 4H0','$2b$08$12g93whAwJp3FuZEh8vWw.WPysR5Dm0p1ROK6jOXZlIk4nhLrwRM.','uploads/marina.jpeg'),(5,'Natasha da Silva','natasha@gmail.com','Passionate about learning new things and traveling. I  love spending time in nature, reading books about politics and the environment, and chatting with friends.','M5E 1Z4','$2b$08$l8WQBI.Uz2pMCG1pRAOpVeO6W6f8qUBC9KBYjfmjfSpx.V16DupKO','uploads/natasha.jpg');
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

-- Dump completed on 2021-06-25 19:07:58
