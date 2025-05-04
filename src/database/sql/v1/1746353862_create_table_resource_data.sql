CREATE TABLE IF NOT EXISTS `resource_data` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `course_id` INT NOT NULL,
    `company_name` VARCHAR(255),
    `industry` VARCHAR(255),
    `location` VARCHAR(255),
    `careers_url` VARCHAR(255),
    `linkedin_url` VARCHAR(255),
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `deleted_at` TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
    INDEX `idx_course_id` (`course_id`),
    INDEX `idx_deleted_at` (`deleted_at`)
);