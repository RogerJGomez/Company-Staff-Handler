-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2019 a las 20:49:28
-- Versión del servidor: 10.1.30-MariaDB
-- Versión de PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `codigo` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `codigo`, `nombre`, `email`, `password`) VALUES
(6, 'user', 'User', 'example@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `telefono1` varchar(20) DEFAULT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `rnc` varchar(11) DEFAULT NULL,
  `enc_compras` varchar(60) DEFAULT NULL,
  `tlf_enc_compras` varchar(20) DEFAULT NULL,
  `fiscal` varchar(2) DEFAULT NULL,
  `cuenta` varchar(14) DEFAULT NULL,
  `diascr` int(11) DEFAULT NULL,
  `excento` bit(1) DEFAULT NULL,
  `consignacion` bit(1) DEFAULT NULL,
  `referencia` varchar(30) DEFAULT NULL,
  `inactivo` bit(1) DEFAULT NULL,
  `comision` decimal(20,6) DEFAULT NULL,
  `comercial` varchar(60) DEFAULT NULL,
  `enc_pagos` varchar(60) DEFAULT NULL,
  `tlf_enc_pagos` varchar(20) DEFAULT NULL,
  `otros` varchar(60) DEFAULT NULL,
  `tlf_otros` varchar(20) DEFAULT NULL,
  `inactivonota` varchar(200) DEFAULT NULL,
  `actividad` varchar(60) DEFAULT NULL,
  `proximoa` varchar(250) DEFAULT NULL,
  `administrador` varchar(60) DEFAULT NULL,
  `tlf_admin` varchar(20) DEFAULT NULL,
  `vendedor` varchar(4) DEFAULT NULL,
  `tipoc` varchar(2) DEFAULT NULL,
  `zona` varchar(14) DEFAULT NULL,
  `campo1` varchar(20) DEFAULT NULL,
  `campo2` varchar(20) DEFAULT NULL,
  `campo3` varchar(20) DEFAULT NULL,
  `campo4` varchar(20) DEFAULT NULL,
  `campo5` varchar(20) DEFAULT NULL,
  `paga_flete` bit(1) DEFAULT NULL,
  `flete_valor` decimal(20,6) DEFAULT NULL,
  `limite_act` bit(1) DEFAULT NULL,
  `lim_act_credito` decimal(20,6) DEFAULT NULL,
  `limitefts` int(11) DEFAULT NULL,
  `condicioncr` varchar(100) DEFAULT NULL,
  `descuento` decimal(20,6) DEFAULT NULL,
  `incremento` decimal(20,6) DEFAULT NULL,
  `actualiza` bit(1) DEFAULT NULL,
  `reverificar_data` bit(1) DEFAULT NULL,
  `listap` varchar(9) DEFAULT NULL,
  `nota` varchar(254) DEFAULT NULL,
  `pais` varchar(3) DEFAULT NULL,
  `tipoe` varchar(10) DEFAULT NULL,
  `tipodoc` varchar(10) DEFAULT NULL,
  `_updated` datetime DEFAULT NULL,
  `semana1` bit(1) DEFAULT NULL,
  `semana2` bit(1) DEFAULT NULL,
  `semana3` bit(1) DEFAULT NULL,
  `semana4` bit(1) DEFAULT NULL,
  `dia` varchar(10) DEFAULT NULL,
  `visitador` varchar(11) DEFAULT NULL,
  `semana5` bit(1) DEFAULT NULL,
  `notas` text,
  `activo` tinyint(1) DEFAULT NULL,
  `permisos` varchar(50) NOT NULL,
  `dpto` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`codigo`, `nombre`, `direccion`, `telefono1`, `fax`, `email`, `rnc`, `enc_compras`, `tlf_enc_compras`, `fiscal`, `cuenta`, `diascr`, `excento`, `consignacion`, `referencia`, `inactivo`, `comision`, `comercial`, `enc_pagos`, `tlf_enc_pagos`, `otros`, `tlf_otros`, `inactivonota`, `actividad`, `proximoa`, `administrador`, `tlf_admin`, `vendedor`, `tipoc`, `zona`, `campo1`, `campo2`, `campo3`, `campo4`, `campo5`, `paga_flete`, `flete_valor`, `limite_act`, `lim_act_credito`, `limitefts`, `condicioncr`, `descuento`, `incremento`, `actualiza`, `reverificar_data`, `listap`, `nota`, `pais`, `tipoe`, `tipodoc`, `_updated`, `semana1`, `semana2`, `semana3`, `semana4`, `dia`, `visitador`, `semana5`, `notas`, `activo`, `permisos`, `dpto`) VALUES
('CC-000001', 'Roger Gomez', 'Venezuela', '4168823215', '00100', 'RG@gmail.com', '0001', 'Juan', '42454', '02', '', 3, b'1', b'1', NULL, b'1', '100.000000', 'RG', 'Luis', '02020', 'Pedro', '0120', '150', 'ACS', '10001', 'Jose', '2332', 'AN', '10', 'PETARE EN PINT', NULL, NULL, NULL, NULL, NULL, b'1', '300.000000', b'1', '522.000000', 5, '15', '2000.000000', '350.000000', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'All', 'DEP'),
('CC-000002', 'CARS CORP.', '', '29543122', '', '', '12312', '', NULL, NULL, '', 0, b'1', b'1', NULL, b'1', '0.000000', '1231', '', '', '', '', '', '', '', '', '', '', NULL, '', NULL, NULL, NULL, NULL, NULL, b'1', '0.000000', b'0', '0.000000', 0, NULL, '0.000000', '0.000000', NULL, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `socios`
--

CREATE TABLE `socios` (
  `codigo` varchar(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `cod_guagua` varchar(50) NOT NULL,
  `telefono` varchar(50) NOT NULL,
  `doc_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `socios`
--

INSERT INTO `socios` (`codigo`, `nombre`, `cod_guagua`, `telefono`, `doc_id`) VALUES
('CS-000002', 'Roger', '02142000015', '+58-416-7996641', '27424002'),
('CS-000003', 'Microsoft', 'AFFGG001', '+12-515-1545', '000142010025');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suplidor`
--

CREATE TABLE `suplidor` (
  `codigo` varchar(20) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `telefono1` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `suplidor`
--

INSERT INTO `suplidor` (`codigo`, `nombre`, `direccion`, `telefono1`) VALUES
('CP-000001           ', 'MAX FERRETERIA                                              ', '                                                                                                                                                                                                                        ', ''),
('CP-000003           ', 'JJ ELECTRIC                                                 ', '', ''),
('CP-000004           ', 'JUAN ELECTRO IMPORT                                         ', '', ''),
('CP-000005           ', 'SUPLIELECTRIC                                        ', '', ''),
('CP-000006           ', 'PALACIO ELECTRICO                                  ', '', ''),
('CP-000007           ', 'RM CONSUEGRA                                  ', '                                                                                                                                                                                                                 ', '          '),
('CP-000008           ', 'RODFOR                                  ', '                                                                                                                                                                                                            ', '          '),
('CP-000009           ', 'NELANSA                                                     ', '                                                                                                                                                                                                      ', '          '),
('CP-000010           ', 'EQUIPOS ELECTRICOS                ', '                                                                                                                                                                                                                      ', ''),
('CP-000011           ', 'EUROSUPLIDORES                              ', '                                                                                                                                                                                                                    ', ''),
('CP-000012           ', 'COMERCIAL                                   ', '                                                                                                                                                                                                        ', ''),
('CP-000013           ', 'ELECTRO IMPORT                              ', '                                                                                                                                                                                                             ', ' '),
('CP-000015           ', 'IMPORTADORA                          ', '', ''),
('CP-000016           ', 'ELECTRIC                                      ', '', '    '),
('CP-000017           ', 'MARCHA                                           ', '                                                                                                                                                                                                                   ', ''),
('CP-000018           ', 'INDUSTRIA DE PLASTICO                 ', '                                                                                                                                                                                                                  ', '  '),
('CP-000019           ', ' CORPORATION                     ', '                                                                                                                                                                                                                                              ', '  ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `codigo` varchar(4) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `direccion` varchar(250) DEFAULT NULL,
  `telefono1` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`codigo`, `nombre`, `direccion`, `telefono1`) VALUES
('01  ', 'ARIEL', '                                                                                                                                                                                                                                                          ', ''),
('02  ', 'RAFAEL                                                 ', '                                                                                                                                                                                                                                                          ', ''),
('03  ', 'JUAN', '                                                                                                                                                                                                                                                          ', ''),
('04  ', 'PEDRO ', '                                                                                                                                                                                                                                                          ', '1                   '),
('05  ', 'ESTARLYN G.                                                 ', '                                                                                                                                                                                                                                                          ', '1                   '),
('06  ', 'EDDY G.                                                     ', '                                                                                                                                                                                                                                                          ', '1                   '),
('07  ', 'DANISA R.                                                   ', '                                                                                                                                                                                                                                                          ', '1                   '),
('08  ', 'MIGUEL H.                                                   ', '                                                                                                                                                                                                                                                          ', '1                   '),
('09  ', 'FRANNY C.                                                   ', '                                                                                                                                                                                                                                                          ', '1                   '),
('10  ', 'MERCEDES Z.                                                 ', '                                                                                                                                                                                                                                                          ', '1                   '),
('11  ', 'RANDY M. LIRIANO.                                           ', '                                                                                                                                                                                                                                                          ', '1                   '),
('12  ', 'IDANIS FELIZ                                                ', NULL, '1                   '),
('14  ', 'MICHAEL ZHU                                                 ', NULL, '1                   '),
('15  ', 'JEAN CARLOS                                                 ', '                                                                                                                                                                                                                                                          ', '1                   '),
('16  ', 'FRANKLIN B.                                                 ', '                                                                                                                                                                                                                                                          ', '1                   '),
('AB  ', 'ANGEL BIENVENIDO                                            ', '', ''),
('ADM ', 'ADMINISTRADOR                                               ', '                                                                                                                                                                                                                                                          ', ''),
('AL  ', 'ANGEL LEBRON                                                ', '                                                                                                                                                                                                                                                          ', '1                   '),
('AN  ', 'ALEXANDER N.                                                ', '                                                                                                                                                                                                                                                          ', '1                   '),
('EB  ', 'EZEQUIEL BRITO                                              ', '                                                                                                                                                                                                                                                          ', '1                   '),
('EF  ', 'EDGAR F.                                                    ', '                                                                                                                                                                                                                                                          ', '0                   '),
('FF  ', 'FRANK FIGUEROA                                              ', '                                                                                                                                                                                                                                                          ', '1                   '),
('ID  ', 'IDANIS F.                                                   ', '                                                                                                                                                                                                                                                          ', '1                   '),
('JC  ', 'JUAN CARLOS                                                 ', NULL, '1                   '),
('JN  ', 'JOSE NUÑEZ                                                  ', '                                                                                                                                                                                                                                                          ', '0                   '),
('KD  ', 'F. KEUSTELY                                                 ', '                                                                                                                                                                                                                                                          ', '0                   '),
('KELV', 'KELVIN                                                      ', '                                                                                                                                                                                                                                                          ', '.                   ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `socios`
--
ALTER TABLE `socios`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `suplidor`
--
ALTER TABLE `suplidor`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
