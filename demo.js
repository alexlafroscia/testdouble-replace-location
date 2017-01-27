const { expect } = chai;

describe('mocking the location object', function(){
  it('should allow replacing methods', function() {
    const replace = td.function('replace');
    td.replace(window.location, 'replace', replace);

    const info = td.explain(window.location.replace);

    expect(info.description).not.to.equal('This is not a test double.');
  });
});
