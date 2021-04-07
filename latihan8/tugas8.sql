-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 08, 2021 at 11:50 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tugas8`
--

-- --------------------------------------------------------

--
-- Table structure for table `daftar_mahasiswa`
--

CREATE TABLE `daftar_mahasiswa` (
  `NIM` int(10) NOT NULL,
  `nama` text NOT NULL,
  `kelas` varchar(20) NOT NULL,
  `semester` int(5) NOT NULL,
  `alamat` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `daftar_mahasiswa`
--

INSERT INTO `daftar_mahasiswa` (`NIM`, `nama`, `kelas`, `semester`, `alamat`) VALUES
(123451, 'abe', 'IT', 1, 'bali'),
(123452, 'cede', 'IT', 1, 'tegal'),
(123453, 'eef', 'TI', 1, 'bandung'),
(123454, 'geha', 'IT', 1, 'jakarta'),
(123456, 'ije', 'TI', 1, 'fores');

-- --------------------------------------------------------

--
-- Table structure for table `film_bioskop`
--

CREATE TABLE `film_bioskop` (
  `film` varchar(40) NOT NULL,
  `hari` text NOT NULL,
  `jam` varchar(10) NOT NULL,
  `tempat` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `film_bioskop`
--

INSERT INTO `film_bioskop` (`film`, `hari`, `jam`, `tempat`) VALUES
('film a', 'senin', '10.30', 'pintu 1'),
('film b', 'selasa', '12.30', 'pintu 1'),
('film c', 'senin', '12.30', 'pintu 4');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
