-- relationcustom.techs definition

CREATE TABLE `techs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- relationcustom.users definition

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- relationcustom.users_techs definition

CREATE TABLE `users_techs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `active` tinyint NOT NULL,
  `user_id` int NOT NULL,
  `tech_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_82a2dcacc9c682bc4e8ab396d9d` (`user_id`),
  KEY `FK_32f239b83725edc07a4b07410b1` (`tech_id`),
  CONSTRAINT `FK_32f239b83725edc07a4b07410b1` FOREIGN KEY (`tech_id`) REFERENCES `techs` (`id`),
  CONSTRAINT `FK_82a2dcacc9c682bc4e8ab396d9d` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
