describe('Initialized empty defaultdict', function() {

  it('Must have a default function', function() {
    expect(function() { new DefaultDict(); }).toThrow();
    expect(function() { new DefaultDict(1); }).toThrow();
    expect(function() { new DefaultDict(Number); }).not.toThrow();
  });

  it('Returns its default value when a key is missing', function() {
    var defaultFn = String;
    var defaultFnValue = defaultFn();
    var dd = new DefaultDict(defaultFn);

    var missingKeys = [1, 2, 3];
    missingKeys.forEach(function(key) {
      expect(dd.contains(key)).toBe(false);
      expect(dd.get(key)).toBe(defaultFnValue);
    });
  });

  it('Returns custom supplied default value when a key is missing and get is called with a second arg', function() {
    var dd = new DefaultDict(String);
    var missingKeys = [1, 2, 3];
    var forcedDefault = {'this': 'isRight'};
    missingKeys.forEach(function(key) {
      expect(dd.contains(key)).toBe(false);
      expect(dd.get(key, forcedDefault)).toBe(forcedDefault);
    });
  });

});