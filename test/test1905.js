if (typeof exports === 'object') {
	var assert = require('assert');
	var alasql = require('..');
}

describe('Test 1905: Nested EXISTS in SQL Queries', function() {
	before(function() {
		alasql('create database test1905');
		alasql('use test1905');
		const tables = [
			{
				name: 'T1', table: {
					'columns': [{
						'text': 'No.',
					}, {
						'text': 'AAA',
					}, {
						'text': 'BBB',
					}, {
						'text': 'CCC',
					}, {
						'text': 'DDD',
					}, {
						'text': 'EEE',
					}, {
						'text': 'FFF',
					}, {
						'text': 'GGG',
					}, {
						'text': 'HHH',
					}, {
						'text': 'III',
					}, {
						'text': 'JJJ',
					}, {
						'text': 'KKK',
					}, {
						'text': 'LLL',
					}, {
						'text': 'MMM',
					}, {
						'text': 'NNN',
					}, {
						'text': 'OOO',
					}, {
						'text': 'PPP',
					}],
					'fieldTypes': ['number', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string'],
					'types': [0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
					'table': [{
						'No.': 1,
						'AAA': null,
						'BBB': null,
						'CCC': null,
						'DDD': null,
						'EEE': null,
						'FFF': null,
						'GGG': null,
						'HHH': null,
						'III': null,
						'JJJ': null,
						'KKK': null,
						'LLL': null,
						'MMM': null,
						'NNN': null,
						'OOO': null,
						'PPP': null,
					}, {
						'No.': 2,
						'AAA': null,
						'BBB': null,
						'CCC': null,
						'DDD': null,
						'EEE': null,
						'FFF': null,
						'GGG': null,
						'HHH': null,
						'III': null,
						'JJJ': null,
						'KKK': null,
						'LLL': null,
						'MMM': null,
						'NNN': null,
						'OOO': null,
						'PPP': null,
					}, {
						'No.': 3,
						'AAA': null,
						'BBB': null,
						'CCC': null,
						'DDD': null,
						'EEE': null,
						'FFF': null,
						'GGG': null,
						'HHH': null,
						'III': null,
						'JJJ': null,
						'KKK': null,
						'LLL': null,
						'MMM': null,
						'NNN': null,
						'OOO': null,
						'PPP': null,
					}, {
						'No.': 4,
						'AAA': null,
						'BBB': null,
						'CCC': null,
						'DDD': null,
						'EEE': null,
						'FFF': null,
						'GGG': null,
						'HHH': null,
						'III': null,
						'JJJ': null,
						'KKK': null,
						'LLL': null,
						'MMM': null,
						'NNN': null,
						'OOO': null,
						'PPP': null,
					}, {
						'No.': 5,
						'AAA': null,
						'BBB': null,
						'CCC': null,
						'DDD': null,
						'EEE': null,
						'FFF': null,
						'GGG': null,
						'HHH': null,
						'III': null,
						'JJJ': null,
						'KKK': null,
						'LLL': null,
						'MMM': null,
						'NNN': null,
						'OOO': null,
						'PPP': null,
					}],
				},
			},
			{
				name: 'T2', table: {
					'columns': [{'text': 'No(QQQ)'}, {
						'text': 'DRQQQ',
					}, {
						'text': 'RRR',
					}, {
						'text': 'DRSSS',
					}, {
						'text': 'DRTTT(MM/DD)',
					}, {
						'text': 'DRUUU(Hr)',
					}, {
						'text': 'DRVVV',
					}, {
						'text': 'DRWWW(MM/DD)',
					}, {
						'text': 'DRXXX(Hr)',
					}, {
						'text': 'DRYYY',
					}, {
						'text': 'DRZZZ(MM/DD)',
					}, {
						'text': 'DRAABB(Hr)',
					}, {
						'text': 'DRAACC',
					}, {
						'text': 'DRAADD(MM/DD)',
					}, {
						'text': 'DRAAEE(Hr)',
					}, {
						'text': 'DRAAFF',
					}, {
						'text': 'DRAAGG(MM/DD)',
					}, {
						'text': 'DRAAHH(Hr)',
					}],
					'fieldTypes': ['number', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string', 'string'],
					'types': [0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
					'table': [{
						'No(QQQ)': 1,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 2,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 3,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 4,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 5,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 6,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 7,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 8,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 9,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}, {
						'No(QQQ)': 10,
						'DRQQQ': null,
						'RRR': null,
						'DRSSS': null,
						'DRTTT(MM/DD)': null,
						'DRUUU(Hr)': null,
						'DRVVV': null,
						'DRWWW(MM/DD)': null,
						'DRXXX(Hr)': null,
						'DRYYY': null,
						'DRZZZ(MM/DD)': null,
						'DRAABB(Hr)': null,
						'DRAACC': null,
						'DRAADD(MM/DD)': null,
						'DRAAEE(Hr)': null,
						'DRAAFF': null,
						'DRAAGG(MM/DD)': null,
						'DRAAHH(Hr)': null,
					}],
				},
			},
			{
				name: 'T3', table: {
					'columns': [{
						'text': 'AAII',
					}, {
						'text': 'AAJJ',
					}, {
						'text': 'AAKK',
					}, {
						'text': 'AALL',
					}, {
						'text': 'AAMM',
					}, {
						'text': 'AANN',
					}, {
						'text': 'AAOO',
					}],
					'fieldTypes': ['string', 'string', 'string', 'string', 'number', 'string', 'string'],
					'types': [null, null, null, null, 0, null, null],
					'table': [{
						'AAII': 'AAPP',
						'AAJJ': 'AAQQ',
						'AAKK': 'AARR',
						'AALL': '1.AAQQ',
						'AAMM': 1,
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AAQQ',
						'AAKK': 'AARR',
						'AALL': '1.AAQQ',
						'AAMM': '1.AAQQ',
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AATT',
						'AAKK': 'AAUU',
						'AALL': '2.AATT',
						'AAMM': 2,
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AATT',
						'AAKK': 'AAUU',
						'AALL': '2.AATT',
						'AAMM': '2.AATT',
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AAVV',
						'AAKK': 'AAWW',
						'AALL': '3.AAVV',
						'AAMM': 3,
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AAVV',
						'AAKK': 'AAWW',
						'AALL': '3.AAVV',
						'AAMM': '3.AAVV',
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AAYY',
						'AAKK': 'AAXX',
						'AALL': '4.AAYY',
						'AAMM': 4,
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AAYY',
						'AAKK': 'AAXX',
						'AALL': '4.AAYY',
						'AAMM': '4.AAYY',
						'AANN': 'AASS',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AAZZ',
						'AAKK': 'BBAA',
						'AALL': '5.AAZZ',
						'AAMM': 5,
						'AANN': 'BBBB',
						'AAOO': null,
					}, {
						'AAII': 'AAPP',
						'AAJJ': 'AAZZ',
						'AAKK': 'BBAA',
						'AALL': '5.AAZZ',
						'AAMM': '5.AAZZ',
						'AANN': 'BBBB',
						'AAOO': null,
					}],
				},
			},
			{
				name: 'T4', table: {
					'columns': [{
						'text': 'AAII',
					}, {
						'text': 'AAJJ',
					}, {
						'text': 'AAKK',
					}, {
						'text': 'AALL',
					}, {
						'text': 'AAMM',
					}, {
						'text': 'BBCC',
					}, {
						'text': 'BBDD',
					}, {
						'text': 'TBDBBEE',
					}, {
						'text': 'AAOO',
					}],
					'fieldTypes': ['string', 'string', 'string', 'string', 'number', 'number', 'number', 'number', 'string'],
					'types': [null, null, null, null, 0, 0, 0, 0, null],
					'table': [{
						'AAII': 'BBFF',
						'AAJJ': 'BBGG',
						'AAKK': 'BBHH',
						'AALL': '1.BBGG',
						'AAMM': 1,
						'BBCC': null,
						'BBDD': 1,
						'TBDBBEE': null,
						'AAOO': null,
					}, {
						'AAII': 'BBFF',
						'AAJJ': 'BBGG',
						'AAKK': 'BBHH',
						'AALL': '1.BBGG',
						'AAMM': '1.BBGG',
						'BBCC': null,
						'BBDD': 1,
						'TBDBBEE': null,
						'AAOO': null,
					}, {
						'AAII': 'BBFF',
						'AAJJ': 'BBII',
						'AAKK': 'BBJJ',
						'AALL': '2.BBII',
						'AAMM': 2,
						'BBCC': 1,
						'BBDD': 1,
						'TBDBBEE': null,
						'AAOO': null,
					}, {
						'AAII': 'BBFF',
						'AAJJ': 'BBII',
						'AAKK': 'BBJJ',
						'AALL': '2.BBII',
						'AAMM': '2.BBII',
						'BBCC': 1,
						'BBDD': 1,
						'TBDBBEE': null,
						'AAOO': null,
					}, {
						'AAII': 'BBFF',
						'AAJJ': 'BBKK',
						'AAKK': 'BBLL',
						'AALL': '3.BBKK',
						'AAMM': 3,
						'BBCC': 1,
						'BBDD': 1,
						'TBDBBEE': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBFF',
						'AAJJ': 'BBKK',
						'AAKK': 'BBLL',
						'AALL': '3.BBKK',
						'AAMM': '3.BBKK',
						'BBCC': 1,
						'BBDD': 1,
						'TBDBBEE': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBFF',
						'AAJJ': 'BBMM',
						'AAKK': 'BBNN',
						'AALL': '4.BBMM',
						'AAMM': 4,
						'BBCC': null,
						'BBDD': null,
						'TBDBBEE': null,
						'AAOO': null,
					}, {
						'AAII': 'BBFF',
						'AAJJ': 'BBMM',
						'AAKK': 'BBNN',
						'AALL': '4.BBMM',
						'AAMM': '4.BBMM',
						'BBCC': null,
						'BBDD': null,
						'TBDBBEE': null,
						'AAOO': null,
					}],
				},
			},
			{
				name: 'T5', table: {
					'columns': [{
						'text': 'AAII',
					}, {
						'text': 'AAJJ',
					}, {
						'text': 'AAKK',
					}, {
						'text': 'AALL',
					}, {
						'text': 'AAMM',
					}, {
						'text': 'BBDD',
					}, {
						'text': 'AAOO',
					}],
					'fieldTypes': ['string', 'string', 'string', 'string', 'number', 'number', 'string'],
					'types': [null, null, null, null, 0, 0, null],
					'table': [{
						'AAII': 'BBOO',
						'AAJJ': 'BBPP',
						'AAKK': 'BBQQ',
						'AALL': '1.BBPP',
						'AAMM': 1,
						'BBDD': null,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBPP',
						'AAKK': 'BBQQ',
						'AALL': '1.BBPP',
						'AAMM': '1.BBPP',
						'BBDD': null,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBRR',
						'AAKK': 'BBSS',
						'AALL': '2.BBRR',
						'AAMM': 2,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBRR',
						'AAKK': 'BBSS',
						'AALL': '2.BBRR',
						'AAMM': '2.BBRR',
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBTT',
						'AAKK': 'BBUU',
						'AALL': '3.BBTT',
						'AAMM': 3,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBTT',
						'AAKK': 'BBUU',
						'AALL': '3.BBTT',
						'AAMM': '3.BBTT',
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBVV',
						'AAKK': 'BBWW',
						'AALL': '4.BBVV',
						'AAMM': 4,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBVV',
						'AAKK': 'BBWW',
						'AALL': '4.BBVV',
						'AAMM': '4.BBVV',
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBXX',
						'AAKK': 'BBYY',
						'AALL': '5.BBXX',
						'AAMM': 5,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBXX',
						'AAKK': 'BBYY',
						'AALL': '5.BBXX',
						'AAMM': '5.BBXX',
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBZZ',
						'AAKK': 'CCAA',
						'AALL': '6.BBZZ',
						'AAMM': 6,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBZZ',
						'AAKK': 'CCAA',
						'AALL': '6.BBZZ',
						'AAMM': '6.BBZZ',
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCBB',
						'AAKK': 'CCCC',
						'AALL': '7.CCBB',
						'AAMM': 7,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCBB',
						'AAKK': 'CCCC',
						'AALL': '7.CCBB',
						'AAMM': '7.CCBB',
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCDD',
						'AAKK': 'CCEE',
						'AALL': '8.CCDD',
						'AAMM': 8,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCDD',
						'AAKK': 'CCEE',
						'AALL': '8.CCDD',
						'AAMM': '8.CCDD',
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCFF',
						'AAKK': 'CCGG',
						'AALL': '9.CCFF',
						'AAMM': 9,
						'BBDD': 1,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCFF',
						'AAKK': 'CCGG',
						'AALL': '9.CCFF',
						'AAMM': '9.CCFF',
						'BBDD': 1,
						'AAOO': null,
					}],
				},
			},
			{
				name: 'T6', table: {
					'columns': [{
						'text': 'AAII',
					}, {
						'text': 'AAJJ',
					}, {
						'text': 'AALL',
					}, {
						'text': 'CCHH',
					}, {
						'text': 'CCII',
					}, {
						'text': 'AAOO',
					}],
					'fieldTypes': ['string', 'string', 'string', 'string', 'string', 'string'],
					'types': [null, null, null, null, null, null],
					'table': [{
						'AAII': 'BBOO',
						'AAJJ': 'BBPP',
						'AALL': '1.BBPP',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBRR',
						'AALL': '2.BBRR',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBTT',
						'AALL': '3.BBTT',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBVV',
						'AALL': '4.BBVV',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBXX',
						'AALL': '5.BBXX',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBZZ',
						'AALL': '6.BBZZ',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCBB',
						'AALL': '7.CCBB',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCDD',
						'AALL': '8.CCDD',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCFF',
						'AALL': '9.CCFF',
						'CCHH': '5.AAZZ',
						'CCII': '1.BBGG',
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'BBRR',
						'AALL': '2.BBRR',
						'CCHH': '2.AATT',
						'CCII': null,
						'AAOO': null,
					}, {
						'AAII': 'BBOO',
						'AAJJ': 'CCFF',
						'AALL': '9.CCFF',
						'CCHH': '1.AAQQ',
						'CCII': null,
						'AAOO': null,
					}],
				},
			},
		];

		tables.forEach(function({name, table}) {
			const fields = [];
			table.columns.forEach(function(column, i) {
				let fieldName = `\`${column.text}\` `;
				fields.push(fieldName + table.fieldTypes[i]);
			});

			const sql = 'CREATE TABLE ' + name + ' (' + fields.join(', ') + ')';
			alasql(sql);
			alasql.tables[name].data = table.table;
		});
	});

	after(function() {
		alasql('drop database test1905');
	});

	it('Nested EXISTS in CASE WHEN', function(done) {
		const sql = 'SET @totalCount = (\n' +
			'  SELECT COUNT(T1.`AAA`)\n' +
			'  FROM T1\n' +
			'  WHERE T1.`AAA` NOT NULL\n' +
			');\n' +
			'\n' +
			'SET @MinimamCount = (\n' +
			'  SELECT CASE WHEN (@totalCount = 0) THEN 10 ELSE 0 END\n' +
			');\n' +
			'\n' +
			'SET @errorString = "ERROR";\n' +
			'SET @dmyString = "";\n' +
			'\n' +
			'SELECT\n' +
			'  T1.`No.`,\n' +
			'  CASE\n' +
			'    WHEN T1.`AAA` IN (1,2,3,4,5)\n' +
			'      THEN true\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`AAA` IS NOT NULL\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          CASE\n' +
			'            WHEN T1.`EEE` IS NULL\n' +
			'              THEN true\n' +
			'            ELSE\n' +
			'              true\n' +
			'          END\n' +
			'      END\n' +
			'  END AS `AAA`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN T1.`FFF` IS NOT NULL\n' +
			'      THEN CASE\n' +
			'        WHEN EXISTS(\n' +
			'          SELECT T2.`RRR`\n' +
			'          FROM T2\n' +
			'          WHERE T1.`FFF` = T2.`DRQQQ`\n' +
			'          LIMIT 1\n' +
			'        )\n' +
			'          THEN (\n' +
			'            SELECT T2.`RRR`\n' +
			'            FROM T2\n' +
			'            WHERE T1.`FFF` = T2.`DRQQQ`\n' +
			'            LIMIT 1\n' +
			'          )\n' +
			'        ELSE true\n' +
			'      END\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`AAA` IS NOT NULL\n' +
			'          THEN true\n' +
			'      END\n' +
			'  END AS `BBB`,\n' +
			'\n' +
			'  T1.`CCC`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN EXISTS(\n' +
			'      SELECT T3.`AALL`\n' +
			'      FROM T3\n' +
			'      WHERE T1.`DDD` = T3.`AAMM`\n' +
			'    )\n' +
			'      THEN FORMATWIKI("{cell:}" + (\n' +
			'        SELECT T3.`AALL`\n' +
			'        FROM T3\n' +
			'        WHERE T1.`DDD` = T3.`AAMM`\n' +
			'      ) + "{cell}")\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`DDD` IS NOT NULL\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          CASE\n' +
			'            WHEN T1.`EEE` IS NULL\n' +
			'              THEN true\n' +
			'            ELSE\n' +
			'              true\n' +
			'          END\n' +
			'      END\n' +
			'  END AS `DDD`,\n' +
			'\n' +
			'  T1.`EEE`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN T1.`FFF` IS NOT NULL\n' +
			'      THEN CASE\n' +
			'        WHEN EXISTS(\n' +
			'          SELECT T2.`DRQQQ`\n' +
			'          FROM T2\n' +
			'          WHERE T1.`FFF` = T2.`DRQQQ`\n' +
			'          LIMIT 1\n' +
			'        )\n' +
			'          THEN true\n' +
			'        ELSE true\n' +
			'      END\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`EEE` IS NULL\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          true\n' +
			'      END\n' +
			'  END AS `FFF`,\n' +
			'\n' +
			'  T1.`GGG`,\n' +
			'  T1.`HHH`,\n' +
			'  T1.`III`,\n' +
			'  T1.`JJJ`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN T1.`KKK` IS NOT NULL\n' +
			'      THEN true\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`GGG` IS NULL\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          true\n' +
			'      END\n' +
			'  END AS `KKK`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN T1.`LLL` IS NOT NULL\n' +
			'      THEN T1.`LLL`\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`GGG` IS NULL\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          true\n' +
			'      END\n' +
			'  END AS `LLL`,\n' +
			'\n' +
			'  /* 分析情報 */\n' +
			'  CASE\n' +
			'    WHEN EXISTS(\n' +
			'      SELECT T4.`AALL`\n' +
			'      FROM T4\n' +
			'      WHERE T1.`MMM` = T4.`AAMM`\n' +
			'    )\n' +
			'      THEN FORMATWIKI("{cell:}" + (\n' +
			'        SELECT T4.`AALL`\n' +
			'        FROM T4\n' +
			'        WHERE T1.`MMM` = T4.`AAMM`\n' +
			'      ) + "{cell}")\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`MMM` IS NOT NULL\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          CASE\n' +
			'            WHEN T1.`DDD` IS NULL\n' +
			'              OR EXISTS(\n' +
			'                SELECT *\n' +
			'                FROM T3\n' +
			'                WHERE T1.`DDD` = T3.`AAMM`\n' +
			'                  AND T3.`AALL` = "5.AAZZ"\n' +
			'              )\n' +
			'              THEN true\n' +
			'            ELSE\n' +
			'              true\n' +
			'          END\n' +
			'      END\n' +
			'  END AS `MMM`,\n' +
			'\n' +
			'  /* NNN */\n' +
			'  CASE\n' +
			'    WHEN T1.`NNN` IS NOT NULL\n' +
			'      THEN CASE\n' +
			'        WHEN EXISTS(\n' +
			'          SELECT T5.`AALL`\n' +
			'          FROM T5\n' +
			'          WHERE T1.`NNN` = T5.`AAMM`\n' +
			'        )\n' +
			'          THEN CASE\n' +
			'            WHEN\n' +
			'              NOT EXISTS(\n' +
			'                SELECT T4.`AALL`\n' +
			'                FROM T4\n' +
			'                WHERE T1.`MMM` = T4.`AAMM`\n' +
			'                  AND T4.`AALL` = "1.BBGG"\n' +
			'              )\n' +
			'              AND NOT EXISTS(\n' +
			'                SELECT T3.`AALL`\n' +
			'                FROM T3\n' +
			'                WHERE T1.`DDD` = T3.`AAMM`\n' +
			'                  AND T3.`AALL` = "5.AAZZ"\n' +
			'              )\n' +
			'              AND NOT (\n' +
			'                EXISTS(\n' +
			'                  SELECT T5.`AALL`\n' +
			'                  FROM T5\n' +
			'                  WHERE T1.`NNN` = T5.`AAMM`\n' +
			'                    AND T5.`AALL` = "2.BBRR"\n' +
			'                )\n' +
			'                AND EXISTS(\n' +
			'                  SELECT T3.`AALL`\n' +
			'                  FROM T3\n' +
			'                  WHERE T1.`DDD` = T3.`AAMM`\n' +
			'                    AND T3.`AALL` = "2.AATT"\n' +
			'                )\n' +
			'              )\n' +
			'              AND NOT (\n' +
			'                EXISTS(\n' +
			'                  SELECT T5.`AALL`\n' +
			'                  FROM T5\n' +
			'                  WHERE T1.`NNN` = T5.`AAMM`\n' +
			'                    AND T5.`AALL` = "9.CCFF"\n' +
			'                )\n' +
			'                AND EXISTS(\n' +
			'                  SELECT T3.`AALL`\n' +
			'                  FROM T3\n' +
			'                  WHERE T1.`DDD` = T3.`AAMM`\n' +
			'                    AND T3.`AALL` = "1.AAQQ"\n' +
			'                )\n' +
			'              )\n' +
			'              THEN FORMATWIKI("{cell:}" + (\n' +
			'                SELECT T5.`AALL`\n' +
			'                FROM T5\n' +
			'                WHERE T1.`NNN` = T5.`AAMM`\n' +
			'              ) + "{cell}")\n' +
			'            ELSE\n' +
			'              FORMATWIKI("{cell:bgColor=violet}" + (\n' +
			'                SELECT T5.`AALL`\n' +
			'                FROM T5\n' +
			'                WHERE T1.`NNN` = T5.`AAMM`\n' +
			'              ) + "{cell}")\n' +
			'          END\n' +
			'        ELSE\n' +
			'          true\n' +
			'      END\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`MMM` IS NULL\n' +
			'          OR EXISTS(\n' +
			'            SELECT *\n' +
			'            FROM T4\n' +
			'            WHERE T1.`MMM` = T4.`AAMM`\n' +
			'              AND NOT (T4.`BBCC` = 1)\n' +
			'          )\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          true\n' +
			'      END\n' +
			'  END AS `NNN`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN EXISTS(\n' +
			'      SELECT T6.`AALL`\n' +
			'      FROM T6\n' +
			'      WHERE T1.`OOO` = T6.`AAMM`\n' +
			'    )\n' +
			'      THEN FORMATWIKI("{cell:}" + (\n' +
			'        SELECT T6.`AALL`\n' +
			'        FROM T6\n' +
			'        WHERE T1.`OOO` = T6.`AAMM`\n' +
			'      ) + "{cell}")\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`OOO` IS NOT NULL\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          CASE\n' +
			'            WHEN T1.`MMM` IS NULL\n' +
			'              OR EXISTS(\n' +
			'                SELECT *\n' +
			'                FROM T4\n' +
			'                WHERE T1.`MMM` = T4.`AAMM`\n' +
			'                  AND NOT (T4.`BBCC` = 1)\n' +
			'              )\n' +
			'              THEN true\n' +
			'            ELSE\n' +
			'              true\n' +
			'          END\n' +
			'      END\n' +
			'  END AS `OOO`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN T1.`PPP` IS NOT NULL\n' +
			'      THEN true\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`MMM` IS NULL\n' +
			'          OR EXISTS(\n' +
			'            SELECT *\n' +
			'            FROM T4\n' +
			'            WHERE T1.`MMM` = T4.`AAMM`\n' +
			'              AND NOT (T4.`TBDBBEE` = 1)\n' +
			'          )\n' +
			'          THEN true\n' +
			'        ELSE\n' +
			'          true\n' +
			'      END\n' +
			'  END AS `PPP`,\n' +
			'\n' +
			'  /* 中間集計情報 */\n' +
			'  CASE\n' +
			'    WHEN EXISTS(\n' +
			'      SELECT *\n' +
			'      FROM T4\n' +
			'      WHERE T1.`MMM` = T4.`AAMM`\n' +
			'        AND T4.`BBCC` = 1\n' +
			'    )\n' +
			'      THEN 1\n' +
			'    ELSE NULL\n' +
			'  END AS `CCLL`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN EXISTS(\n' +
			'      SELECT *\n' +
			'      FROM T4\n' +
			'      WHERE T1.`MMM` = T4.`AAMM`\n' +
			'        AND T4.`BBDD` = 1\n' +
			'    )\n' +
			'      OR EXISTS(\n' +
			'        SELECT *\n' +
			'        FROM T4\n' +
			'        WHERE T1.`NNN` = T4.`AAMM`\n' +
			'          AND T4.`BBDD` = 1\n' +
			'      )\n' +
			'      THEN 1\n' +
			'    ELSE NULL\n' +
			'  END AS `CCKK`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN T1.`LLL` IS NOT NULL\n' +
			'      AND EXISTS(\n' +
			'        SELECT *\n' +
			'        FROM T4\n' +
			'        WHERE T1.`MMM` = T4.`AAMM`\n' +
			'          AND T4.`BBCC` = 1\n' +
			'      )\n' +
			'      THEN 1\n' +
			'    ELSE NULL\n' +
			'  END AS `CCJJ`,\n' +
			'\n' +
			'  CASE\n' +
			'    WHEN EXISTS(\n' +
			'      SELECT *\n' +
			'      FROM T3\n' +
			'      WHERE T1.`DDD` = T3.`AAMM`\n' +
			'        AND (NOT (T3.`AANN` = "AASS") OR T1.`LLL` NOT NULL)\n' +
			'    )\n' +
			'      OR EXISTS(\n' +
			'        SELECT *\n' +
			'        FROM T4\n' +
			'        WHERE T1.`MMM` = T4.`AAMM`\n' +
			'          AND T4.`AALL` = "4.BBMM"\n' +
			'      )\n' +
			'      THEN true\n' +
			'    ELSE\n' +
			'      CASE\n' +
			'        WHEN T1.`AAA` IN (1,2,3,4,5)\n' +
			'          THEN true\n' +
			'      END\n' +
			'  END AS `CCMM`\n' +
			'\n' +
			'FROM T1\n' +
			'WHERE T1.`AAA` NOT NULL\n' +
			'  OR T1.`No.` <= @MinimamCount\n' +
			';';

		const expected = [
			1,
			1,
			1,
			1,
			[
				{
					'No.': 1,
					'PPP': true,
					'GGG': null,
					'JJJ': null,
					'III': null,
					'HHH': null,
					'LLL': true,
					'KKK': true,
					'CCJJ': undefined,
					'MMM': true,
					'NNN': true,
					'OOO': true,
					'AAA': true,
					'EEE': null,
					'BBB': undefined,
					'CCC': null,
					'FFF': true,
					'DDD': true,
					'CCKK': undefined,
					'CCLL': undefined,
					'CCMM': undefined,
				},
				{
					'No.': 2,
					'PPP': true,
					'GGG': null,
					'JJJ': null,
					'III': null,
					'HHH': null,
					'LLL': true,
					'KKK': true,
					'CCJJ': undefined,
					'MMM': true,
					'NNN': true,
					'OOO': true,
					'AAA': true,
					'EEE': null,
					'BBB': undefined,
					'CCC': null,
					'FFF': true,
					'DDD': true,
					'CCKK': undefined,
					'CCLL': undefined,
					'CCMM': undefined,
				},
				{
					'No.': 3,
					'PPP': true,
					'GGG': null,
					'JJJ': null,
					'III': null,
					'HHH': null,
					'LLL': true,
					'KKK': true,
					'CCJJ': undefined,
					'MMM': true,
					'NNN': true,
					'OOO': true,
					'AAA': true,
					'EEE': null,
					'BBB': undefined,
					'CCC': null,
					'FFF': true,
					'DDD': true,
					'CCKK': undefined,
					'CCLL': undefined,
					'CCMM': undefined,
				},
				{
					'No.': 4,
					'PPP': true,
					'GGG': null,
					'JJJ': null,
					'III': null,
					'HHH': null,
					'LLL': true,
					'KKK': true,
					'CCJJ': undefined,
					'MMM': true,
					'NNN': true,
					'OOO': true,
					'AAA': true,
					'EEE': null,
					'BBB': undefined,
					'CCC': null,
					'FFF': true,
					'DDD': true,
					'CCKK': undefined,
					'CCLL': undefined,
					'CCMM': undefined,
				},
				{
					'No.': 5,
					'PPP': true,
					'GGG': null,
					'JJJ': null,
					'III': null,
					'HHH': null,
					'LLL': true,
					'KKK': true,
					'CCJJ': undefined,
					'MMM': true,
					'NNN': true,
					'OOO': true,
					'AAA': true,
					'EEE': null,
					'BBB': undefined,
					'CCC': null,
					'FFF': true,
					'DDD': true,
					'CCKK': undefined,
					'CCLL': undefined,
					'CCMM': undefined,
				},
			],
		];

		const res = alasql(sql);
		assert.deepEqual(expected, res);
		done();
	});
});
