-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 29, 2023 at 03:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courseonline`
--

-- --------------------------------------------------------

--
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banks`
--

INSERT INTO `banks` (`id`, `name`) VALUES
(1, 'BNI'),
(2, 'BCA'),
(3, 'Mandiri'),
(4, 'BSI');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `courseId`, `userId`) VALUES
(20, 44, 100),
(21, 42, 98),
(24, 42, 58),
(25, 45, 58);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `subkategori_id` int(11) NOT NULL,
  `judul` varchar(255) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `harga` varchar(20) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `level_id` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `subkategori_id`, `judul`, `deskripsi`, `harga`, `thumbnail`, `rating`, `level_id`, `created_at`, `updated_at`) VALUES
(39, 21, 'Arduino IOT', 'Learning arduino from scratch', '700000', 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 4, 1, '2023-07-31 03:45:15', '2023-07-31 03:45:15'),
(40, 21, 'IOT with Python', 'Learning IOT with python programming', '1000000', 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80', 5, 1, '2023-07-31 03:45:15', '2023-07-31 03:45:15'),
(41, 20, 'Kotlin Programming', 'Kotlin programming for android app', '900000', 'https://images.unsplash.com/photo-1588864721034-4afdb05a5799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', 4, 1, '2023-07-31 03:45:15', '2023-07-31 03:45:15'),
(42, 26, 'Laravel for Beginner', 'Laravel PHP for beginner programmer', '700000', 'https://images.unsplash.com/photo-1618388810903-840bb0d15ea5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 4, 1, '2023-07-31 03:45:15', '2023-07-31 03:45:15'),
(43, 33, 'UI Design with Figma', 'Learning Figma for create amazing UI', '600000', 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80', 5, 1, '2023-07-31 03:45:15', '2023-07-31 03:45:15'),
(44, 26, 'Reactjs Tutorial', 'Reactjs course for modern web app', '1000000', 'https://images.unsplash.com/photo-1482745637430-91c0bbcea3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 5, 1, '2023-07-31 03:48:09', '2023-07-31 03:48:09'),
(45, 26, 'Angular 2023', 'Learning Angular for beginner to advance', '900000', 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 4, 1, '2023-07-31 03:48:09', '2023-07-31 03:48:09'),
(46, 13, 'Fortinet Course', 'Fortine Crash Course for beginner', '700000', 'https://images.unsplash.com/photo-1598946114829-162ee19ac506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 4, 1, '2023-08-29 03:41:54', '2023-08-29 03:41:54'),
(47, 20, 'Java Programming', 'Learning language Java from scratch', '1000000', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80', 4, 1, '2023-08-29 04:04:40', '2023-08-29 04:04:40'),
(48, 26, 'Tailwind for Beginner', 'Learning Tailwind CSS for Beginner', '900000', 'https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80', 4, 1, '2023-08-29 04:04:40', '2023-08-29 04:04:40'),
(49, 26, 'HTML, CSS & JS', 'Learning HTML, CSS & JS beginner', '500000', 'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 4, 1, '2023-08-29 04:04:40', '2023-08-29 04:04:40');

-- --------------------------------------------------------

--
-- Table structure for table `enroll`
--

CREATE TABLE `enroll` (
  `id` int(11) NOT NULL,
  `id_course` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `transactionId` int(11) NOT NULL,
  `tanggal_pembelian` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `enroll`
--

INSERT INTO `enroll` (`id`, `id_course`, `id_user`, `status`, `transactionId`, `tanggal_pembelian`) VALUES
(30, 45, 98, 1, 12, '2023-08-16'),
(33, 41, 58, 1, 14, '2023-08-16'),
(34, 40, 58, 1, 14, '2023-08-16'),
(35, 39, 98, 1, 15, '2023-08-16'),
(36, 44, 98, 1, 15, '2023-08-16'),
(37, 40, 98, 1, 16, '2023-08-17'),
(38, 39, 101, 1, 17, '2023-08-28'),
(39, 44, 58, 1, 18, '2023-08-29');

-- --------------------------------------------------------

--
-- Table structure for table `interests`
--

CREATE TABLE `interests` (
  `id` int(11) NOT NULL,
  `topicId` int(11) NOT NULL,
  `levelId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `interests`
--

INSERT INTO `interests` (`id`, `topicId`, `levelId`, `userId`, `categoryId`) VALUES
(2, 37, 2, 103, 1),
(3, 32, 2, 58, 1),
(4, 37, 2, 98, 1),
(5, 33, 1, 60, 1),
(6, 37, 2, 94, 3),
(7, 33, 2, 97, 15),
(8, 32, 2, 100, 1),
(9, 32, 2, 101, 1),
(10, 41, 2, 104, 1);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `keterangan`, `created_at`, `updated_at`) VALUES
(1, 'Pengembangan', '2023-05-03 06:55:22', '2023-05-02 23:55:22'),
(3, 'Jaringan', '2023-02-26 11:36:02', '2023-02-24 13:57:54'),
(14, 'Perangkat Keras dan Lunak', '2023-02-26 05:23:52', '2023-02-26 05:23:52'),
(15, 'Design', '2023-02-26 12:40:06', '2023-02-26 05:40:06');

-- --------------------------------------------------------

--
-- Table structure for table `lecture`
--

CREATE TABLE `lecture` (
  `id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `video` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `level`
--

INSERT INTO `level` (`id`, `keterangan`) VALUES
(1, 'Pemula'),
(2, 'Menengah'),
(3, 'Lanjutan');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `question` varchar(255) NOT NULL,
  `options` varchar(255) NOT NULL,
  `answer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `keterangan`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `judul_section` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`id`, `course_id`, `judul_section`, `created_at`, `updated_at`) VALUES
(1, 44, 'Creating Content With JSX', '2023-08-15 03:48:16', '2023-08-15 03:48:16'),
(2, 44, 'Building Reusable Component', '2023-08-15 03:48:16', '2023-08-15 03:48:16'),
(7, 39, 'Introduction', '2023-08-28 06:46:22', '2023-08-28 06:46:22'),
(8, 40, 'Python Introduction', '2023-08-28 06:49:24', '2023-08-28 06:49:24'),
(9, 45, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20'),
(10, 46, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20'),
(11, 49, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20'),
(12, 47, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20'),
(13, 41, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20'),
(14, 42, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20'),
(15, 48, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20'),
(16, 43, 'Introduction', '2023-08-29 04:52:20', '2023-08-29 04:52:20');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `keterangan`) VALUES
(1, 'Aktif'),
(2, 'Tidak Aktif');

-- --------------------------------------------------------

--
-- Table structure for table `subkategori`
--

CREATE TABLE `subkategori` (
  `id` int(11) NOT NULL,
  `kategori_id` int(11) NOT NULL,
  `keterangan` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subkategori`
--

INSERT INTO `subkategori` (`id`, `kategori_id`, `keterangan`, `created_at`, `updated_at`) VALUES
(13, 3, 'VPN', '2023-02-28 01:54:51', '2023-02-27 18:54:51'),
(20, 1, 'Pengembangan Mobile', '2023-03-03 03:58:37', '2023-03-02 20:58:37'),
(21, 14, 'IOT', '2023-02-28 20:57:33', '2023-02-28 20:57:33'),
(26, 1, 'Pengembangan Web', '2023-03-02 21:16:58', '2023-03-02 21:16:58'),
(33, 15, 'UI UX Design', '2023-07-31 03:38:50', '2023-07-31 03:38:50');

-- --------------------------------------------------------

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
  `id` int(11) NOT NULL,
  `keterangan` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` (`id`, `keterangan`, `created_at`, `updated_at`, `course_id`) VALUES
(32, 'Angular', '2023-08-27 11:31:37', '2023-08-27 11:31:37', 45),
(33, 'Python', '2023-08-27 11:31:37', '2023-08-27 11:31:37', 40),
(34, 'IOT', '2023-08-27 11:31:37', '2023-08-27 11:31:37', 39),
(35, 'PHP', '2023-08-27 11:31:37', '2023-08-27 11:31:37', 42),
(36, 'Design', '2023-08-27 11:31:37', '2023-08-27 11:31:37', 43),
(37, 'JavaScript', '2023-08-27 11:31:37', '2023-08-27 11:31:37', 44),
(41, 'Android', '2023-08-29 02:14:15', '2023-08-29 02:14:15', 41),
(42, 'Fortinet', '2023-08-29 03:42:29', '2023-08-29 03:42:29', 46),
(43, 'HTML, CSS, Javascript', '2023-08-29 04:06:03', '2023-08-29 04:06:03', 49),
(44, 'Java', '2023-08-29 04:06:03', '2023-08-29 04:06:03', 47),
(45, 'Tailwind', '2023-08-29 04:06:03', '2023-08-29 04:06:03', 48);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `sender` varchar(50) NOT NULL,
  `bankId` int(11) NOT NULL,
  `account` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `amount` int(11) NOT NULL,
  `statusId` int(11) NOT NULL DEFAULT 2,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `sender`, `bankId`, `account`, `image`, `amount`, `statusId`, `createdAt`, `updatedAt`) VALUES
(12, 'Pirmansyah', 1, '0628784', '/storage/transactions/tf-98-1692156167044.png', 900000, 2, '2023-08-16 03:21:38', '2023-08-16 03:21:38'),
(14, 'Raihan', 2, '02309404', '/storage/transactions/tf-58-1692158142826.png', 1900000, 1, '2023-08-16 03:54:33', '2023-08-16 03:54:33'),
(15, 'Pirmansyah', 1, '06183747', '/storage/transactions/tf-98-1692158399188.png', 1700000, 1, '2023-08-16 03:58:50', '2023-08-16 03:58:50'),
(16, 'Pirmansyah', 1, '01276374', '/storage/transactions/tf-98-1692241648513.png', 1000000, 1, '2023-08-17 03:06:18', '2023-08-17 03:06:18'),
(17, 'Salah', 2, '0183787484', '/storage/transactions/tf-101-1693184908219.png', 700000, 1, '2023-08-28 01:07:02', '2023-08-28 01:07:02'),
(18, 'Raihan', 1, '01230404', '/storage/transactions/tf-58-1693270299930.png', 1000000, 1, '2023-08-29 00:50:13', '2023-08-29 00:50:13');

-- --------------------------------------------------------

--
-- Table structure for table `transaction_status`
--

CREATE TABLE `transaction_status` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transaction_status`
--

INSERT INTO `transaction_status` (`id`, `name`) VALUES
(1, 'completed'),
(2, 'uncompleted');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `status_id` int(11) DEFAULT NULL,
  `foto_profile` varchar(255) DEFAULT NULL,
  `interest` int(11) DEFAULT NULL,
  `tanggal_dibuat` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `password`, `salt`, `role_id`, `status_id`, `foto_profile`, `interest`, `tanggal_dibuat`) VALUES
(58, 'Raihan', 'raihankepo122@gmail.com', '$2y$10$2gzSHg37RY51yXb/sObruOdRr96jtZfma4rste2PgR3i1TQGpt4c.', NULL, 2, 1, NULL, 1, '2023-02-21 13:59:10'),
(60, 'Fajar Habib', 'fajarhabib@gmail.com', '$2y$10$IzvZkTmvWoKhdrcIQRYj1.oAGZspXtmQBepRPtkfEKCv46C8bdoHC', 'NwjdNuuhU6', 2, 1, NULL, 3, '2023-02-22 06:26:02'),
(94, 'Tsabit', 'tsabit@gmail.com', '$2y$10$2gzSHg37RY51yXb/sObruOdRr96jtZfma4rste2PgR3i1TQGpt4c.', NULL, 1, 1, '/storage/foto_profile/1683261052.jpg', 3, '2023-02-23 14:31:02'),
(97, 'firdaanjelina', 'firdaanjel@gmail.com', '$2y$10$hHkYWVE5cPaC43YNI8FRcOHazTHHm7Mag7fKZntwWrFpbtxmRC2CW', NULL, 1, 1, NULL, 15, '2023-03-10 18:45:49'),
(98, 'Pirmansyah', 'pirmansyah@gmail.com', '$2a$12$RgAz.INhNLcAL2JwaK4Bi.nPzHj4QqhwcNfrBIQMDHKREgryGCrUW', NULL, 2, 1, NULL, 1, '2023-08-01 09:40:58'),
(100, 'Ardiet', 'ardiet@gmail.com', '$2a$12$KbIFKshjxSWCjphzHBv/.uUH8/yx5Zp9MMfGpLS5t85c8x6x3QaDW', NULL, 2, 1, NULL, 1, '2023-08-17 23:05:11'),
(101, 'salah', 'salah@gmail.com', '$2a$12$NFtUZLynOreYnufRFjYMNeZUH/FUSlSel78oTPkwLtygBa79sth4S', NULL, 2, 1, NULL, 14, '2023-08-27 17:57:39'),
(103, 'fermin', 'fermin@gmail.com', '$2a$12$XzBVrFaN9x7dHlmBjkTeme1vsvO/S6pSFSXajSwTMqDBZCeaZg4AS', NULL, 2, 1, NULL, NULL, '2023-08-29 07:36:26'),
(104, 'contoh', 'contoh@gmail.com', '$2a$12$/3UDWDyqXdCB3chmgEVlueBC4aFVNQExu1f.bOS8dS.68olZUxd6C', NULL, 2, 1, NULL, NULL, '2023-08-29 20:19:46');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `judul_video` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `section_id`, `judul_video`, `link`, `updated_at`, `created_at`) VALUES
(1, 1, 'What is JSX?', 'https://www.youtube.com/watch?v=9GtB5G2xGTY', '2023-08-15 03:56:17', '2023-08-15 03:56:17'),
(2, 1, 'Printing javacsript variable in jsx', 'https://www.youtube.com/watch?v=9GtB5G2xGTY&list=PLruo2gSoqleiMVEIqmvZkIpFEN_TPt0hR&index=3', '2023-08-15 03:56:17', '2023-08-15 03:56:17'),
(3, 2, 'Create first components', 'https://www.youtube.com/watch?v=ZNVRETPPW24&list=PLCZlgfAG0GXALZIcEe2t3XVuQ50JYbsbA', '2023-08-15 05:54:01', '2023-08-15 05:54:01'),
(4, 2, 'Class Component', 'https://www.youtube.com/watch?v=ZNVRETPPW24&list=PLCZlgfAG0GXALZIcEe2t3XVuQ50JYbsbA', '2023-08-15 05:54:01', '2023-08-15 05:54:01'),
(8, 7, 'What is IOT?', 'https://www.youtube.com/watch?v=6mBO2vqLv38', '2023-08-28 06:48:13', '2023-08-28 06:48:13'),
(9, 8, 'Python intro', 'https://www.youtube.com/watch?v=x7X9w_GIm1s', '2023-08-28 06:52:58', '2023-08-28 06:52:58'),
(10, 15, 'Introduction', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18'),
(11, 14, 'Intro', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18'),
(12, 13, 'Intro', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18'),
(13, 12, 'Intro', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18'),
(14, 11, 'Intro', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18'),
(15, 10, 'Intro', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18'),
(16, 9, 'Intro', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18'),
(17, 16, 'Intro', 'https://www.youtube.com/watch?v=NArVyt8t-z4', '2023-08-29 04:56:18', '2023-08-29 04:56:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_judul` (`judul`),
  ADD KEY `fk_subkategori` (`subkategori_id`);

--
-- Indexes for table `enroll`
--
ALTER TABLE `enroll`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_course` (`id_course`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `interests`
--
ALTER TABLE `interests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lecture`
--
ALTER TABLE `lecture`
  ADD PRIMARY KEY (`id`),
  ADD KEY `section_id` (`section_id`);

--
-- Indexes for table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `section_id` (`section_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subkategori`
--
ALTER TABLE `subkategori`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subkategori_ibfk_1` (`kategori_id`);

--
-- Indexes for table `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_course_id` (`course_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction_status`
--
ALTER TABLE `transaction_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`),
  ADD KEY `section_id` (`section_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banks`
--
ALTER TABLE `banks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `enroll`
--
ALTER TABLE `enroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `interests`
--
ALTER TABLE `interests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `lecture`
--
ALTER TABLE `lecture`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subkategori`
--
ALTER TABLE `subkategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `topic`
--
ALTER TABLE `topic`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `transaction_status`
--
ALTER TABLE `transaction_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `fk_subkategori` FOREIGN KEY (`subkategori_id`) REFERENCES `subkategori` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `enroll`
--
ALTER TABLE `enroll`
  ADD CONSTRAINT `enroll_ibfk_1` FOREIGN KEY (`id_course`) REFERENCES `course` (`id`),
  ADD CONSTRAINT `enroll_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `lecture`
--
ALTER TABLE `lecture`
  ADD CONSTRAINT `lecture_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`);

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`);

--
-- Constraints for table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `section_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`);

--
-- Constraints for table `subkategori`
--
ALTER TABLE `subkategori`
  ADD CONSTRAINT `subkategori_ibfk_1` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `topic`
--
ALTER TABLE `topic`
  ADD CONSTRAINT `fk_course_id` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

--
-- Constraints for table `video`
--
ALTER TABLE `video`
  ADD CONSTRAINT `video_ibfk_1` FOREIGN KEY (`section_id`) REFERENCES `section` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
