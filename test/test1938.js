if (typeof exports === 'object') {
	var assert = require('assert');
	var alasql = require('..');
}

describe('Test 1938 - UPDATE conditional', function() {

	before(function() {
		alasql('create database test1938');
		alasql('use test1938');
	});

	beforeEach(function() {
		alasql('DROP TABLE IF EXISTS T1');
		alasql('CREATE TABLE T1 (a INT)');
		alasql('INSERT INTO T1 VALUES (1),(2),(3),(4),(5)');
	});

	after(function() {
		alasql('drop database test1938');
	});

	const expected = [
		{a: 1},
		{a: 1},
		{a: 0},
		{a: 0},
		{a: 0},
	];

	it('should update table conditionally IF', function(done) {
		const res = alasql('UPDATE T1 SET `a` = IF(`a` < 3, 1, 0); SELECT * FROM T1');
		assert.deepEqual(res[1], expected);
		done();
	});

	it('should update table conditionally CASE WHEN', function(done) {
		const res = alasql('UPDATE T1 SET `a` = case when `a` < 3 then 1 else 0 end; SELECT * FROM T1');
		assert.deepEqual(res[1], expected);
		done();
	});
});
