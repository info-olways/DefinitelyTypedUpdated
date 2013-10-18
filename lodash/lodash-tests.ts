/// <reference path="lodash.d.ts" />

declare var $;

interface IFoodOrganic {
	name: string;
	organic: boolean;
}

interface IFoodType {
	name: string;
	type: string;
}

interface IFoodCombined {
	name: string;
	organic: boolean;
	type: string;
}

interface IStoogesQuote {
	name: string;
	quotes: string[];
}

interface IStoogesAge {
	name: string;
	age: number;
}

var foodsOrganic: IFoodOrganic[] = [
	{ name: 'banana', organic: true },
	{ name: 'beet',   organic: false },
];
var foodsType: IFoodType[] = [
	{ name: 'apple',  type: 'fruit' },
	{ name: 'banana', type: 'fruit' },
	{ name: 'beet',   type: 'vegetable' }
];
var foodsCombined: IFoodCombined[] = [
  { 'name': 'apple',  'organic': false, 'type': 'fruit' },
  { 'name': 'carrot', 'organic': true,  'type': 'vegetable' }
];

var stoogesQuotes: IStoogesQuote[] = [
	{ 'name': 'curly', 'quotes': ['Oh, a wise guy, eh?', 'Poifect!'] },
	{ 'name': 'moe', 'quotes': ['Spread out!', 'You knucklehead!'] }
];
var stoogesAges: IStoogesAge[] = [
	{ 'name': 'moe', 'age': 40 },
	{ 'name': 'larry', 'age': 50 }
];

var result;

//Array Method Tests
result = <any[]>_.compact([0, 1, false, 2, '', 3]);
result = <number[]>_.difference([1, 2, 3, 4, 5], [5, 2, 10]);

result = <number[]>_.rest([1, 2, 3]);
result = <number[]>_.rest([1, 2, 3], 2);
result = <number[]>_.rest([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.rest(foodsOrganic, 'test');
result = <IFoodType[]>_.rest(foodsType, { 'test': 'value' });

	_.drop([1, 2, 3]);
	_.drop([1, 2, 3], 2);
	_.drop([1, 2, 3], function(num) {
	  return num < 3;
	});
	_.drop(foodsOrganic, 'test');
	_.drop(foodsType, { 'test': 'value' });

	_.tail([1, 2, 3]);
	_.tail([1, 2, 3], 2);
	_.tail([1, 2, 3], function(num) {
	  return num < 3;
	});
	_.tail(foodsOrganic, 'test');
	_.tail(foodsType, { 'test': 'value' });

result = <number>_.findIndex(['apple', 'banana', 'beet'], function(f) {
  return /^b/.test(f);
});
result = <number>_.findIndex(['apple', 'banana', 'beet'], 'apple');
result = <number>_.findIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple'});

result = <number>_.findLastIndex(['apple', 'banana', 'beet'], function(f) {
  return /^b/.test(f);
});
result = <number>_.findLastIndex(['apple', 'banana', 'beet'], 'apple');
result = <number>_.findLastIndex([{ food: 'apple' }, { food: 'banana' }, { food: 'beet' }], { food: 'apple'});


result = <number>_.first([1, 2, 3]);
result = <number[]>_.first([1, 2, 3], 2);
result = <number[]>_.first([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.first(foodsOrganic, 'organic');
result = <IFoodType[]>_.first(foodsType, { 'type': 'fruit' });

result = <number>_.head([1, 2, 3]);
result = <number[]>_.head([1, 2, 3], 2);
result = <number[]>_.head([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.head(foodsOrganic, 'organic');
result = <IFoodType[]>_.head(foodsType, { 'type': 'fruit' });

result = <number>_.take([1, 2, 3]);
result = <number[]>_.take([1, 2, 3], 2);
result = <number[]>_.take([1, 2, 3], function(num) {
  return num < 3;
});
result = <IFoodOrganic[]>_.take(foodsOrganic, 'organic');
result = <IFoodType[]>_.take(foodsType, { 'type': 'fruit' });

result = <number[]>_.flatten([1, [2], [3, [[4]]]]);
result = <any[]>_.flatten([1, [2], [3, [[4]]]], true);
result = <string[]>_.flatten(stoogesQuotes, 'quotes');

result = <number>_.indexOf([1, 2, 3, 1, 2, 3], 2);
result = <number>_.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
result = <number>_.indexOf([1, 1, 2, 2, 3, 3], 2, true);

result = <number[]>_.initial([1, 2, 3]);
result = <number[]>_.initial([1, 2, 3], 2);
result = <number[]>_.initial([1, 2, 3], function(num) {
  return num > 1;
});
result = <IFoodOrganic[]>_.initial(foodsOrganic, 'organic');
result = <IFoodType[]>_.initial(foodsType, { 'type': 'vegetable' });

result = <number[]>_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = <number>_.last([1, 2, 3]);
result = <number[]>_.last([1, 2, 3], 2);
result = <number[]>_.last([1, 2, 3], function(num) {
  return num > 1;
});
result = <IFoodOrganic[]>_.last(foodsOrganic, 'organic');
result = <IFoodType[]>_.last(foodsType, { 'type': 'vegetable' });

result = <number>_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
result = <number>_.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);

result = <{[key: string]: any}>_.zipObject(['moe', 'larry'], [30, 40]);
	result = <{[key: string]: any}>_.object(['moe', 'larry'], [30, 40]);

result = <any[]>_.pull([1, 2, 3, 1, 2, 3], 2, 3);

result = <number[]>_.range(10);
result = <number[]>_.range(1, 11);
result = <number[]>_.range(0, 30, 5);
result = <number[]>_.range(0, -10, -1);
result = <number[]>_.range(1, 4, 0);
result = <number[]>_.range(0);

result = <number[]>_.remove([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
result = <IFoodOrganic[]>_.remove(foodsOrganic, 'organic');
result = <IFoodType[]>_.remove(foodsType, { 'type': 'vegetable'});

result = <number>_.sortedIndex([20, 30, 50], 40);
result = <number>_.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
var sortedIndexDict = {
  'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
};
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
  return sortedIndexDict.wordToNumber[word];
});
result = <number>_.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
  return this.wordToNumber[word];
}, sortedIndexDict);

result = <number[]>_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);

result = <number[]>_.uniq([1, 2, 1, 3, 1]);
result = <number[]>_.uniq([1, 1, 2, 2, 3], true);
result = <string[]>_.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { 
	return letter.toLowerCase(); 
});
result = <number[]>_.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
result = <{x: number;}[]>_.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

	result = <number[]>_.unique([1, 2, 1, 3, 1]);
	result = <number[]>_.unique([1, 1, 2, 2, 3], true);
	result = <string[]>_.unique(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { 
		return letter.toLowerCase(); 
	});
	result = <number[]>_.unique([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
	result = <{x: number;}[]>_.unique([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');

result = <any[][]>_.unzip(['moe', 'larry'], [30, 40], [true, false]);
	result = <any[][]>_.zip(['moe', 'larry'], [30, 40], [true, false]);

result = <number[]>_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);

/* *************
 * Collections *
 ************* */

result = <string[]>_.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
result = <string[]>_.at(['moe', 'larry', 'curly'], 0, 2);

result = <boolean>_.contains([1, 2, 3], 1);
result = <boolean>_.contains([1, 2, 3], 1, 2);
result = <boolean>_.contains({ 'name': 'moe', 'age': 40 }, 'moe');
result = <boolean>_.contains('curly', 'ur');

	result = <boolean>_.include([1, 2, 3], 1);
	result = <boolean>_.include([1, 2, 3], 1, 2);
	result = <boolean>_.include({ 'name': 'moe', 'age': 40 }, 'moe');
	result = <boolean>_.include('curly', 'ur');

result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
result = <_.Dictionary<number>>_.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
result = <_.Dictionary<number>>_.countBy(['one', 'two', 'three'], 'length');

result = <boolean>_.every([true, 1, null, 'yes'], Boolean);
result = <boolean>_.every(stoogesAges, 'age');
result = <boolean>_.every(stoogesAges, { 'age': 50 });

	result = <boolean>_.all([true, 1, null, 'yes'], Boolean);
	result = <boolean>_.all(stoogesAges, 'age');
	result = <boolean>_.all(stoogesAges, { 'age': 50 });

result = <number[]>_.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
result = <IFoodCombined[]>_.filter(foodsCombined, 'organic');
result = <IFoodCombined[]>_.filter(foodsCombined, { 'type': 'fruit' });

	result = <number[]>_.select([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
	result = <IFoodCombined[]>_.select(foodsCombined, 'organic');
	result = <IFoodCombined[]>_.select(foodsCombined, { 'type': 'fruit' });

result = <number>_.find([1, 2, 3, 4], function(num) {
  return num % 2 == 0;
});
result = <IFoodCombined>_.find(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.find(foodsCombined, 'organic');

	result = <number>_.detect([1, 2, 3, 4], function(num) {
	  return num % 2 == 0;
	});
	result = <IFoodCombined>_.detect(foodsCombined, { 'type': 'vegetable' });
	result = <IFoodCombined>_.detect(foodsCombined, 'organic');

	result = <number>_.findWhere([1, 2, 3, 4], function(num) {
	  return num % 2 == 0;
	});
	result = <IFoodCombined>_.findWhere(foodsCombined, { 'type': 'vegetable' });
	result = <IFoodCombined>_.findWhere(foodsCombined, 'organic');

result = <number>_.findLast([1, 2, 3, 4], function(num) {
  return num % 2 == 0;
});
result = <IFoodCombined>_.findLast(foodsCombined, { 'type': 'vegetable' });
result = <IFoodCombined>_.findLast(foodsCombined, 'organic');

result = <number[]>_.forEach([1, 2, 3], function(num) { console.log(num); });
result = <_.Dictionary<number>>_.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

	result = <number[]>_.each([1, 2, 3], function(num) { console.log(num); });
	result = <_.Dictionary<number>>_.each({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

result = <number[]>_.forEachRight([1, 2, 3], function(num) { console.log(num); });
result = <_.Dictionary<number>>_.forEachRight({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

	result = <number[]>_.eachRight([1, 2, 3], function(num) { console.log(num); });
	result = <_.Dictionary<number>>_.eachRight({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });

result = <any[]>_.map([1, 2, 3], function(num) { return num * 3; });
result = <any[]>_.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
result = <any[]>_.map(stoogesAges, 'name');

	result = <any[]>_.collect([1, 2, 3], function(num) { return num * 3; });
	result = <any[]>_.collect({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
	result = <any[]>_.collect(stoogesAges, 'name');

result = <any>_.reduce([1, 2, 3], function(sum, num) {
  return sum + num;
});
result = <any>_.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
  result[key] = num * 3;
  return result;
}, {});

	result = <any>_.foldl([1, 2, 3], function(sum, num) {
	  return sum + num;
	});
	result = <any>_.foldl({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
	  result[key] = num * 3;
	  return result;
	}, {});

	result = <any>_.inject([1, 2, 3], function(sum, num) {
	  return sum + num;
	});
	result = <any>_.inject({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
	  result[key] = num * 3;
	  return result;
	}, {});

result = <any>_.reduceRight([[0, 1], [2, 3], [4, 5]], function(a, b) { return a.concat(b); }, []);

	result = <any>_.foldr([[0, 1], [2, 3], [4, 5]], function(a, b) { return a.concat(b); }, []);

result = <boolean>_.some([null, 0, 'yes', false], Boolean);
result = <boolean>_.some(foodsCombined, 'organic');
result = <boolean>_.some(foodsCombined, { 'type': 'meat' });
	
	result = <boolean>_.any([null, 0, 'yes', false], Boolean);
	result = <boolean>_.any(foodsCombined, 'organic');
	result = <boolean>_.any(foodsCombined, { 'type': 'meat' });
	
	




////////////////////////////////////////////////////////////////////////////////////////
//WHAT'S LEFT
////////////////////////////////////////////////////////////////////////////////////////

var sum = _.reduce([1, 2, 3], (memo, num) => memo + num, 0);
sum = _.reduce([1, 2, 3], (memo, num) => memo + num); // memo is optional #issue 5 github

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, (a, b) => a.concat(b), []);

var even = _.find([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

var listOfPlays = [{ title: "Cymbeline", author: "Shakespeare", year: 1611 }, { title: "The Tempest", author: "Shakespeare", year: 1611 }, { title: "Other", author: "Not Shakespeare", year: 2012 }];
_.where(listOfPlays, { author: "Shakespeare", year: 1611 });

var odds = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
_.pluck(stooges, 'name');

_.max(stooges, (stooge) => stooge.age);

_.max([1, 2, 3, 4, 5]);

var numbers = [10, 5, 100, 2, 1000];
_.min(numbers);

_.sortBy([1, 2, 3, 4, 5, 6], (num) => Math.sin(num));


_([1.3, 2.1, 2.4]).groupBy((e) => Math.floor(e));
_.groupBy([1.3, 2.1, 2.4], (num: number) => Math.floor(num).toString());
_.groupBy(['one', 'two', 'three'], 'length');

_.indexBy(stooges, 'age')['40'].age;
_(stooges).indexBy('age')['40'].name;
_(stooges)
	.chain()
	.indexBy('age')
	.value()['40'].age;

_.shuffle([1, 2, 3, 4, 5, 6]);

(function(a, b, c, d){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4);

_.size({ one: 1, two: 2, three: 3 });

///////////////////////////////////////////////////////////////////////////////////////









_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);

_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
_.uniq([1, 2, 1, 3, 1, 4]);
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
var r = _.object<{ [key: string]: number }>(['moe', 'larry', 'curly'], [30, 40, 50]);
_.object([[<any>'moe', 30], [<any>'larry', 40], [<any>'curly', 50]]);

_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
_.sortedIndex([10, 20, 30, 40, 50], 35);
_.range(10);
_.range(1, 11);
_.range(0, 30, 5);
_.range(0, 30, 5);
_.range(0);

///////////////////////////////////////////////////////////////////////////////////////

var func = function (greeting) { return greeting + ': ' + this.name };
// need a second var otherwise typescript thinks func signature is the above func type,
// instead of the newly returned _bind => func type.
var func2 = _.bind(func, { name: 'moe' }, 'hi');
func2();

var buttonView = {
	label: 'underscore',
	onClick: function () { alert('clicked: ' + this.label); },
	onHover: function () { console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView);
$('#underscore_button').bind('click', buttonView.onClick);

var fibonacci = _.memoize(function (n) {
	return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');

_.defer(function () { alert('deferred'); });

var updatePosition = () => alert('updating position...');
var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);

var calculateLayout = () => alert('calculating layout...');
var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);

var createApplication = () => alert('creating application...');
var initialize = _.once(createApplication);
initialize();
initialize();

var notes: any[];
var render = () => alert("rendering...");
var renderNotes = _.after(notes.length, render);
_.each(notes, (note) => note.asyncSave({ success: renderNotes }));

var hello = function (name) { return "hello: " + name; };
// can't use the same "hello" var otherwise typescript fails
var hello2 = _.wrap(hello, (func) => { return "before, " + func("moe") + ", after"; });
hello2();

var greet = function (name) { return "hi: " + name; };
var exclaim = function (statement) { return statement + "!"; };
var welcome = _.compose(exclaim, greet);
welcome('moe');

///////////////////////////////////////////////////////////////////////////////////////

_.keys({ one: 1, two: 2, three: 3 });
_.values({ one: 1, two: 2, three: 3 });
_.pairs({ one: 1, two: 2, three: 3 });
_.invert({ Moe: "Moses", Larry: "Louis", Curly: "Jerome" });
_.functions(_);
_.extend({ name: 'moe' }, { age: 50 });
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']);

var iceCream = { flavor: "chocolate" };
_.defaults(iceCream, { flavor: "vanilla", sprinkles: "lots" });

_.clone({ name: 'moe' });
_.clone(['i', 'am', 'an', 'object!']);

_([1, 2, 3, 4])
	.chain()
	.filter((num: number) => {
		return num % 2 == 0;
	}).tap(alert)
	.map((num: number) => {
		return num * num;
	})
	.value();

_.chain([1, 2, 3, 200])
	.filter(function (num: number) { return num % 2 == 0; })
	.tap(alert)
	.map(function (num: number) { return num * num })
	.value();

_.has({ a: 1, b: 2, c: 3 }, "b");

var moe = { name: 'moe', luckyNumbers: [13, 27, 34] };
var clone = { name: 'moe', luckyNumbers: [13, 27, 34] };
moe == clone;
_.isEqual(moe, clone);

_.isEmpty([1, 2, 3]);
_.isEmpty({});

_.isElement($('body')[0]);

(function () { return _.isArray(arguments); })();
_.isArray([1, 2, 3]);

_.isObject({});
_.isObject(1);


// (() => { return _.isArguments(arguments); })(1, 2, 3);
_.isArguments([1, 2, 3]);

_.isFunction(alert);

_.isString("moe");

_.isNumber(8.4 * 5);

_.isFinite(-101);

_.isFinite(-Infinity);

_.isBoolean(null);

_.isDate(new Date());

_.isRegExp(/moe/);

_.isNaN(NaN);
isNaN(undefined);
_.isNaN(undefined);

_.isNull(null);
_.isNull(undefined);

_.isUndefined((<any>window).missingVariable);

///////////////////////////////////////////////////////////////////////////////////////

var underscore = _.noConflict();

var moe2 = { name: 'moe' };
moe2 === _.identity(moe);

var genie;
var r2 = _.times<number>(3, (n) => { return n * n });
_(3).times(function (n) { genie.grantWishNumber(n); });

_.random(0, 100);

_.mixin({
	capitalize: function (string) {
		return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	}
});
(<any>_("fabio")).capitalize();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

var object = { cheese: 'crumpets', stuff: function () { return 'nonsense'; } };
_.result(object, 'cheese');

_.result(object, 'stuff');

var compiled = _.template("hello: <%= name %>");
compiled({ name: 'moe' });
var list2 = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
_.template(list2, { people: ['moe', 'curly', 'larry'] });
var template = _.template("<b><%- value %></b>");
template({ value: '<script>' });
var compiled2 = _.template("<% print('Hello ' + epithet); %>");
compiled2({ epithet: "stooge" });
_.templateSettings = {
	interpolate: /\{\{(.+?)\}\}/g
};
var template2 = _.template("Hello {{ name }}!");
template2({ name: "Mustache" });
_.template("Using 'with': <%= data.answer %>", { answer: 'no' }, { variable: 'data' });


_(['test', 'test']).pick(['test2', 'test2']);

//////////////// Chain Tests
function chain_tests() {
    var list:number[] = _.chain([1, 2, 3, 4, 5, 6, 7, 8])
        .filter(n => n % 2 == 0)
        .map(n => n * n)
        .value();

    _([1, 2, 3, 4])
        .chain()
        .filter((num: number) => {
            return num % 2 == 0;
        }).tap(alert)
        .map((num: number) => {
            return num * num;
        })
        .value();

    _.chain([1, 2, 3, 200])
        .filter(function (num: number) { return num % 2 == 0; })
        .tap(alert)
        .map(function (num: number) { return num * num })
        .value();
}
