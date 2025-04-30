CREATE TABLE IF NOT EXISTS `featured` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `course_id` INT(11) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    INDEX `idx_featured_course_id` (`course_id`),
    INDEX `idx_featured_course_name` (`course_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;