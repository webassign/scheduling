CREATE TABLE `deployment_rules` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `course_id` int(11) NOT NULL,
 `assignment_id` int(11) NOT NULL,
 `section_id` int(11) DEFAULT NULL,
 `week` tinyint(4) NOT NULL,
 `type` tinyint(4) NOT NULL,
 `unit` varchar(10) DEFAULT NULL,
 `quantity` smallint(6) DEFAULT NULL,
 `time` timestamp NULL DEFAULT NULL,
 `relative_to` varchar(50) NOT NULL,
 `meet_days` int(7) DEFAULT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `course_id` (`course_id`,`assignment_id`,`week`,`type`,`section_id`)
)


SELECT * FROM deployment_rule WHERE course_id = ?;
SELECT * FROM deployment_rule WHERE course_id = ? AND assignment_id = ? AND week = ?;

INSERT INTO deployment_rule (course_id, section_id, assignment_id, week, type, unit, quantity, time, relative_to, meet_days) VALUES(?,?,?,?,?,?,?,?,?,?);
INSERT INTO deployment_rule (course_id, assignment_id, week, type, unit, quantity, time, relative_to, meet_days) VALUES(?,?,?,?,?,?,?,?,?);

UPDATE deployment_rule SET week=?, unit=?, quantity=?, time=?, relative_to=?, meet_days=? WHERE id=?;

DELETE FROM deployment_rules WHERE course_id=?;
DELETE FROM deployment_rules WHERE course_id=? AND assignment_id=? AND week=?;
DELETE FROM deployment_rules WHERE course_id=? AND assignment_id=? AND week=? AND section_id=?;
